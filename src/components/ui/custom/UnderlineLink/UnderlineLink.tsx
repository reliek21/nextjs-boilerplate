import Link from 'next/link';

interface IUnderlineLink {
	text: string;
	link: string;
	hasUnderline?: boolean | undefined;
}

export default function UnderlineLink({
	text,
	link,
	hasUnderline = true
}: IUnderlineLink) {
	return (
		<Link
			role='link'
			aria-label={`Link for ${text}`}
			href={link}
			className={`text-gray-500 ${hasUnderline && 'underline'}`}>
			{text}
		</Link>
	);
}
