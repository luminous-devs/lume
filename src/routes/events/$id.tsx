import { NostrQuery } from "@/system";
import type { ColumnRouteSearch } from "@/types";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/events/$id")({
	validateSearch: (search: Record<string, string>): ColumnRouteSearch => {
		return {
			account: search.account,
			label: search.label,
			name: search.name,
		};
	},
	beforeLoad: async () => {
		const settings = await NostrQuery.getUserSettings();
		return { settings };
	},
});
