import { twMerge } from 'tailwind-merge';
import { logo } from '../../assets/brand';

const Logo = ({ className }) => {
	return (
		<div className={twMerge(`h-[8.8rem] w-[15.6rem]`, className ?? '')}>
			<img className="h-full object-cover" src={logo} alt="" />
		</div>
	);
};

export default Logo;
