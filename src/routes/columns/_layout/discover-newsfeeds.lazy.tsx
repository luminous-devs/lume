import { commands } from "@/commands.gen";
import { toLumeEvents } from "@/commons";
import { Spinner, User } from "@/components";
import { LumeWindow } from "@/system";
import { ArrowDown } from "@phosphor-icons/react";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import { useInfiniteQuery } from "@tanstack/react-query";
import { createLazyFileRoute } from "@tanstack/react-router";
import { nanoid } from "nanoid";
import type { NostrEvent } from "nostr-tools";
import { type RefObject, useCallback, useRef } from "react";
import { Virtualizer } from "virtua";

export const Route = createLazyFileRoute("/columns/_layout/discover-newsfeeds")(
	{
		component: Screen,
	},
);

function Screen() {
	const {
		isLoading,
		isError,
		error,
		isFetchingNextPage,
		hasNextPage,
		fetchNextPage,
		data,
	} = useInfiniteQuery({
		queryKey: ["local-newsfeeds"],
		initialPageParam: 0,
		queryFn: async ({ pageParam }: { pageParam: number }) => {
			const until = pageParam > 0 ? pageParam.toString() : null;
			const res = await commands.getAllLocalNewsfeeds(until);

			if (res.status === "ok") {
				const data = toLumeEvents(res.data);
				return data;
			} else {
				throw new Error(res.error);
			}
		},
		getNextPageParam: (lastPage) => {
			const lastEvent = lastPage.at(-1);

			if (lastEvent) {
				return lastEvent.created_at - 1;
			}
		},
		select: (data) =>
			data?.pages
				.flat()
				.filter(
					(item) => item.tags.filter((tag) => tag[0] === "p")?.length > 0,
				),
		refetchOnWindowFocus: false,
	});

	const ref = useRef<HTMLDivElement>(null);

	const renderItem = useCallback(
		(item: NostrEvent) => {
			const users = item.tags.filter((tag) => tag[0] === "p");
			const name =
				item.tags.find((tag) => tag[0] === "title")?.[1] || "Unnamed";
			const label = item.tags.find((tag) => tag[0] === "d")?.[1] || nanoid();

			return (
				<div
					key={item.id}
					className="mb-3 group flex flex-col rounded-xl overflow-hidden bg-white dark:bg-neutral-800/50 shadow-lg shadow-primary dark:ring-1 dark:ring-neutral-800"
				>
					<div className="px-2 pt-2">
						<div className="p-3 h-16 bg-neutral-100 dark:bg-neutral-800 rounded-lg">
							<div className="flex flex-wrap items-center justify-center gap-2">
								{users.slice(0, 5).map((tag) => (
									<User.Provider key={tag[1]} pubkey={tag[1]}>
										<User.Root>
											<User.Avatar className="size-8 rounded-full" />
										</User.Root>
									</User.Provider>
								))}
								{users.length > 5 ? (
									<div className="size-8 rounded-full inline-flex items-center justify-center bg-neutral-300 dark:bg-neutral-700">
										<p className="truncate leading-tight text-[8px] font-medium">
											+{users.length - 5}
										</p>
									</div>
								) : null}
							</div>
						</div>
					</div>
					<div className="p-2 flex items-center justify-between">
						<div className="inline-flex items-center gap-2">
							<User.Provider pubkey={item.pubkey}>
								<User.Root>
									<User.Avatar className="size-7 rounded-full" />
								</User.Root>
							</User.Provider>
							<h5 className="text-xs font-medium">{name}</h5>
						</div>
						<div className="flex items-center gap-3">
							<button
								type="button"
								onClick={() =>
									LumeWindow.openColumn({
										label,
										name,
										url: `/columns/groups/${item.id}`,
									})
								}
								className="h-6 w-16 inline-flex items-center justify-center gap-1 text-xs font-semibold rounded-full bg-neutral-200 dark:bg-neutral-700 hover:bg-blue-500 hover:text-white"
							>
								Add
							</button>
						</div>
					</div>
				</div>
			);
		},
		[data],
	);

	return (
		<ScrollArea.Root
			type={"scroll"}
			scrollHideDelay={300}
			className="overflow-hidden size-full"
		>
			<ScrollArea.Viewport ref={ref} className="relative h-full px-3 pb-3">
				<Virtualizer scrollRef={ref as unknown as RefObject<HTMLElement>}>
					{isLoading ? (
						<div className="flex items-center justify-center h-20 gap-2">
							<Spinner />
							<p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
								Loading event...
							</p>
						</div>
					) : isError ? (
						<div className="mb-3 flex flex-col items-center justify-center h-16 w-full rounded-xl overflow-hidden bg-neutral-200/50 dark:bg-neutral-800/20">
							<p className="text-xs text-center px-4 text-neutral-500 dark:text-neutral-400">
								{error?.message ?? "Error"}
							</p>
						</div>
					) : !data?.length ? (
						<div className="mb-3 flex flex-col items-center justify-center h-16 w-full rounded-xl overflow-hidden bg-neutral-200/50 dark:bg-neutral-800/20">
							<p className="text-xs text-center px-4 text-neutral-500 dark:text-neutral-400">
								Nothing to show yet, you can use Lume more and comeback lack to
								see new events.
							</p>
						</div>
					) : (
						data?.map((item) => renderItem(item))
					)}
					<div className="mb-3 flex flex-col items-center justify-center h-16 w-full rounded-xl overflow-hidden bg-neutral-200/50 dark:bg-neutral-800/20">
						<p className="text-xs text-center px-4 text-neutral-500 dark:text-neutral-400">
							Lume running sync in the background,
							<br />
							the more you use the more event you see.
						</p>
					</div>
					{hasNextPage ? (
						<button
							type="button"
							onClick={() => fetchNextPage()}
							disabled={isFetchingNextPage || isLoading}
							className="h-11 w-full px-3 flex items-center justify-center gap-1.5 bg-neutral-200/50 hover:bg-neutral-200 rounded-full text-sm font-medium text-blue-600 dark:hover:bg-neutral-800 dark:bg-neutral-800/50 dark:text-blue-400"
						>
							{isFetchingNextPage ? (
								<Spinner className="size-4" />
							) : (
								<>
									<ArrowDown className="size-4" />
									Load more
								</>
							)}
						</button>
					) : null}
				</Virtualizer>
			</ScrollArea.Viewport>
			<ScrollArea.Scrollbar
				className="flex select-none touch-none p-0.5 duration-[160ms] ease-out data-[orientation=vertical]:w-2"
				orientation="vertical"
			>
				<ScrollArea.Thumb className="flex-1 bg-black/10 dark:bg-white/10 rounded-full relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
			</ScrollArea.Scrollbar>
			<ScrollArea.Corner className="bg-transparent" />
		</ScrollArea.Root>
	);
}
