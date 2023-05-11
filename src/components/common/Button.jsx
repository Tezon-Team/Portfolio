import { twMerge } from 'tailwind-merge';
import arrowSlant from '../../assets/shared/arrow-slant.svg';

const Button = ({ variant, text, children, className, onClick }) => {
	const semanticVariants = {
		small: 'p-[0.8rem_2.9rem] lg:p-[1.2rem_4.8rem] text-white bg-green text-[1.2rem] justify-center',
		large: ' p-[1.2rem_6.3rem] lg:p-[11rem_2.1rem] text-white bg-green justify-center',
		contact: 'p-[1.2rem_0.9rem] lg:p-[2.1rem_4.5rem] bg-white text-blue box-shadow-btn gap-[1.6rem]',
		form: 'w-full py-[0.9rem] text-[1.2rem] bg-green text-white justify-center',
	};

	const BTN_CLASSES = twMerge(
		`flex items-center rounded-sm font-medium`,
		semanticVariants[variant] ?? '',
		className ?? ''
	);

	return (
		<button className={BTN_CLASSES} onClick={onClick}>
			{children ?? text}
			{variant === 'contact' && <img className="aspect-square w-[1.2rem]" src={arrowSlant} alt="" />}
		</button>
	);
};

export default Button;
