import { useEffect, useRef, useState } from 'react';

const useNavScroll = () => {
	const headerRef = useRef(null);
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY >= 78) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return { isScrolled, headerRef };
};
export default useNavScroll;
