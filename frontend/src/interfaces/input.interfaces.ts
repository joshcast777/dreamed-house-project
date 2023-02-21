import { FieldError } from "react-hook-form";

export interface FieldInput {
	children: JSX.Element;
	errorMessage: FieldError;
	htmlFor: string;
	label: string;
}
