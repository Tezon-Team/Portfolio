import { useCallback, useEffect, useRef } from 'react';
import { useThrottleByFrame } from './useThrottleByFrame';

const useHorizontalScroll = () => {
	const slideItemRef = useRef(null);
	const slideContainerRef = useRef(null);
	const btnRefs = useRef({});

	const throttledHandleScroll = useThrottleByFrame(() => {
		const hasNotScrolled = slideContainerRef.current.scrollLeft === 0;
		const isScrolledToEnd =
			slideContainerRef.current.scrollLeft + slideContainerRef.current.clientWidth ===
			slideContainerRef.current.scrollWidth;

		if (isScrolledToEnd) {
			btnRefs.current.nextBtn.classList.add('hidden');
		} else {
			btnRefs.current.nextBtn.classList.remove('hidden');
		}

		if (hasNotScrolled) {
			btnRefs.current.prevBtn.classList.add('hidden');
		} else {
			btnRefs.current.prevBtn.classList.remove('hidden');
		}
	});

	const handleNextSlide = useCallback(() => {
		const slideItemWidth = slideItemRef.current.clientWidth;

		slideContainerRef.current.scrollLeft += slideItemWidth;
	}, []);

	const handlePrevSlide = useCallback(() => {
		const slideItemWidth = slideItemRef.current.clientWidth;

		slideContainerRef.current.scrollLeft -= slideItemWidth;
	}, []);

	useEffect(() => {
		// Hiding previous btn on initial mount
		btnRefs.current.prevBtn.classList.add('hidden');

		const scrollContainer = slideContainerRef.current;

		scrollContainer.addEventListener('scroll', throttledHandleScroll);

		return () => scrollContainer.removeEventListener('scroll', throttledHandleScroll);
	}, [throttledHandleScroll]);

	return {
		slideItemRef,
		slideContainerRef,
		btnElements: btnRefs.current,
		handleNextSlide,
		handlePrevSlide,
	};
};

export default useHorizontalScroll;
