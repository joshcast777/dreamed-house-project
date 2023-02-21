// Own React
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

// PrimeReact
import { PrimeToast } from "../../imports/prime-react";

// Own Components
import { AuthLayoutComponent, SignInFormComponent } from "../../components/auth";

// Store
import { useAppDispatch, useAppSelector } from "../../store";
import { removeRequestMessage } from "../../store/slices/user";

export default function SignIn(): JSX.Element {
	const { requestMessage } = useAppSelector(state => state.user);

	const dispatch = useAppDispatch();

	const navigate = useNavigate();

	const toast = useRef<PrimeToast>(null);

	useEffect((): (() => void) => {
		if (requestMessage.startsWith("Error:")) toast.current?.show({ severity: "error", summary: "Error", detail: requestMessage, life: 3000 });

		if (localStorage.getItem("token") && localStorage.getItem("email")) navigate("/user");

		return (): void => {
			dispatch(removeRequestMessage());
		};
	}, [requestMessage, localStorage.getItem("token"), localStorage.getItem("email")]);

	return (
		<>
			<PrimeToast ref={toast} />

			<AuthLayoutComponent>
				<SignInFormComponent />
			</AuthLayoutComponent>
		</>
	);
}
