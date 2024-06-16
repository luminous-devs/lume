import { Column } from "@/components/column";
import { Toolbar } from "@/components/toolbar";
import { ArrowLeftIcon, ArrowRightIcon, PlusSquareIcon } from "@lume/icons";
import { NostrQuery } from "@lume/system";
import type { EventColumns, LumeColumn } from "@lume/types";
import { createFileRoute } from "@tanstack/react-router";
import { listen } from "@tauri-apps/api/event";
import { getCurrent } from "@tauri-apps/api/window";
import { nanoid } from "nanoid";
import { useEffect, useRef, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { VList, type VListHandle } from "virtua";

export const Route = createFileRoute("/$account/home")({
	loader: async () => {
		const columns = await NostrQuery.getColumns();
		return columns;
	},
	component: Screen,
});

function Screen() {
	const { account } = Route.useParams();
	const initialColumnList = Route.useLoaderData();
	const vlistRef = useRef<VListHandle>(null);

	const [columns, setColumns] = useState<LumeColumn[]>([]);
	const [selectedIndex, setSelectedIndex] = useState(-1);
	const [isScroll, setIsScroll] = useState(false);
	const [isResize, setIsResize] = useState(false);

	const openLumeStore = async () => {
		const column: LumeColumn = {
			label: "store",
			name: "Store",
			content: "/store/official",
		};
		const mainWindow = getCurrent();
		await mainWindow.emit("columns", { type: "add", column });
	};

	const reset = () => {
		setColumns(null);
		setSelectedIndex(-1);
	};

	const goLeft = () => {
		const prevIndex = Math.max(selectedIndex - 1, 0);
		setSelectedIndex(prevIndex);
		vlistRef.current.scrollToIndex(prevIndex, {
			align: "center",
		});
	};

	const goRight = () => {
		const nextIndex = Math.min(selectedIndex + 1, columns.length - 1);
		setSelectedIndex(nextIndex);
		vlistRef.current.scrollToIndex(nextIndex, {
			align: "center",
		});
	};

	const add = useDebouncedCallback((column: LumeColumn) => {
		// update col label
		column.label = `${column.label}-${nanoid()}`;

		setColumns((prev) => [...prev, column]);
		setSelectedIndex(columns.length + 1);
		setIsScroll(true);

		// scroll to the newest column
		vlistRef.current.scrollToIndex(columns.length + 1, {
			align: "center",
		});
	}, 150);

	const remove = useDebouncedCallback((label: string) => {
		setColumns((prev) => prev.filter((t) => t.label !== label));
		setSelectedIndex(columns.length - 1);
		setIsScroll(true);

		// scroll to the first column
		vlistRef.current.scrollToIndex(columns.length - 1, {
			align: "start",
		});
	}, 150);

	const updateName = useDebouncedCallback((label: string, title: string) => {
		const currentColIndex = columns.findIndex((col) => col.label === label);

		const updatedCol = Object.assign({}, columns[currentColIndex]);
		updatedCol.name = title;

		const newCols = columns.slice();
		newCols[currentColIndex] = updatedCol;

		setColumns(newCols);
	}, 150);

	const startResize = useDebouncedCallback(
		() => setIsResize((prev) => !prev),
		150,
	);

	useEffect(() => {
		if (columns?.length) {
			NostrQuery.setColumns(columns).then(() => console.log("saved"));
		}
	}, [columns]);

	useEffect(() => {
		setColumns(initialColumnList);
	}, [initialColumnList]);

	useEffect(() => {
		const unlistenColEvent = listen<EventColumns>("columns", (data) => {
			if (data.payload.type === "reset") reset();
			if (data.payload.type === "add") add(data.payload.column);
			if (data.payload.type === "remove") remove(data.payload.label);
			if (data.payload.type === "set_title")
				updateName(data.payload.label, data.payload.title);
		});

		const unlistenWindowResize = getCurrent().listen("tauri://resize", () => {
			startResize();
		});

		return () => {
			unlistenColEvent.then((f) => f());
			unlistenWindowResize.then((f) => f());
		};
	}, []);

	return (
		<div className="w-full h-full">
			<VList
				ref={vlistRef}
				horizontal
				tabIndex={-1}
				itemSize={500}
				overscan={3}
				onScroll={() => setIsScroll(true)}
				onScrollEnd={() => setIsScroll(false)}
				className="w-full h-full overflow-x-auto scrollbar-none focus:outline-none"
			>
				{columns?.map((column) => (
					<Column
						key={account + column.label}
						column={column}
						account={account}
						isScroll={isScroll}
						isResize={isResize}
					/>
				))}
			</VList>
			<Toolbar>
				<div className="flex items-center h-8 gap-1 p-[2px] rounded-full bg-black/5 dark:bg-white/5">
					<button
						type="button"
						onClick={() => goLeft()}
						className="inline-flex items-center justify-center rounded-full size-7 text-neutral-800 hover:bg-black/10 dark:text-neutral-200 dark:hover:bg-white/10"
					>
						<ArrowLeftIcon className="size-4" />
					</button>
					<button
						type="button"
						onClick={() => openLumeStore()}
						className="inline-flex items-center justify-center rounded-full size-7 text-neutral-800 hover:bg-black/10 dark:text-neutral-200 dark:hover:bg-white/10"
					>
						<PlusSquareIcon className="size-4" />
					</button>
					<button
						type="button"
						onClick={() => goRight()}
						className="inline-flex items-center justify-center rounded-full size-7 text-neutral-800 hover:bg-black/10 dark:text-neutral-200 dark:hover:bg-white/10"
					>
						<ArrowRightIcon className="size-4" />
					</button>
				</div>
			</Toolbar>
		</div>
	);
}
