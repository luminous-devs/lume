import { type Result, type RichEvent, commands } from "@/commands.gen";
import type { NostrEvent } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { nip19 } from "nostr-tools";
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
				let normalizeId: string = id
					.replace("nostr:", "")
					.replace(/[^\w\s]/gi, "");

				// Define query
				let query: Result<RichEvent, string>;
				let relayHint: string = null;

				if (normalizeId.startsWith("nevent1")) {
					const decoded = nip19.decode(normalizeId);

					if (decoded.type === "nevent") {
						relayHint = decoded.data.relays[0];
						normalizeId = decoded.data.id;
					}
				}

				// Build query
				if (relayHint?.length) {
					query = await commands.getEventFrom(normalizeId, relayHint);
				} else {
					query = await commands.getEvent(normalizeId);
				}

				if (query.status === "ok") {
					const data = query.data;
					const raw: NostrEvent = JSON.parse(data.raw);

					if (data.parsed) {
						raw.meta = data.parsed;
					}

					return new LumeEvent(raw);
				} else {
					throw new Error(query.error);
				}
			} catch (e) {
				throw new Error(String(e));
			}
		},
		refetchOnWindowFocus: false,
		refetchOnMount: false,
		refetchOnReconnect: false,
		staleTime: Number.POSITIVE_INFINITY,
		retry: 2,
	});

	return { isLoading, isError, error, data };
}
