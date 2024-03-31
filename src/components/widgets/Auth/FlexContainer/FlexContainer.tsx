import React from 'react';

interface IFlexContainer {
	children: React.ReactElement | Array<React.ReactElement>;
}

export default function FlexContainer({ children }: IFlexContainer) {
	return (
		<div className='flex items-center justify-center gap-2 my-4'>
			{children}
		</div>
	);
}
