import Image from 'next/image';
import ProjectFeatureContainer from '../containers/project-feature-container';

export default function CryptoCraig() {
	const title: string = 'Crypto Craig NFT Collection';
	const meta: string = '';
	const link: string = '/crypto-craig';
	const content: string =
		'Collection of 5000 unique ridiculous variations of me.	Got some polygon you want to waste. Come check out my NFT collection and perks. Images will be revieled on my birthday this year!!';
	const banner: JSX.Element = (
		<Image
			priority
			src="/images/cryptocraig-banner.png"
			className="rounded-lg"
			height={400}
			width={1400}
			alt="CryptoCraig NFT Collection"
		/>
	);
	const techUsed = [
		'React',
		'Solidity',
		'Hardhat',
		'Photoshop',
		'web3-react',
	];
	const externalLink: boolean = false;
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
