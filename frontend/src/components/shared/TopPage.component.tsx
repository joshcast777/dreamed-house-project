// Shared Components
import { HeaderTitleComponent, TitleComponent } from ".";

// Own Interfaces
interface ITitles {
	headerTitle: string;
	title: string;
}

export default function TopPage({ headerTitle = "Header Title", title = "Title" }: ITitles): JSX.Element {
	return (
		<>
			<HeaderTitleComponent title={headerTitle} />

			<TitleComponent title={title} />
		</>
	);
}
