import { NDKEvent } from '@nostr-dev-kit/ndk';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useVirtualizer } from '@tanstack/react-virtual';
import { useCallback, useMemo, useRef } from 'react';

import { useStorage } from '@libs/storage/provider';

import { ArrowRightCircleIcon, LoaderIcon } from '@shared/icons';
import { NoteKind_1, NoteKind_1063, NoteThread, Repost } from '@shared/notes';
import { NoteKindUnsupport } from '@shared/notes/kinds/unsupport';
import { NoteSkeleton } from '@shared/notes/skeleton';
import { TitleBar } from '@shared/titleBar';

import { DBEvent, Widget } from '@utils/types';

export function FeedWidget({ params }: { params: Widget }) {
  const { db } = useStorage();
  const { status, data, hasNextPage, isFetchingNextPage, fetchNextPage } =
    useInfiniteQuery({
      queryKey: ['groupfeed-widget', params.content],
      queryFn: async ({ pageParam = 0 }) => {
        const authors = JSON.parse(params.content);
        return await db.getAllEventsByAuthors(authors, 20, pageParam);
      },
      getNextPageParam: (lastPage) => lastPage.nextCursor,
    });

  const dbEvents = useMemo(
    () => (data ? data.pages.flatMap((d: { data: DBEvent[] }) => d.data) : []),
    [data]
  );
  const parentRef = useRef<HTMLDivElement>();
  const virtualizer = useVirtualizer({
    count: hasNextPage ? dbEvents.length : dbEvents.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 650,
    overscan: 4,
  });
  const items = virtualizer.getVirtualItems();

  // render event match event kind
  const renderItem = useCallback(
    (index: string | number) => {
      const dbEvent: DBEvent = dbEvents[index];
      if (!dbEvent) return;

      const event: NDKEvent = JSON.parse(dbEvent.event as string);

      switch (event.kind) {
        case 1: {
          if (dbEvent.root_id || dbEvent.reply_id) {
            return (
              <div
                key={(dbEvent.root_id || dbEvent.reply_id) + dbEvent.id + index}
                data-index={index}
                ref={virtualizer.measureElement}
              >
                <NoteThread
                  event={event}
                  root={dbEvent.root_id}
                  reply={dbEvent.reply_id}
                />
              </div>
            );
          } else {
            return (
              <div
                key={dbEvent.id + index}
                data-index={index}
                ref={virtualizer.measureElement}
              >
                <NoteKind_1 event={event} skipMetadata={false} />
              </div>
            );
          }
        }
        case 6:
          return (
            <div
              key={dbEvent.id + index}
              data-index={index}
              ref={virtualizer.measureElement}
            >
              <Repost key={dbEvent.id} event={event} />
            </div>
          );
        case 1063:
          return (
            <div
              key={dbEvent.id + index}
              data-index={index}
              ref={virtualizer.measureElement}
            >
              <NoteKind_1063 key={dbEvent.id} event={event} />
            </div>
          );
        default:
          return (
            <div
              key={dbEvent.id + index}
              data-index={index}
              ref={virtualizer.measureElement}
            >
              <NoteKindUnsupport key={dbEvent.id} event={event} />
            </div>
          );
      }
    },
    [dbEvents]
  );

  return (
    <div className="relative w-[400px] shrink-0 bg-white/10">
      <TitleBar id={params.id} title={params.title} />
      <div ref={parentRef} className="scrollbar-hide h-full overflow-y-auto pb-20">
        {status === 'loading' ? (
          <div className="px-3 py-1.5">
            <div className="rounded-xl bg-white/10 px-3 py-3">
              <NoteSkeleton />
            </div>
          </div>
        ) : items.length === 0 ? (
          <div className="px-3 py-1.5">
            <div className="bbg-white/10 rounded-xl px-3 py-6">
              <div className="flex flex-col items-center gap-4">
                <p className="text-center text-sm text-white">
                  Not found any postrs from last 48 hours
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: `${virtualizer.getTotalSize()}px`,
            }}
          >
            <div
              className="absolute left-0 top-0 w-full"
              style={{
                transform: `translateY(${items[0].start}px)`,
              }}
            >
              {items.map((item) => renderItem(item.index))}
            </div>
          </div>
        )}
        {isFetchingNextPage && (
          <div className="px-3 py-1.5">
            <div className="rounded-xl bg-white/10 px-3 py-3">
              <NoteSkeleton />
            </div>
          </div>
        )}
        <div className="px-3 py-1.5">
          <button
            onClick={() => fetchNextPage()}
            disabled={!hasNextPage || isFetchingNextPage}
            className="inline-flex h-11 w-full items-center justify-between gap-2 rounded-lg bg-fuchsia-500 px-6 font-medium leading-none text-white hover:bg-fuchsia-600 focus:outline-none"
          >
            {isFetchingNextPage ? (
              <>
                <span className="w-5" />
                <span>Loading...</span>
                <LoaderIcon className="h-5 w-5 animate-spin text-white" />
              </>
            ) : hasNextPage ? (
              <>
                <span className="w-5" />
                <span>Load more</span>
                <ArrowRightCircleIcon className="h-5 w-5" />
              </>
            ) : (
              <>
                <span className="w-5" />
                <span>Nothing more to load</span>
                <ArrowRightCircleIcon className="h-5 w-5" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
