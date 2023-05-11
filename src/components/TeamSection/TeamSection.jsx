import { Heading } from '../common';
import Max from './images/Max.svg';
import Jeff from './images/Jeff.svg';
import Charles from './images/Charles.svg';
import arrowRight from './images/arrowRight.svg';
import { useHorizontalScroll } from '../../hooks';

const TeamSection = () => {
	const { slideContainerRef, slideRef, btnElements, handleNextSlide, handlePrevSlide } =
		useHorizontalScroll();

	const teamMembers = [
		{ name: 'Maxmillian', image: Max, occupation: 'Backend Engineer.' },
		{ name: 'Charles-Mary', image: Charles, occupation: 'Content/Copy writer.' },
		{ name: 'Jeffery', image: Jeff, occupation: 'UI/UX Designer.' },
		{ name: 'JohnPaul', image: Charles, occupation: 'Full stack/Project manager.' },
	];

	const renderedTeamList = teamMembers.map((member) => (
		<li ref={slideRef} key={member.name} className="snap-center">
			<div className="relative h-[26.3rem] w-[18.6rem]">
				<img className="h-full" src={member.image} alt="" />
				<span className="absolute bottom-[-1.3rem] right-[0.2rem] inline-block h-[1.3rem] w-[8.8rem] bg-green" />
			</div>

			<div className="mt-[3rem]">
				<h4>{member.name}</h4>
				<p className="text-[1.2rem] font-light leading-[1.4rem]">{member.occupation}</p>
			</div>
		</li>
	));

	return (
		<section
			id="Our Team"
			className="relative mt-[5.6rem] flex flex-col items-center justify-center gap-[2.6rem]"
		>
			<Heading className={'text-center'} text={'Our Team'} />

			<button
				ref={(elem) => (btnElements.nextBtn = elem)}
				className="absolute right-[2rem] z-[30] inline-flex aspect-square w-[2.4rem] items-center justify-center rounded-full border-[1px] border-green brightness-[0.8]"
				onClick={handleNextSlide}
			>
				<img className="aspect-square w-[0.9rem]" src={arrowRight} alt="" />
			</button>

			<ul
				ref={slideContainerRef}
				className="flex w-full select-none snap-x snap-mandatory items-start gap-[2.6rem] overflow-x-scroll scroll-smooth pl-[5rem] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
			>
				<span className="absolute inset-x-[0] z-[-1] ml-[1.6rem] block h-[8.7rem] bg-blue" />

				{renderedTeamList}
			</ul>

			<button
				ref={(elem) => (btnElements.prevBtn = elem)}
				className="absolute left-[2rem] z-[30] inline-flex aspect-square w-[2.4rem] items-center justify-center rounded-full border-[1px] border-green brightness-[0.8]"
				onClick={handlePrevSlide}
			>
				<img className="aspect-square w-[0.9rem] rotate-180" src={arrowRight} alt="" />
			</button>
		</section>
	);
};
export default TeamSection;
