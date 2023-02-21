// Store
import { useAppSelector } from "../../store";

export default function User(): JSX.Element {
	const { userAuthenticated } = useAppSelector(state => state.user);

	return <pre>{JSON.stringify(userAuthenticated)}</pre>;
}
