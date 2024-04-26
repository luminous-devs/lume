import { useEffect, useRef, useState } from "react";
import type { LumeColumn } from "@lume/types";
import { invoke } from "@tauri-apps/api/core";
import { cn } from "@lume/utils";

export function Col({
  column,
  account,
  isScroll,
  isResize,
}: {
  column: LumeColumn;
  account: string;
  isScroll: boolean;
  isResize: boolean;
}) {
  const container = useRef<HTMLDivElement>(null);
  const [webview, setWebview] = useState<string | undefined>(undefined);

  const repositionWebview = async () => {
    if (webview && webview.length > 1) {
      const newRect = container.current.getBoundingClientRect();
      await invoke("reposition_column", {
        label: webview,
        x: newRect.x,
        y: newRect.y,
      });
    }
  };

  const resizeWebview = async () => {
    if (webview && webview.length > 1) {
      const newRect = container.current.getBoundingClientRect();
      await invoke("resize_column", {
        label: webview,
        width: newRect.width,
        height: newRect.height,
      });
    }
  };

  useEffect(() => {
    resizeWebview();
  }, [isResize]);

  useEffect(() => {
    if (isScroll) repositionWebview();
  }, [isScroll]);

  useEffect(() => {
    (async () => {
      if (webview && webview.length > 1) return;

      const rect = container.current.getBoundingClientRect();
      const windowLabel = `column-${column.label}`;
      const url = `${column.content}?account=${account}&label=${column.label}&name=${column.name}`;

      // create new webview
      const label: string = await invoke("create_column", {
        label: windowLabel,
        x: rect.x,
        y: rect.y,
        width: rect.width,
        height: rect.height,
        url,
      });

      setWebview(label);
    })();

    // close webview when unmounted
    return () => {
      if (webview && webview.length > 1) {
        invoke("close_column", {
          label: webview,
        });
      }
    };
  }, [webview]);

  return (
    <div className="h-full w-[440px] shrink-0 p-2">
      <div
        className={cn(
          "flex flex-col w-full h-full rounded-xl",
          column.label !== "open"
            ? "bg-black/5 dark:bg-white/5 backdrop-blur-sm"
            : "",
        )}
      >
        <div className="shrink-0 h-9 flex items-center justify-center">
          <div className="font-semibold text-sm">{column.name}</div>
        </div>
        <div ref={container} className="flex-1 w-full h-full" />
      </div>
    </div>
  );
}
