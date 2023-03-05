// Own Interface
interface UserDataProps {
	text: string;
	title: string;
}

export default function UserData({ text, title }: UserDataProps): JSX.Element {
	return (
		<div className={`mb-3 p-1 rounded bg-gray-200`}>
			<h3 className="text-xl font-semibold">{title}</h3>

			<p className="text-lg">{text}</p>
		</div>
	);
}
