// Shared Components
import { HeaderTitle, Title } from ".";

// Own Interfaces
interface Titles {
	headerTitle: string;
	title: string;
}

export default function TopPage({ headerTitle = "Header Title", title = "Title" }: Titles): JSX.Element {
	return (
		<>
			<HeaderTitle title={headerTitle} />

			<Title title={title} />
		</>
	);
}
