import playIcon from './images/play-icon.svg';

const VideoSection = () => {
	return (
		<section
			id="Video Section"
			className="relative flex w-full flex-col items-center px-[1.6rem] pt-[1.9rem]"
		>
			<span className="absolute inset-x-[0] top-[0] z-[-1] block h-[25rem] bg-blue" />

			<div className="flex w-[max(26.5rem,100%)] justify-between">
				<p className="w-[14ch] text-[1.4rem] leading-[1.68rem] text-white">
					Designing For Tomorrow’s Success Today
				</p>
				<p className="w-[22ch] text-[1rem] leading-[1.2rem] text-white/[0.64]">
					Design that speaks volumes, creating and helping brands to stand out with purpose.
				</p>
			</div>

			<div className="mt-[2.5rem] flex min-h-[19.6rem] w-[min(100%,32.8rem)] items-center justify-center bg-placeholder">
				<span className="pulse relative inline-block aspect-square w-[10rem]">
					<img src={playIcon} alt="" />
				</span>
			</div>
		</section>
	);
};

export default VideoSection;
