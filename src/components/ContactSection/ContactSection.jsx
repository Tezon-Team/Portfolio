import { Link } from 'react-router-dom';
import arrowSlant from '../../assets/shared/arrow-slant.svg';
import { Button, Heading } from '../common';
import facebook from './images/facebook.svg';
import gmail from './images/gmail.svg';
import instagram from './images/instagram.svg';
import linkedin from './images/linkedin.svg';
import twitter from './images/twitter.svg';

const ContactSection = () => {
	const mediaHandles = [
		[facebook, 'Facebook', ''],
		[twitter, 'Twitter', ''],
		[gmail, 'G-mail', ''],
		[instagram, 'Instagram', ''],
		[linkedin, 'Linkedin', ''],
	];

	const renderedHandles = mediaHandles.map((handle) => (
		<span key={handle[1]} className="inline-flex items-center font-light">
			<img className="h-[2.3rem] w-[2.2rem]" src={handle[0]} alt="" />
			<p className="ml-[1rem] mr-auto">{handle[1]}</p>
			<button>
				<Link>
					<img className="aspect-square w-[0.6rem]" src={arrowSlant} alt="" />
				</Link>
			</button>
		</span>
	));

	return (
		<section
			id="Contact Us"
			className="relative mt-[8.4rem] flex flex-col items-center gap-[4rem] px-[1.6rem] pt-[1.8rem]"
		>
			<span className="absolute inset-x-[0] top-[0] z-[-1] block h-[25rem] bg-green" />

			<div className="flex w-full flex-col items-center gap-[2.8rem] rounded-sm bg-white p-[5.2rem_1.7rem_2rem] text-center box-shadow-contact">
				<div className="flex flex-col gap-[0.9rem]">
					<h3 className="text-[1.2rem] font-light">Contact us</h3>

					<Heading text={'Get in touch with us'} />

					<p className="w-[24.1rem] text-[1rem] leading-[1.2rem]">
						You can contact us through our website by filling out our contact form on the right,
						or by sending us a dm on any of our social media platforms. We strive to respond to
						all inquiries within 24 hours.
					</p>
				</div>

				<form className="flex w-full flex-col gap-[1.2rem] rounded-sm bg-blue p-[2.2rem_2.1rem_2.9rem] text-[0.9rem] text-blue">
					<input
						placeholder="Name/Company Name"
						className="min-h-[3.2rem] w-full rounded-sm pl-[2.1rem] placeholder:text-blue"
						type="text"
					/>
					<input
						placeholder="Email"
						className="min-h-[3.2rem] w-full rounded-sm pl-[2.1rem] placeholder:text-blue"
						type="email"
					/>
					<input
						placeholder="Phone Number"
						className="min-h-[3.2rem] w-full rounded-sm pl-[2.1rem] placeholder:text-blue"
						type="tel"
					/>
					<textarea
						placeholder="Your Message"
						className="max-h-[14.4rem] min-h-[7.2rem] rounded-sm pl-[2.1rem] pt-[1.5rem] placeholder:text-blue"
					/>

					<Button
						variant={'form'}
						text={'Send Message'}
						className={'mt-[1rem]'}
						onClick={(e) => e.preventDefault()}
					/>
				</form>
			</div>

			<div className="flex w-[13rem] flex-col gap-[2rem]">{renderedHandles}</div>
		</section>
	);
};
export default ContactSection;
