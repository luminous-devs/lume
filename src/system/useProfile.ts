import { commands } from "@/commands.gen";
import type { Metadata } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { nip19 } from "nostr-tools";

export function useProfile(pubkey: string, embed?: string) {
	const {
		isLoading,
		isError,
		data: profile,
	} = useQuery({
		queryKey: ["metadata", "profile", pubkey],
		queryFn: async () => {
			if (embed) {
				const metadata: Metadata = JSON.parse(embed);
				return metadata;
			}

			let normalizedId = pubkey.replace("nostr:", "").replace(/[^\w\s]/gi, "");

			if (normalizedId.startsWith("nprofile")) {
				const decoded = nip19.decode(normalizedId);

				if (decoded.type === "nprofile") {
					normalizedId = decoded.data.pubkey;
				}
			}

			const query = await commands.getProfile(normalizedId);

			if (query.status === "ok") {
				return JSON.parse(query.data) as Metadata;
			} else {
				throw new Error(query.error);
			}
		},
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
	});

	return { isLoading, isError, profile };
}
