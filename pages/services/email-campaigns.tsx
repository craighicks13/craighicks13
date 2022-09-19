import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';

export default function EmailCampaigns() {
	return (
		<Layout>
			<Head>
				<title>Email Marketing</title>
			</Head>
			<div>
				There are a number of strategies to stay connected with your
				customers but email marketing is still the most effective.
			</div>
		</Layout>
	);
}
