import { Heading } from '../common';
import card1 from './images/card-1.svg';
import card2 from './images/card-2.svg';
import card3 from './images/card-3.svg';

const CoreActivities = () => {
	const cardList = [
		{
			title: 'Web Development.',
			description: 'Mobile Responsive, JavaScript, HTML, CSS & MySQL.',
			image: card1,
			circleClasses: 'mt-[-4.3rem] w-[16rem] pt-[4.2rem]',
			imageWrapperClasses: 'scale-[1.35]',
		},
		{
			title: 'Content/Copy Writing.',
			description: 'Marketing Writeups, Lead generation, E-mail Marketing.',
			image: card2,
			circleClasses: 'mt-[-4rem] w-[14.6rem] pt-[3.7rem]',
			imageWrapperClasses: 'scale-[0.97]',
		},
		{
			title: 'Graphic Designing',
			description: 'User Interface Design, Illustrations, Logo and Flyers.',
			image: card3,
			circleClasses: 'mt-[-4rem] w-[14.6rem] pt-[3.6rem]',
			imageWrapperClasses: 'scale-[0.98]',
		},
	];

	const renderedCardList = cardList.map((card) => (
		<li
			key={card.image}
			className="relative flex min-h-[34rem] w-[min(100%,_32rem)] flex-col items-center gap-[5.9rem] rounded-sm bg-light-green"
		>
			<div
				className={`flex aspect-square items-center justify-center rounded-full border-[2px] border-blue/[0.64]
					${card.circleClasses}`}
			>
				<span className={`inline-block ${card.imageWrapperClasses}`}>
					<img src={card.image} alt="" />
				</span>
			</div>

			<div className="text-center">
				<h2 className="text-[2rem]">{card.title}</h2>
				<p className="mx-auto mt-[0.5rem] w-[24ch] text-[1.2rem] font-light leading-[1.4rem]">
					{card.description}
				</p>
			</div>

			<span className="absolute bottom-[0] right-[0] inline-block h-[2.4rem] w-[12rem] rounded-br-[8px] bg-green" />
		</li>
	));

	return (
		<section
			id="Core Activities"
			className="mt-[10rem] flex flex-col items-center justify-center gap-[4rem] px-[1.6rem]"
		>
			<Heading text={'Our Core Business Activities'} />

			<ul className="flex w-full flex-col items-center gap-[6rem] pt-[5rem]">{renderedCardList}</ul>
		</section>
	);
};
export default CoreActivities;
