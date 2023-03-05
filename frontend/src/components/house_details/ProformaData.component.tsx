// Own Interfaces
interface ProformaDataProps {
	className?: string;
	content: any;
	title: string;
}

export default function ProformaData({ className, content, title }: ProformaDataProps): JSX.Element {
	return (
		<div className={`border border-black rounded-md p-1 ${className}`}>
			<h3 className="font-medium text-lg">{title}</h3>

			<div>{content}</div>
		</div>
	);
}
