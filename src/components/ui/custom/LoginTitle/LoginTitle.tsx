import { ILoginTitle } from './interface/LoginTitle';

export default function LoginTitle({ title }: ILoginTitle) {
	return (
		<h1
			role='heading'
			aria-label={`title of the ${title}`}
			className='text-2xl font-bold text-zinc-900'>
			{title}
		</h1>
	);
}
