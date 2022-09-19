import Image from 'next/image';
import Link from 'next/link';

export default function FeatureContainerOne({
	title,
	meta,
	banner,
	content,
	link,
}) {
	return (
		<>
			<div className="bg-primary_2 rounded-lg px-4 py-6 md:py-10 md:px-6 w-full space-y-5 shadow-md">
				<div className="text-3xl md:text-5xl">{title}</div>
				<div className="text-xs md:text-sm">{meta}</div>
				<div className="">{banner}</div>
				<div className="">{content}</div>
				<div className="">
					<Link href={link || '/'}>
						<a className="btn btn-primary">See More</a>
					</Link>
				</div>
			</div>
		</>
	);
}
