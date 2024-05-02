import type { SVGProps } from "react";

export function StarsIcon(
	props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="30"
			height="30"
			fill="none"
			viewBox="0 0 30 30"
			{...props}
		>
			<path
				fill="currentColor"
				d="M13.379 11.638a.999.999 0 00.759-.759l.886-3.986c.232-1.044 1.72-1.044 1.952 0l.886 3.986c.084.38.38.675.759.76l3.986.885c1.044.232 1.044 1.72 0 1.952l-3.986.886a.999.999 0 00-.759.76l-.886 3.985c-.232 1.044-1.72 1.044-1.952 0l-.886-3.986a.999.999 0 00-.759-.759l-3.986-.886c-1.044-.232-1.044-1.72 0-1.952l3.986-.886zM8.06 19.82a.999.999 0 00.76-.759l.27-1.22c.098-.438.722-.438.819 0l.271 1.22c.084.379.38.675.759.759l1.22.271c.438.097.438.721 0 .818l-1.22.271a.999.999 0 00-.759.759l-.271 1.22c-.097.438-.721.438-.818 0l-.271-1.22a.999.999 0 00-.76-.759l-1.22-.271c-.437-.097-.437-.721.001-.818l1.22-.271z"
			></path>
		</svg>
	);
}
