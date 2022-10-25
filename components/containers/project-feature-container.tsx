import Image from 'next/image';
import Link from 'next/link';
import { FaLink as ProjectLink } from 'react-icons/fa';

export default function ProjectFeatureContainer({
	title,
	meta,
	banner,
	content,
	link,
	techUsed,
	externalLink,
}) {
	return (
		<>
			<div className="bg-primary p-10 rounded-xl mt-10 w-96 border-4 border-white">
				<h3>{title}</h3>
				<div className="mt-5">{banner}</div>
				<div className="mt-5">{content}</div>
				<div className="flex gap-1 flex-wrap mt-5">
					{techUsed.map((item) => {
						return (
							<div
								key={item}
								className="bg-secondary_2 px-4 py-2 rounded-full w-fit text-white text-xs"
							>
								{item}
							</div>
						);
					})}
				</div>
				<div className="mt-5">
					{externalLink ? (
						<a
							href={link}
							target="_blank"
							rel="noreferrer"
							className="btn btn-primary flex gap-3 items-center"
						>
							{' '}
							<ProjectLink />
							See Project
						</a>
					) : (
						<Link href={link}>
							<a className="btn btn-primary flex gap-3 items-center">
								<ProjectLink />
								See Project
							</a>
						</Link>
					)}
				</div>
			</div>
		</>
	);
}
