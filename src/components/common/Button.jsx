import { twMerge } from 'tailwind-merge';

const Button = ({ variant, text, children, className, onClick }) => {
	const semanticVariants = {
		small: 'p-[0.9rem_2.9rem] lg:p-[1.2rem_4.8rem] text-white bg-green',
		large: ' p-[1.5rem_6.3rem] lg:p-[11.5rem_2.1rem] text-white bg-green',
		contact: 'p-[1.5rem_0.8rem] lg:p-[2.1rem_4.5rem] text-blue',
	};

	const BTN_CLASSES = twMerge(
		`flex items-center justify-center rounded-[4px] text-medium`,
		semanticVariants[variant] ?? '',
		className ?? ''
	);

	return (
		<button className={BTN_CLASSES} onClick={onClick}>
			{children ?? text}
		</button>
	);
};
export default Button;
