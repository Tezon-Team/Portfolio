import Button from '../common/Button';
import arrowSlant from './arrow-slant.svg';
import heroImage from './hero-image.svg';

const Hero = () => {
	return (
		<section id="Hero" className="flex flex-col items-center gap-[5.2rem] pb-[4rem] pt-[16rem]">
			<div className="w-[33rem] text-center">
				<h1 className="text-[1.4rem] font-light">TEZON -A tech team.</h1>
				<h2 className="mt-[2.4rem]  text-[4.8rem] font-medium leading-[5.7rem]">
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

				<div className="mt-[3.9rem] flex items-center justify-center gap-[1rem]">
					<Button variant={'large'}>Hire Us</Button>

					<Button variant={'contact'}>
						Contact Us{' '}
						<img className="ml-[1.6rem] aspect-square w-[1.2rem]" src={arrowSlant} alt="" />
					</Button>
				</div>
			</div>

			<div className="relative h-[19.7rem] w-[29.8rem]">
				<span className="absolute bottom-[3.2rem] left-[1.3rem] z-[-1] inline-block h-[17.8rem] w-[29.9rem] bg-green" />
				<img className="rounded-[4px] object-cover" src={heroImage} alt="" />
				<span className="absolute right-[1.4rem] top-[3.2rem] z-[-1] inline-block h-[17.8rem] w-[29.9rem] bg-blue" />
			</div>
		</section>
	);
};
export default Hero;
