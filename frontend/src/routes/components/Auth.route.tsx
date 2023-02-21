// Own react
import { useEffect, useRef } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

// PrimeReact
import { PrimeToast } from "../../imports/prime-react";

// Pages
import { SignInPage, SignUpPage } from "../../pages/auth";

// Store
import { useAppDispatch, useAppSelector } from "../../store";
import { removeRequestMessage } from "../../store/slices/user";

export default function Auth(): JSX.Element {
	const { requestMessage } = useAppSelector(state => state.user);

	const dispatch = useAppDispatch();

	const toast = useRef<PrimeToast>(null);

	useEffect((): (() => void) => {
		if (requestMessage.startsWith("Usuario")) toast.current?.show({ severity: "success", summary: "Éxito", detail: `${requestMessage}\nInicie sesión`, life: 3000 });

		return (): void => {
			dispatch(removeRequestMessage());
		};
	}, [requestMessage]);

	return (
		<>
			<PrimeToast ref={toast} />

			<Routes>
				<Route path="sign-in" element={<SignInPage />} />
				<Route path="sign-up" element={<SignUpPage />} />

				<Route path="*" element={<Navigate to="/not-found" />} />
			</Routes>
		</>
	);
}
