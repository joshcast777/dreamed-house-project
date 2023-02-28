// From & Validation
import { FieldError } from "react-hook-form";

// Own Interfaces
interface InputErrorMessageProps {
	errorMessage: FieldError;
	message: string;
}

export default function InputErrorMessage({ errorMessage, message }: InputErrorMessageProps): JSX.Element {
	return <div className="pl-3 h-auto" style={{ minHeight: "1.5rem" }}>{errorMessage && <span className="text-danger-color">{message}</span>}</div>;
}
