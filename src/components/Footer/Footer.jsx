import { Button, Heading } from '../common';
import Logo from '../common/Logo';

const Footer = () => {
	return (
		<footer className="mt-[6.4rem] pb-[3rem]">
			<div className="flex flex-col items-center justify-center gap-[1.2rem]">
				<Heading
					text={'We Should Start a Project'}
					className={'flex min-h-[6.4rem] w-full items-center justify-center bg-blue text-white'}
				/>

				<Button
					variant={'contact'}
					text={'Contact Us'}
					className={'gap-[1.9rem] p-[1.3rem_6.8rem] text-[1.2rem] font-medium'}
				/>
			</div>

			<div className="mt-[7.4rem] flex items-center justify-between px-[1.6rem]">
				<div>
					<Logo className={'ml-[-2rem]'} />
					<p className="text-[1rem] text-blue/[0.64]">. Send a mail</p>
					<a href="mailto: tezonteam@gmail.com" className="text-[1.4rem] font-light">
						tezonteam@gmail.com
					</a>
				</div>

				<div className="flex flex-col gap-[1.6rem] text-[1.2rem]">
					<div>
						<h4>Quick Links</h4>
					</div>
					<div>
						<h4>Follow Us</h4>
					</div>
				</div>
			</div>

			<p className="mt-[5.2rem] text-center text-[1.2rem] font-light">
				Copyright* 2022TEZON. All rights reserved.
			</p>
		</footer>
	);
};
export default Footer;
