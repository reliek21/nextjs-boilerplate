import { MouseEventHandler } from 'react';

type ButtonIconType = 'github' | 'google' | 'twitter' | 'facebook';

export interface IButtonIcon {
	icon: ButtonIconType;
	text: string;
	onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}
