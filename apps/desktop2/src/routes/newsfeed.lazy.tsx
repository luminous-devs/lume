import { RepostNote } from "@/components/repost";
import { Suggest } from "@/components/suggest";
import { TextNote } from "@/components/text";
import { useEvents } from "@lume/ark";
import { LoaderIcon, ArrowRightCircleIcon, InfoIcon } from "@lume/icons";
import { Event, Kind } from "@lume/types";
import { Column } from "@lume/ui";
import { createLazyFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Virtualizer } from "virtua";

export const Route = createLazyFileRoute("/newsfeed")({
  component: Screen,
});

export function Screen() {
  // @ts-ignore, just work!!!
  const { id, name, account } = Route.useSearch();
  const { t } = useTranslation();
  const {
    data,
    hasNextPage,
    isLoading,
    isRefetching,
    isFetchingNextPage,
    fetchNextPage,
  } = useEvents("local", account);

  const renderItem = (event: Event) => {
    if (!event) return;
    switch (event.kind) {
      case Kind.Repost:
        return <RepostNote key={event.id} event={event} />;
      default:
        return <TextNote key={event.id} event={event} />;
    }
  };

  return (
    <Column.Root>
      <Column.Header id={id} name={name} />
      <Column.Content>
        {isLoading ? (
          <div className="flex h-20 w-full flex-col items-center justify-center gap-1">
            <button type="button" className="size-5" disabled>
              <LoaderIcon className="size-5 animate-spin" />
            </button>
          </div>
        ) : !data ? (
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 rounded-xl bg-neutral-50 p-5 dark:bg-neutral-950">
              <InfoIcon className="size-6" />
              <div>
                <p className="leading-tight">{t("emptyFeedTitle")}</p>
                <p className="leading-tight">{t("emptyFeedSubtitle")}</p>
              </div>
            </div>
            <Suggest />
          </div>
        ) : (
          <Virtualizer overscan={3}>
            {data.map((item) => renderItem(item))}
          </Virtualizer>
        )}
        <div className="flex h-20 items-center justify-center">
          {data?.length && hasNextPage ? (
            <button
              type="button"
              onClick={() => fetchNextPage()}
              disabled={isFetchingNextPage || isFetchingNextPage}
              className="inline-flex h-12 w-36 items-center justify-center gap-2 rounded-full bg-neutral-100 px-3 font-medium hover:bg-neutral-200 focus:outline-none dark:bg-neutral-900 dark:hover:bg-neutral-800"
            >
              {isFetchingNextPage ? (
                <LoaderIcon className="size-5 animate-spin" />
              ) : (
                <>
                  <ArrowRightCircleIcon className="size-5" />
                  Load more
                </>
              )}
            </button>
          ) : null}
        </div>
      </Column.Content>
    </Column.Root>
  );
}
