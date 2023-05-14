import { SVGProps } from "react";

export default function HideIcon(
	props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
) {
	return (
		<svg
			width={24}
			height={24}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M9.1654 4.42071C8.76876 4.5401 8.544 4.95841 8.66339 5.35505C8.78277 5.75169 9.20109 5.97645 9.59772 5.85706L9.1654 4.42071ZM22 12L22.671 12.3351C22.7763 12.1241 22.7763 11.8759 22.671 11.6649L22 12ZM19.1413 14.9666C18.8678 15.2776 18.8982 15.7515 19.2092 16.0251C19.5203 16.2986 19.9942 16.2682 20.2677 15.9571L19.1413 14.9666ZM3.28033 2.21967C2.98744 1.92678 2.51256 1.92678 2.21967 2.21967C1.92678 2.51256 1.92678 2.98744 2.21967 3.28033L3.28033 2.21967ZM2 11.9999L1.32902 11.6648C1.22366 11.8758 1.22366 12.124 1.32902 12.335L2 11.9999ZM17.4703 17.4703L18.0006 16.9399L17.4703 17.4703ZM20.7197 21.7803C21.0126 22.0732 21.4874 22.0732 21.7803 21.7803C22.0732 21.4874 22.0732 21.0126 21.7803 20.7197L20.7197 21.7803ZM10.2322 10.2322C10.5251 9.93934 10.5251 9.46447 10.2322 9.17157C9.93934 8.87868 9.46447 8.87868 9.17157 9.17157L10.2322 10.2322ZM14.8284 14.8284C15.1213 14.5355 15.1213 14.0607 14.8284 13.7678C14.5355 13.4749 14.0607 13.4749 13.7678 13.7678L14.8284 14.8284ZM9.59772 5.85706C13.745 4.60878 18.4769 6.624 21.329 12.3351L22.671 11.6649C19.5775 5.47055 14.1791 2.91165 9.1654 4.42071L9.59772 5.85706ZM20.2677 15.9571C21.1654 14.9364 21.9755 13.7277 22.671 12.3351L21.329 11.6649C20.6865 12.9515 19.9468 14.0507 19.1413 14.9666L20.2677 15.9571ZM2.21967 3.28033L5.99937 7.06003L7.06003 5.99937L3.28033 2.21967L2.21967 3.28033ZM2.67098 12.335C3.84083 9.99245 5.33197 8.27257 6.95699 7.14609L6.10242 5.91332C4.24158 7.20327 2.5948 9.13019 1.32902 11.6648L2.67098 12.335ZM5.99937 7.06003L16.9399 18.0006L18.0006 16.9399L7.06003 5.99937L5.99937 7.06003ZM16.9399 18.0006L20.7197 21.7803L21.7803 20.7197L18.0006 16.9399L16.9399 18.0006ZM1.32902 12.335C3.20469 16.0909 5.92036 18.5148 8.91701 19.5009C11.922 20.4898 15.1308 20.0045 17.8975 18.0866L17.043 16.8539C14.6436 18.5171 11.9221 18.9107 9.38589 18.0761C6.84135 17.2388 4.40494 15.1369 2.67098 11.6648L1.32902 12.335ZM12 14.5C10.6193 14.5 9.5 13.3807 9.5 12H8C8 14.2091 9.79086 16 12 16V14.5ZM9.5 12C9.5 11.3094 9.779 10.6855 10.2322 10.2322L9.17157 9.17157C8.44854 9.89461 8 10.8956 8 12H9.5ZM13.7678 13.7678C13.3145 14.221 12.6906 14.5 12 14.5V16C13.1044 16 14.1054 15.5515 14.8284 14.8284L13.7678 13.7678Z"
				fill="currentColor"
			/>
		</svg>
	);
}
