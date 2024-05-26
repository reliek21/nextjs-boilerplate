import React from 'react';
import { IFlexContainer } from './interface/FlexContainer';

export default function FlexContainer({ children }: IFlexContainer) {
	return (
		<div className='flex items-center justify-center gap-2 my-4'>
			{children}
		</div>
	);
}
