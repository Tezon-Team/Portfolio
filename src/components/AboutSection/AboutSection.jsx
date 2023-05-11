import { Link } from 'react-router-dom';
import { Button, Heading } from '../common';

const AboutSection = () => {
	return (
		<section
			id="About Us"
			className="relative mt-[5rem] flex flex-col items-center justify-center px-[1.6rem] text-center"
		>
			<Heading text={'About Us'} />

			<p className="mt-[1rem] text-[1.4rem]">
				Tezon is a technology company that specializes in developing cutting-edge software solutions
				for businesses of all sizes, founded in 2022. One of tezon{`'`}s primary areas of expertise
				is in developing custom software solutions that are tailored to the specific needs of
				individual businesses. By working closely with clients to understand their unique
				requirements, Tezon is able to create...
			</p>

			<span className="absolute bottom-[0] z-[5] block h-[15.3rem] w-full rotate-[180deg] bg-[linear-gradient(180deg,hsl(0,0%,100%)27.6%,_hsl(0,0%,100%,0)_100%)]" />

			<Button variant={'small'} className={'relative z-[10] mx-auto'}>
				<Link to={''}>Read More</Link>
			</Button>
		</section>
	);
};

export default AboutSection;
