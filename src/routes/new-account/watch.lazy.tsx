import { commands } from "@/commands.gen";
import { Frame, GoBack } from "@/components";
import { Spinner } from "@/components/spinner";
import { createLazyFileRoute } from "@tanstack/react-router";
import { readText } from "@tauri-apps/plugin-clipboard-manager";
import { message } from "@tauri-apps/plugin-dialog";
import { useState, useTransition } from "react";

export const Route = createLazyFileRoute("/new-account/watch")({
	component: Screen,
});

function Screen() {
	const navigate = Route.useNavigate();

	const [key, setKey] = useState("");
	const [isPending, startTransition] = useTransition();

	const pasteFromClipboard = async () => {
		const val = await readText();
		setKey(val);
	};

	const submit = () => {
		startTransition(async () => {
			if (!key.startsWith("npub") && !key.startsWith("nprofile")) {
				await message(
					"You need to enter a valid public key starts with npub or nprofile",
					{ kind: "info" },
				);
				return;
			}

			const res = await commands.watchAccount(key);

			if (res.status === "ok") {
				navigate({ to: "/", replace: true });
			} else {
				await message(res.error, {
					kind: "error",
				});
				return;
			}
		});
	};

	return (
		<div
			data-tauri-drag-region
			className="bg-white/50 dark:bg-black/50 size-full flex items-center justify-center"
		>
			<div className="w-[340px] flex flex-col gap-8">
				<div className="flex flex-col gap-1 text-center">
					<h1 className="leading-tight text-xl font-semibold">
						Continue with Public Key (Watch Mode)
					</h1>
				</div>
				<div className="flex flex-col gap-5">
					<Frame
						className="flex flex-col gap-3 p-4 rounded-xl overflow-hidden"
						shadow
					>
						<div className="flex flex-col gap-2.5">
							<label
								htmlFor="key"
								className="text-sm font-semibold text-neutral-800 dark:text-neutral-200"
							>
								Public Key
							</label>
							<div className="relative">
								<input
									name="key"
									type="password"
									placeholder="npub or nprofile..."
									value={key}
									onChange={(e) => setKey(e.target.value)}
									className="pl-3 pr-12 rounded-lg w-full h-10 bg-transparent border border-neutral-200 dark:border-neutral-700 focus:border-blue-500 focus:outline-none placeholder:text-neutral-400"
								/>
								<button
									type="button"
									onClick={() => pasteFromClipboard()}
									className="absolute top-1/2 right-2 transform -translate-y-1/2 text-xs font-semibold text-blue-500 dark:text-blue-300"
								>
									Paste
								</button>
							</div>
						</div>
					</Frame>
					<div className="flex flex-col items-center gap-1">
						<button
							type="button"
							onClick={() => submit()}
							disabled={isPending}
							className="inline-flex items-center justify-center w-full h-9 text-sm font-semibold text-white bg-blue-500 rounded-lg shrink-0 hover:bg-blue-600 disabled:opacity-50"
						>
							{isPending ? <Spinner /> : "Continue"}
						</button>
						<GoBack className="mt-2 w-full text-sm text-neutral-600 dark:text-neutral-400 inline-flex items-center justify-center">
							Go back to previous screen
						</GoBack>
					</div>
				</div>
			</div>
		</div>
	);
}
