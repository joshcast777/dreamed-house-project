// From & Validation
import { FieldError } from "react-hook-form";

// Own Interfaces
interface InputErrorMessageProps {
	errorMessage: FieldError;
	message: string;
}

export default function InputErrorMessage({ errorMessage, message }: InputErrorMessageProps): JSX.Element {
	return <div className="pl-3 h-6">{errorMessage && <span className="text-invalid-color">{message}</span>}</div>;
}
