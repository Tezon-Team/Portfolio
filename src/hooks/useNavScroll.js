import { useEffect, useRef, useState } from 'react';

const useNavScroll = () => {
	const headerRef = useRef(null);
	const [isScrolled, setIsScrolled] = useState(false);
	const [headerObserver] = useState(
		() =>
			new IntersectionObserver(
				([entry]) => {
					setIsScrolled(!entry.isIntersecting);
				},
				{ rootMargin: '10px 0px 0px 0px' }
			)
	);

	useEffect(() => {
		const scrollWatcher = document.createElement('span');
		scrollWatcher.setAttribute('data-scroll-watcher', '');
		headerRef.current.before(scrollWatcher);
		headerObserver.observe(scrollWatcher);

		return () => {
			scrollWatcher.remove();
			headerObserver.unobserve(scrollWatcher);
		};
	}, [headerObserver]);

	return { isScrolled, headerRef };
};

export default useNavScroll;
