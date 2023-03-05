// Own React
import { Navigate, Outlet } from "react-router-dom";

// Own Interfaces
interface AccessProps {
	redirectTo: string;
	signedIn: boolean;
	children: JSX.Element;
}

export function Private({ redirectTo, signedIn, children }: AccessProps): JSX.Element {
	return signedIn ? children || <Outlet /> : <Navigate to={redirectTo} />;
}

export function Public({ redirectTo, signedIn, children }: AccessProps): JSX.Element {
	return signedIn ? <Navigate to={redirectTo} /> : children || <Outlet />;
}
