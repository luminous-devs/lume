import type { SVGProps } from "react";

export function SettingsFilledIcon(
	props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			fill="none"
			viewBox="0 0 24 24"
			{...props}
		>
			<path
				fill="currentColor"
				d="M10.899 2.116a5.3 5.3 0 012.203 0c.823.175 1.58.611 2.695 1.256l1.78 1.027c1.117.644 1.874 1.08 2.437 1.705a5.294 5.294 0 011.102 1.907c.26.8.26 1.674.26 2.961v2.056c0 1.287 0 2.16-.26 2.96a5.294 5.294 0 01-1.102 1.908c-.563.625-1.32 1.061-2.436 1.705l-1.781 1.027c-1.116.645-1.872 1.081-2.696 1.256a5.3 5.3 0 01-2.202 0c-.823-.175-1.58-.611-2.696-1.256l-1.78-1.027c-1.117-.644-1.874-1.08-2.437-1.705a5.294 5.294 0 01-1.102-1.907c-.26-.8-.26-1.674-.259-2.961v-2.056c0-1.287 0-2.16.26-2.96a5.295 5.295 0 011.101-1.908C4.55 5.48 5.306 5.043 6.422 4.4l1.781-1.027C9.32 2.727 10.076 2.29 10.9 2.116zM12 9.9a2.1 2.1 0 100 4.2 2.1 2.1 0 000-4.2z"
			/>
		</svg>
	);
}
