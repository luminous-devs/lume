import { Note } from "@/components/note";
import type { LumeEvent } from "@lume/system";
import { NoteParent } from "./parent";

export function NoteChild({ event }: { event: LumeEvent }) {
	return (
		<Note.Provider event={event}>
			<Note.Root className="flex flex-col gap-6 mb-3">
				<div>
					<div className="flex items-center justify-between">
						<Note.User />
						<Note.Menu />
					</div>
					<div className="flex gap-2">
						<div className="w-8 shrink-0" />
						<div className="flex flex-col gap-2">
							<Note.ContentLarge />
							<div className="flex items-center gap-1 -ml-2">
								<Note.Reply large />
								<Note.Repost large />
								<Note.Zap large />
							</div>
						</div>
					</div>
				</div>
				{event.replies?.length ? (
					<div className="flex flex-col gap-3 pl-4">
						<div className="flex flex-col pl-6 border-l border-black/10 dark:border-white/10">
							{event.replies?.map((childEvent) => (
								<NoteParent key={childEvent.id} event={childEvent} />
							))}
						</div>
					</div>
				) : null}
			</Note.Root>
		</Note.Provider>
	);
}
