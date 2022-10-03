import Layout from '../../components/layout';
import Link from 'next/link';
import { getAllPostIds, getPostData } from '../../lib/post';
import Head from 'next/head';
import Date from '../../components/date';
import { GetStaticProps, GetStaticPaths } from 'next';

export default function Post({
	postData,
}: {
	postData: {
		title: string;
		date: string;
		contentHtml: string;
	};
}) {
	return (
		<Layout>
			<Head>
				<title>{postData.title}</title>
			</Head>
			<article>
				<h1 className="text-3xl">{postData.title}</h1>
				<div className="text-sm text-gray-400 mt-3">
					<Date dateString={postData.date} />
				</div>
				<div
					dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
				/>
			</article>

			<Link href={`/posts/`}>
				<a className="btn btn-primary w-20 mt-4">Back</a>
			</Link>
		</Layout>
	);
}

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = getAllPostIds();
	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const postData = await getPostData(params.id as string);
	return {
		props: {
			postData,
		},
	};
};
