import { HorizontalDotsIcon } from "@lume/icons";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { writeText } from "@tauri-apps/plugin-clipboard-manager";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { useArk } from "../../provider";
import { useNoteContext } from "./provider";

export function NoteMenu() {
	const ark = useArk();
	const event = useNoteContext();
	const navigate = useNavigate();

	const { t } = useTranslation();

	const copyID = async () => {
		await writeText(await ark.event_to_bech32(event.id, [""]));
	};

	const copyRaw = async () => {
		await writeText(JSON.stringify(event));
	};

	const copyNpub = async () => {
		await writeText(await ark.user_to_bech32(event.pubkey, [""]));
	};

	const copyLink = async () => {
		await writeText(
			`https://njump.me/${await ark.event_to_bech32(event.id, [""])}`,
		);
	};

	return (
		<DropdownMenu.Root>
			<DropdownMenu.Trigger asChild>
				<button
					type="button"
					className="inline-flex items-center justify-center size-6"
				>
					<HorizontalDotsIcon className="size-4 hover:text-blue-500 dark:text-neutral-200" />
				</button>
			</DropdownMenu.Trigger>
			<DropdownMenu.Portal>
				<DropdownMenu.Content className="flex w-[200px] p-2 flex-col overflow-hidden rounded-2xl bg-white/50 dark:bg-black/50 ring-1 ring-black/10 dark:ring-white/10 backdrop-blur-2xl focus:outline-none">
					<DropdownMenu.Item asChild>
						<button
							type="button"
							onClick={() => copyLink()}
							className="inline-flex items-center gap-3 px-3 text-sm font-medium rounded-lg h-9 text-black/70 hover:bg-black/10 hover:text-black focus:outline-none dark:text-white/70 dark:hover:bg-white/10 dark:hover:text-white"
						>
							{t("note.menu.viewThread")}
						</button>
					</DropdownMenu.Item>
					<DropdownMenu.Item asChild>
						<button
							type="button"
							onClick={() => navigate(`/events/${event.id}`)}
							className="inline-flex items-center gap-3 px-3 text-sm font-medium rounded-lg h-9 text-black/70 hover:bg-black/10 hover:text-black focus:outline-none dark:text-white/70 dark:hover:bg-white/10 dark:hover:text-white"
						>
							{t("note.menu.copyLink")}
						</button>
					</DropdownMenu.Item>
					<DropdownMenu.Item asChild>
						<button
							type="button"
							onClick={() => copyID()}
							className="inline-flex items-center gap-3 px-3 text-sm font-medium rounded-lg h-9 text-black/70 hover:bg-black/10 hover:text-black focus:outline-none dark:text-white/70 dark:hover:bg-white/10 dark:hover:text-white"
						>
							{t("note.menu.copyNoteId")}
						</button>
					</DropdownMenu.Item>
					<DropdownMenu.Item asChild>
						<button
							type="button"
							onClick={() => copyNpub()}
							className="inline-flex items-center gap-3 px-3 text-sm font-medium rounded-lg h-9 text-black/70 hover:bg-black/10 hover:text-black focus:outline-none dark:text-white/70 dark:hover:bg-white/10 dark:hover:text-white"
						>
							{t("note.menu.copyAuthorId")}
						</button>
					</DropdownMenu.Item>
					<DropdownMenu.Item asChild>
						<Link
							to={`/users/${event.pubkey}`}
							className="inline-flex items-center gap-3 px-3 text-sm font-medium rounded-lg h-9 text-black/70 hover:bg-black/10 hover:text-black focus:outline-none dark:text-white/70 dark:hover:bg-white/10 dark:hover:text-white"
						>
							{t("note.menu.viewAuthor")}
						</Link>
					</DropdownMenu.Item>
					<DropdownMenu.Item asChild>
						<button
							type="button"
							className="inline-flex items-center gap-3 px-3 text-sm font-medium rounded-lg h-9 text-black/70 hover:bg-black/10 hover:text-black focus:outline-none dark:text-white/70 dark:hover:bg-white/10 dark:hover:text-white"
						>
							{t("note.menu.pinAuthor")}
						</button>
					</DropdownMenu.Item>
					<DropdownMenu.Separator className="h-px my-1 bg-black/10 dark:bg-white/10" />
					<DropdownMenu.Item asChild>
						<button
							type="button"
							onClick={() => copyRaw()}
							className="inline-flex items-center gap-3 px-3 text-sm font-medium rounded-lg h-9 text-black/70 hover:bg-black/10 hover:text-black focus:outline-none dark:text-white/70 dark:hover:bg-white/10 dark:hover:text-white"
						>
							{t("note.menu.copyRaw")}
						</button>
					</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Portal>
		</DropdownMenu.Root>
	);
}
