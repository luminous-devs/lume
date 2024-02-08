import { CheckIcon, EyeOffIcon, EyeOnIcon, LoaderIcon } from "@lume/icons";
import { Keys } from "@lume/types";
import { onboardingAtom } from "@lume/utils";
import * as Checkbox from "@radix-ui/react-checkbox";
import { invoke } from "@tauri-apps/api/core";
import { desktopDir } from "@tauri-apps/api/path";
import { save } from "@tauri-apps/plugin-dialog";
import { writeTextFile } from "@tauri-apps/plugin-fs";
import { useSetAtom } from "jotai";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export function CreateAccountKeys() {
	const setOnboarding = useSetAtom(onboardingAtom);
	const navigate = useNavigate();

	const [t] = useTranslation();
	const [key, setKey] = useState("");
	const [loading, setLoading] = useState(false);
	const [showKey, setShowKey] = useState(false);
	const [confirm, setConfirm] = useState({ c1: false, c2: false, c3: false });

	const submit = async () => {
		try {
			setLoading(true);

			// trigger save key
			await invoke("save_key", { nsec: key });

			// update state
			setLoading(false);
			setOnboarding({ open: true, newUser: true });

			// redirect to next step
			return navigate("/auth/onboarding", { replace: true });
		} catch (e) {
			setLoading(false);
			toast.error(String(e));
		}
	};

	useEffect(() => {
		async function createAccountKeys() {
			const keys: Keys = await invoke("create_keys");
			setKey(keys.nsec);
		}
		createAccountKeys();
	}, []);

	return (
		<div className="relative flex items-center justify-center w-full h-full">
			<div className="flex flex-col w-full max-w-md gap-8 mx-auto">
				<div className="flex flex-col gap-1 text-center items-center">
					<h1 className="text-2xl font-semibold">
						{t("signupWithSelfManage.title")}
					</h1>
					<p className="text-lg font-medium leading-snug text-neutral-600 dark:text-neutral-500">
						{t("signupWithSelfManage.subtitle")}
					</p>
				</div>
				<div className="flex flex-col gap-6 mb-0">
					<div className="flex flex-col gap-6">
						<div className="relative">
							<input
								readOnly
								value={key}
								type={showKey ? "text" : "password"}
								className="pl-3 pr-14 w-full resize-none text-xl border-transparent rounded-xl h-14 bg-neutral-900 placeholder:text-neutral-600 focus:border-blue-500 focus:ring focus:ring-blue-800"
							/>
							<button
								type="button"
								onClick={() => setShowKey((state) => !state)}
								className="absolute right-2 top-2 size-10 inline-flex items-center justify-center rounded-lg text-white bg-neutral-800 hover:bg-neutral-700"
							>
								{showKey ? (
									<EyeOnIcon className="size-5" />
								) : (
									<EyeOffIcon className="size-5" />
								)}
							</button>
						</div>
						<div className="flex flex-col gap-3">
							<div className="flex items-center gap-2">
								<Checkbox.Root
									checked={confirm.c1}
									onCheckedChange={() =>
										setConfirm((state) => ({ ...state, c1: !state.c1 }))
									}
									className="flex size-7 appearance-none items-center justify-center rounded-lg bg-neutral-900 outline-none"
									id="confirm1"
								>
									<Checkbox.Indicator className="text-blue-500">
										<CheckIcon className="size-4" />
									</Checkbox.Indicator>
								</Checkbox.Root>
								<label
									className="text-sm leading-none text-neutral-500"
									htmlFor="confirm1"
								>
									{t("signupWithSelfManage.confirm1")}
								</label>
							</div>
							<div className="flex items-center gap-2">
								<Checkbox.Root
									checked={confirm.c2}
									onCheckedChange={() =>
										setConfirm((state) => ({ ...state, c2: !state.c2 }))
									}
									className="flex size-7 appearance-none items-center justify-center rounded-lg bg-neutral-900 outline-none"
									id="confirm2"
								>
									<Checkbox.Indicator className="text-blue-500">
										<CheckIcon className="size-4" />
									</Checkbox.Indicator>
								</Checkbox.Root>
								<label
									className="text-sm leading-none text-neutral-500"
									htmlFor="confirm2"
								>
									{t("signupWithSelfManage.confirm2")}
								</label>
							</div>
							<div className="flex items-center gap-2">
								<Checkbox.Root
									checked={confirm.c3}
									onCheckedChange={() =>
										setConfirm((state) => ({ ...state, c3: !state.c3 }))
									}
									className="flex size-7 appearance-none items-center justify-center rounded-lg bg-neutral-900 outline-none"
									id="confirm3"
								>
									<Checkbox.Indicator className="text-blue-500">
										<CheckIcon className="size-4" />
									</Checkbox.Indicator>
								</Checkbox.Root>
								<label
									className="text-sm leading-none text-neutral-500"
									htmlFor="confirm3"
								>
									{t("signupWithSelfManage.confirm3")}
								</label>
							</div>
						</div>
					</div>
					<button
						type="button"
						onClick={submit}
						disabled={!confirm.c1 || !confirm.c2 || !confirm.c3}
						className="inline-flex items-center justify-center w-full h-12 text-lg font-medium text-white bg-blue-500 rounded-xl hover:bg-blue-600 disabled:opacity-50"
					>
						{loading ? (
							<LoaderIcon className="size-5 animate-spin" />
						) : (
							t("signupWithSelfManage.button")
						)}
					</button>
				</div>
			</div>
		</div>
	);
}
