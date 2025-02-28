import { cn } from "@/commons";
import {
	CloudArrowDown,
	CurrencyBtc,
	GearSix,
	HardDrives,
} from "@phosphor-icons/react";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import { Link } from "@tanstack/react-router";
import { Outlet, createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/settings")({
	component: Screen,
});

function Screen() {
	const { platform } = Route.useRouteContext();

	return (
		<div className="flex size-full">
			<div
				data-tauri-drag-region
				className={cn(
					"w-[200px] shrink-0 flex flex-col gap-1 border-r border-black/10 dark:border-white/10 p-2",
					platform === "macos" ? "pt-11" : "",
				)}
			>
				<div className="h-8 px-1.5">
					<h1 className="text-lg font-semibold">Settings</h1>
				</div>
				<Link to="/settings/general">
					{({ isActive }) => {
						return (
							<div
								className={cn(
									"h-9 w-full inline-flex items-center gap-1.5 rounded-lg p-2",
									isActive
										? "bg-black/10 hover:bg-black/20 dark:bg-white/10 text-neutral-900 dark:text-neutral-100 dark:hover:bg-bg-white/20"
										: "text-neutral-700 hover:bg-black/10 dark:text-neutral-300 dark:hover:bg-white/10",
								)}
							>
								<GearSix className="size-5 shrink-0" />
								<p className="text-sm font-medium">General</p>
							</div>
						);
					}}
				</Link>
				<Link to="/settings/sync">
					{({ isActive }) => {
						return (
							<div
								className={cn(
									"h-9 w-full inline-flex items-center gap-1.5 rounded-lg p-2",
									isActive
										? "bg-black/10 hover:bg-black/20 dark:bg-white/10 text-neutral-900 dark:text-neutral-100 dark:hover:bg-bg-white/20"
										: "text-neutral-700 hover:bg-black/10 dark:text-neutral-300 dark:hover:bg-white/10",
								)}
							>
								<CloudArrowDown className="size-5 shrink-0" />
								<p className="text-sm font-medium">Sync</p>
							</div>
						);
					}}
				</Link>
				<Link to="/settings/relays">
					{({ isActive }) => {
						return (
							<div
								className={cn(
									"h-9 w-full inline-flex items-center gap-1.5 rounded-lg p-2",
									isActive
										? "bg-black/10 hover:bg-black/20 dark:bg-white/10 text-neutral-900 dark:text-neutral-100 dark:hover:bg-bg-white/20"
										: "text-neutral-700 hover:bg-black/10 dark:text-neutral-300 dark:hover:bg-white/10",
								)}
							>
								<HardDrives className="size-5 shrink-0" />
								<p className="text-sm font-medium">Relays</p>
							</div>
						);
					}}
				</Link>
				<Link to="/settings/wallet">
					{({ isActive }) => {
						return (
							<div
								className={cn(
									"h-9 w-full inline-flex items-center gap-1.5 rounded-lg p-2",
									isActive
										? "bg-black/10 hover:bg-black/20 dark:bg-white/10 text-neutral-900 dark:text-neutral-100 dark:hover:bg-bg-white/20"
										: "text-neutral-700 hover:bg-black/10 dark:text-neutral-300 dark:hover:bg-white/10",
								)}
							>
								<CurrencyBtc className="size-5 shrink-0" />
								<p className="text-sm font-medium">Wallet</p>
							</div>
						);
					}}
				</Link>
			</div>
			<ScrollArea.Root
				type={"scroll"}
				scrollHideDelay={300}
				className="flex-1 overflow-hidden size-full"
			>
				<ScrollArea.Viewport className="relative h-full pt-12">
					<Outlet />
				</ScrollArea.Viewport>
				<ScrollArea.Scrollbar
					className="flex select-none touch-none p-0.5 duration-[160ms] ease-out data-[orientation=vertical]:w-2"
					orientation="vertical"
				>
					<ScrollArea.Thumb className="flex-1 bg-black/10 dark:bg-white/10 rounded-full relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
				</ScrollArea.Scrollbar>
				<ScrollArea.Corner className="bg-transparent" />
			</ScrollArea.Root>
		</div>
	);
}
