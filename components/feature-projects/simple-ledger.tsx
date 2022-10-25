import Image from 'next/image';
import ProjectFeatureContainer from '../containers/project-feature-container';

export default function SimpleLedger() {
	const title: string = 'My Simple Ledger Full Stack Project';
	const meta: string = '';
	const link: string =
		'https://my-simple-ledger-6hbn37r5l-craighicks13.vercel.app/';
	const externalLink: boolean = true;
	const content: string = `The goal of this challenge is to help us learn how you break down
		and solve technical challenges. This challenge involves a simple
		user story, a git repository and you. The story is about writing a
		Simple Ledger to support Harold the accountant - exponentially
		improving his day to day work.`;
	const banner: JSX.Element = (
		<Image
			priority
			src="/images/projects/my-simple-ledger.png"
			className="rounded-lg"
			height={493}
			width={806}
			alt="My Simple Ledger Full Stack Project"
		/>
	);
	const techUsed = [
		'React',
		'Redux',
		'FirebaseAuth',
		'MongoDB',
		'Express',
		'Node.js',
		'vercel',
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
