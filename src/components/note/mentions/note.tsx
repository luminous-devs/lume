import { replyAt } from "@/commons";
import { Note, Spinner, User } from "@/components";
import { LumeWindow, useEvent } from "@/system";
import { nip19 } from "nostr-tools";
import { type ReactNode, memo, useMemo } from "react";
import reactStringReplace from "react-string-replace";
import { Hashtag } from "./hashtag";
import { MentionUser } from "./user";

export const MentionNote = memo(function MentionNote({
	eventId,
}: {
	eventId: string;
}) {
	const { isLoading, isError, error, data: event } = useEvent(eventId);

	return (
		<div className="relative my-2">
			<div className="pl-3 before:content-[''] before:absolute before:top-1.5 before:bottom-1.5 before:left-0 before:border-l-[2px] before:border-black/10 dark:before:border-white/10">
				{isLoading ? (
					<div className="h-[32px] flex items-center gap-2 text-sm">
						<Spinner />
						Loadng note
					</div>
				) : isError || !event ? (
					<div className="flex flex-col break-all">
						<p className="text-sm font-medium text-red-500">
							{error?.message ??
								"Cannot found this note within your current relay set"}
						</p>
						<p className="text-sm">{eventId}</p>
					</div>
				) : (
					<Note.Provider event={event}>
						<User.Provider pubkey={event.pubkey}>
							<div className="group flex flex-col gap-1">
								<div>
									<User.Root className="inline">
										<User.Name
											className="font-medium text-blue-500"
											suffix=":"
										/>
									</User.Root>
									<div className="pl-2 inline select-text text-balance content-break overflow-hidden">
										{event.content.length > 300 ? (
											`${event.content.substring(0, 300)}...`
										) : (
											<Content text={event.content} className="inline" />
										)}
									</div>
								</div>
								<div className="flex-1 flex items-center justify-between">
									<span className="text-sm text-neutral-500">
										{replyAt(event.created_at)}
									</span>
									<div className="invisible group-hover:visible flex items-center justify-end">
										<button
											type="button"
											onClick={() =>
												LumeWindow.openColumn({
													name: "Thread",
													label: eventId.slice(0, 6),
													account: event.pubkey,
													url: `/columns/events/${eventId}`,
												})
											}
											className="mr-3 text-sm font-medium text-blue-500 hover:text-blue-600"
										>
											Show all
										</button>
										<Note.Reply />
										<Note.Repost />
										<Note.Zap />
									</div>
								</div>
							</div>
						</User.Provider>
					</Note.Provider>
				)}
			</div>
		</div>
	);
});

function Content({ text, className }: { text: string; className?: string }) {
	const content = useMemo(() => {
		let replacedText: ReactNode[] | string = text.trim();

		const nostr = replacedText
			.split(/\s+/)
			.filter((w) => w.startsWith("nostr:"));

		replacedText = reactStringReplace(text, /(https?:\/\/\S+)/g, (match, i) => (
			<a
				key={match + i}
				href={match}
				target="_blank"
				rel="noreferrer"
				className="text-blue-600 dark:text-blue-400 !underline"
			>
				{match}
			</a>
		));

		replacedText = reactStringReplace(replacedText, /#(\w+)/g, (match, i) => (
			<Hashtag key={match + i} tag={match} />
		));

		for (const word of nostr) {
			const bech32 = word.replace("nostr:", "").replace(/[^\w\s]/gi, "");
			try {
				const data = nip19.decode(bech32);

				switch (data.type) {
					case "npub":
						replacedText = reactStringReplace(
							replacedText,
							word,
							(match, i) => <MentionUser key={match + i} pubkey={data.data} />,
						);
						break;
					case "nprofile":
						replacedText = reactStringReplace(
							replacedText,
							word,
							(match, i) => (
								<MentionUser key={match + i} pubkey={data.data.pubkey} />
							),
						);
						break;
					default:
						replacedText = reactStringReplace(
							replacedText,
							word,
							(match, i) => (
								<a
									key={match + i}
									href={`https://njump.me/${bech32}`}
									target="_blank"
									rel="noreferrer"
									className="text-blue-600 dark:text-blue-400 !underline"
								>
									{match}
								</a>
							),
						);
						break;
				}
			} catch {
				console.log(word);
			}
		}

		return replacedText;
	}, [text]);

	return <div className={className}>{content}</div>;
}
