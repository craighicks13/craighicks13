import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData } from '../lib/post';

export default function Posts({ allPostsData }) {
	return (
		<>
			<Layout>
				<Head>
					<title>{siteTitle}</title>
				</Head>

				<section className="p-1">
					<h2 className="">Posts</h2>
					<ul className="">
						{allPostsData.map(({ id, date, title, preview }) => (
							<li className="mt-5 p-5 rounded-lg grid" key={id}>
								<Link href={`/posts/${id}`}>
									<a className="text-3xl font-bold no-underline text-neutral-800">
										{title}
									</a>
								</Link>
								<span className="text-sm text-neutral-400">
									{date}
								</span>
								<span className="mt-3">{preview}</span>

								<Link href={`/posts/${id}`}>
									<a className="btn btn-primary w-20 mt-4">More</a>
								</Link>
							</li>
						))}
					</ul>
				</section>
			</Layout>
		</>
	);
}

export async function getStaticProps() {
	const allPostsData = getSortedPostsData();
	return {
		props: {
			allPostsData,
		},
	};
}
