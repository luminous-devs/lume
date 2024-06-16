import { useQuery } from "@tanstack/react-query";
import { NostrQuery } from "../query";

export function useEvent(id: string, relayHint?: string) {
	const { isLoading, isError, data } = useQuery({
		queryKey: ["cache", "event", id],
		queryFn: async () => {
			try {
				const event = await NostrQuery.getEvent(id, relayHint);
				return event;
			} catch (e) {
				throw new Error(e);
			}
		},
		refetchOnWindowFocus: false,
		refetchOnMount: false,
		refetchOnReconnect: false,
		staleTime: Number.POSITIVE_INFINITY,
		retry: false,
	});

	return { isLoading, isError, data };
}
