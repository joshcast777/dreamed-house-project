// Own React
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

// PrimeReact
import { PrimeToast } from "../../imports/prime-react";

// Own Components
import { AuthLayoutComponent, SignUpFormComponent } from "../../components/auth";

// Store
import { useAppDispatch, useAppSelector } from "../../store";
import { removeRequestMessage } from "../../store/slices/user";

export default function SignUp(): JSX.Element {
	const { requestMessage } = useAppSelector(state => state.user);

	const dispatch = useAppDispatch();

	const navigate = useNavigate();

	const toast = useRef<PrimeToast>(null);

	useEffect((): (() => void) => {
		if (requestMessage.startsWith("Error:")) toast.current?.show({ severity: "error", summary: "Error", detail: requestMessage, life: 3000 });

		if (requestMessage.startsWith("Usuario")) navigate("/auth/sign-in");

		return (): void => {
			dispatch(removeRequestMessage());
		};
	}, [requestMessage]);

	return (
		<>
			<PrimeToast ref={toast} />

			<AuthLayoutComponent>
				<SignUpFormComponent />
			</AuthLayoutComponent>
		</>
	);
}
