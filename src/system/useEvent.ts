import { commands } from "@/commands.gen";
import type { NostrEvent } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { LumeEvent } from "./event";

export function useEvent(id: string, repost?: string) {
	const { isLoading, isError, error, data } = useQuery({
		queryKey: ["ids", "event", id],
		queryFn: async () => {
			try {
				if (repost?.length) {
					const nostrEvent: NostrEvent = JSON.parse(repost);
					const res = await commands.getEventMeta(nostrEvent.content);

					if (res.status === "ok") {
						nostrEvent.meta = res.data;
					}

					return new LumeEvent(nostrEvent);
				}

				// Validate ID
				const normalizeId: string = id
					.replace("nostr:", "")
					.replace(/[^\w\s]/gi, "");

				const res = await commands.getEvent(normalizeId);

				if (res.status === "ok") {
					const data = res.data;
					const raw: NostrEvent = JSON.parse(data.raw);

					if (data.parsed) {
						raw.meta = data.parsed;
					}

					return new LumeEvent(raw);
				} else {
					throw new Error(res.error);
				}
			} catch (e) {
				throw new Error(String(e));
			}
		},
		refetchOnWindowFocus: false,
		refetchOnMount: false,
		refetchOnReconnect: false,
	});

	return { isLoading, isError, error, data };
}
