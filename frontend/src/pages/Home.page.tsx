// Shared Components
import { CardLayout, TopPage } from "../components/shared";

export default function Home(): JSX.Element {
	return (
		<>
			<TopPage headerTitle="Inicio" title="Lista de casas" />

			<CardLayout />
		</>
	);
}
