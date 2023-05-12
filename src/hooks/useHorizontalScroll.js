import { useEffect, useRef } from 'react';

const useHorizontalScroll = () => {
	const slideRef = useRef(null);
	const slideContainerRef = useRef(null);
	const btnRefs = useRef({});

	useEffect(() => {
		const scrollContainer = slideContainerRef.current;
		// Hiding previous btn on initial mount
		btnRefs.current.prevBtn.classList.add('hidden');

		const handleScroll = () => {
			if (scrollContainer.scrollLeft + scrollContainer.clientWidth === scrollContainer.scrollWidth) {
				btnRefs.current.nextBtn.classList.add('hidden');
			} else {
				btnRefs.current.nextBtn.classList.remove('hidden');
			}

			if (scrollContainer.scrollLeft === 0) {
				btnRefs.current.prevBtn.classList.add('hidden');
			} else {
				btnRefs.current.prevBtn.classList.remove('hidden');
			}
		};

		scrollContainer.addEventListener('scroll', handleScroll);

		return () => scrollContainer.removeEventListener('scroll', handleScroll);
	}, []);

	const handleNextSlide = () => {
		const slideWidth = slideRef.current.clientWidth;
		slideContainerRef.current.scrollLeft += slideWidth;
	};

	const handlePrevSlide = () => {
		const slideWidth = slideRef.current.clientWidth;
		slideContainerRef.current.scrollLeft -= slideWidth;
	};

	return {
		slideRef,
		slideContainerRef,
		btnElements: btnRefs.current,
		handleNextSlide,
		handlePrevSlide,
	};
};

export default useHorizontalScroll;
