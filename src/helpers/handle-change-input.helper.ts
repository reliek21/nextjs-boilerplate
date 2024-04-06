import React from 'react';

export function handleChangeInputHelper(
	setState: React.Dispatch<React.SetStateAction<string>>
) {
	return (e: React.ChangeEvent<HTMLInputElement>): void => {
		const { value } = e.target;
		setState(value);
	};
}
