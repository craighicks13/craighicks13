import Image from 'next/image';
import FeatureContainerTwo from '../containers/feature-container-two';

export default function ChicksDoodles() {
	const link: string = '/doodles';
	const content: string =
		'I like to doodle all the doodles. I can help you create custom art for posters or printable products.';
	const left: JSX.Element = (
		<>
			<Image
				priority
				src="/images/doodles/doodles-header.png"
				className="mt-5"
				height={612}
				width={750}
				alt="chicks Doodles custom posters and printables"
			/>
		</>
	);
	const right: JSX.Element = (
		<Image
			priority
			src="/images/doodles/DragonRoastDoodle.png"
			height={1331 / 3}
			width={929 / 3}
			alt=""
		/>
	);

	return (
		<>
			<FeatureContainerTwo
				left={left}
				right={right}
				content={content}
				link={link}
			/>
		</>
	);
}
