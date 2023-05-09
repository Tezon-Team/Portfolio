import { NavLink } from 'react-router-dom';
import { logo } from '../../assets/brand';
import Button from '../common/Button';
import { useMobileQuery } from '../../hooks/useMediaQueries';

const Navbar = () => {
	const isMobile = useMobileQuery();

	const renderedNavLinks = [
		{ name: 'Home', href: '/' },
		{ name: 'About Us', href: '/about-us' },
		{ name: 'Pricing', href: '/pricing' },
		{ name: 'Contact Us', href: '/contact-us' },
	].map((link) => (
		<li
			className="border-x-blue first:mr-[4rem] last:ml-[4rem] nth-2:border-x-1 nth-2:px-[4rem] nth-3:border-r-1 nth-3:px-[4rem]"
			key={link.name}
		>
			<NavLink to={link.href}>{link.name}</NavLink>
		</li>
	));

	return (
		<header className="flex items-center justify-between pr-[1.6rem] md:pl-[4.9rem] md:pr-[6rem]">
			<div>
				<img className="object-cover md:h-[10rem] md:w-[20rem]" src={logo} alt="" />
			</div>

			{!isMobile && (
				<nav className="flex justify-between">
					<ul className="flex w-[50.3rem] items-center font-medium text-blue">
						{renderedNavLinks}
					</ul>
				</nav>
			)}

			<button className="h-[1.8rem] w-[1.6rem] bg-[url(/src/assets/brand/hamburger.svg)] bg-no-repeat active:rotate-180 active:[transition:all_0.4s_ease]">
				{/* Background-img */}
			</button>

			{!isMobile && <Button variant={'small'} text={'Hire Us'} />}
		</header>
	);
};
export default Navbar;
