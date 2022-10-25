import Image from 'next/image';
import ProjectFeatureContainer from '../containers/project-feature-container';

export default function PacManCitation() {
	const title: string = 'Pac-man Citation Builder';
	const meta: string = '';
	const link: string =
		'https://projects.craighicks.com/pacman-citation/';
	const externalLink: boolean = true;
	const content: string = `Pac-man with a twist. Use pac-man to gobble the citation
							snippets in the correct order according to the type of
							source indicated in the centre. Use the arrow keys to
							move pac-man around the maze or click the snippet you
							would like pac-man to eat next.`;
	const banner: JSX.Element = (
		<Image
			priority
			src="/images/projects/pac-man-citation-1.png"
			className="rounded-lg"
			height={706}
			width={955}
			alt="Pac-man Citation Builder Learning Activity"
		/>
	);
	const techUsed = [
		'Typescript',
		'Angular 2.0',
		'Node.js',
		'CreateJS',
	];
	return (
		<>
			<ProjectFeatureContainer
				title={title}
				banner={banner}
				content={content}
				link={link}
				techUsed={techUsed}
				meta={meta}
				externalLink={externalLink}
			/>
		</>
	);
}
