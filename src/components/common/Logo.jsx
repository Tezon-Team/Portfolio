import { twMerge } from 'tailwind-merge';
import { logo, logoDesktop } from '../../assets/brand';

const Logo = ({ className }) => {
	return (
		<div className={twMerge(`h-[8.8rem] w-[15.6rem] lg:h-[10rem] lg:w-[24.7rem]`, className ?? '')}>
			<picture>
				<source media="(min-width: 1000px)" srcSet={logoDesktop} />
				<img className="h-full object-cover" src={logo} alt="" />
			</picture>
		</div>
	);
};

export default Logo;
