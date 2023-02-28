// Own react
import { FieldError } from "react-hook-form";

// Shared Components
import { InputErrorMessageComponent } from ".";

// Own Interfaces
interface FieldInputProps {
	htmlFor: string;
	label: string;
	children: JSX.Element;
	errorMessage: FieldError;
}

export default function FieldInput({ htmlFor, label, children, errorMessage }: FieldInputProps): JSX.Element {
	return (
		<div className="mb-3">
			<label htmlFor={htmlFor} className="ml-1 text-lg font-medium inline-block sm:text-xl">
				{label}
			</label>

			{children}

			<InputErrorMessageComponent errorMessage={errorMessage!} message={errorMessage?.message!} />
		</div>
	);
}
