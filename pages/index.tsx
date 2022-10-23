import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import About from '../components/home-page/about';
import CryptoCraig from '../components/home-page/crypto-craig';
import EmailMarketing from '../components/home-page/email-marketing';
import ChicksDoodles from '../components/home-page/doodles';
import { getSortedPostsData } from '../lib/post';

export default function Home() {
	return (
		<>
			<Layout home>
				<Head>
					<title>{siteTitle}</title>
				</Head>
				<About />
				<ChicksDoodles />
			</Layout>
		</>
	);
}
