import { StrictMode } from "react";
import ReactDOMServer from "react-dom/server";
import { dangerouslySkipEscape, escapeInject } from "vite-plugin-ssr/server";

import { Shell } from "./shell";
import { PageContextServer } from "./types";

export const passToClient = ["pageProps"];

export function render(pageContext: PageContextServer) {
	let pageHtml: string;

	if (!pageContext.Page) {
		// SPA
		pageHtml = "";
	} else {
		// SSR / HTML-only
		const { Page, pageProps } = pageContext;
		if (!Page)
			throw new Error(
				"My render() hook expects pageContext.Page to be defined",
			);

		pageHtml = ReactDOMServer.renderToString(
			<StrictMode>
				<Shell pageContext={pageContext}>
					<Page {...pageProps} />
				</Shell>
			</StrictMode>,
		);
	}

	return escapeInject`<!DOCTYPE html>
    <html lang="en" class="dark">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body class="cursor-default select-none overflow-hidden font-sans antialiased">
        <div id="app">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;
}
