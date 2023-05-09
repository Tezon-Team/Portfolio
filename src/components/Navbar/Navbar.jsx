import { NavLink } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { logo } from '../../assets/brand';
import Button from '../common/Button';
import { useMobileQuery } from '../../hooks/useMediaQueries';
import { twJoin } from 'tailwind-merge';

const Navbar = () => {
	const isMobile = useMobileQuery();
	const headerRef = useRef(null);
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY >= 88) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

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
		<header
			ref={headerRef}
			className={twJoin(
				`z-200 fixed inset-[0_0_auto_0] flex items-center justify-between bg-white pr-[1.6rem] [transtion:box-shadow_0.5s_ease] md:pl-[4.9rem] md:pr-[6rem]`,
				isScrolled && 'box-shadow-nav'
			)}
		>
			<div>
				<img className="object-cover md:h-[10rem] md:w-[20rem]" src={logo} alt="" />
			</div>

			{/* HAMBURGER */}
			{isMobile && (
				<button className="h-[1.8rem] w-[1.8rem] bg-[url(/src/assets/brand/hamburger.svg)] bg-no-repeat active:rotate-180 active:[transition:all_0.4s_ease]">
					{/* Background-Img here */}
				</button>
			)}

			{/* <nav className="flex items-center justify-between">
				<ul className="flex w-[50.3rem] items-center font-medium text-blue">{renderedNavLinks}</ul>
			</nav> */}

			{/* <Button variant={'small'} text={'Hire Us'} /> */}
		</header>
	);
};
export default Navbar;
