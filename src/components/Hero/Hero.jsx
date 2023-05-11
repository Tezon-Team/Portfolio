import { Button } from '../common';
import heroImage from './images/hero-image.svg';

const Hero = () => {
	return (
		<section id="Hero" className="flex flex-col items-center gap-[5.2rem] p-[16rem_1.6rem_4rem]">
			<div className="w-[31.5rem] text-center">
				<h1 className="text-[1.4rem] font-light">TEZON -A tech team.</h1>
				<h2 className="mt-[2.4rem] text-[4.8rem] font-medium leading-[5.7rem]">
					Unleashing Innovation:
				</h2>

				<div className="mt-[2.4rem] text-[2.4rem] leading-[2.88rem]">
					<p>
						Discover our <span className="text-green">Tech</span>
					</p>
					<p>
						Solutions and <span className="text-green">Services</span>
					</p>
				</div>

				<div className="mt-[3.9rem] flex items-center justify-between">
					<Button variant={'large'} text={'Hire Us'} />
					<Button variant={'contact'} text={'Contact Us'} />
				</div>
			</div>

			<div className="relative min-h-[19.7rem] w-[29.8rem]">
				<span className="absolute bottom-[3.2rem] left-[1.3rem] z-[-1] inline-block min-h-[17.8rem] w-[29.9rem] bg-green" />

				<img className="rounded-sm object-cover" src={heroImage} alt="" />

				<span className="absolute right-[1.4rem] top-[3.2rem] z-[-1] inline-block min-h-[17.8rem] w-[29.9rem] bg-blue" />
			</div>
		</section>
	);
};
export default Hero;
