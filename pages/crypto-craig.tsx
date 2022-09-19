import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/layout';

export default function CryptoCraig() {
	return (
		<Layout>
			<Head>
				<title>Crypto Craig NFT Collection</title>
			</Head>

			<h1>Crypto Craig NFT Collection</h1>

			<Image
				src="/images/cryptocraig-banner.png"
				className="rounded-lg"
				alt="Crypto Craig Wallpaper"
				height={400}
				width={1400}
			/>

			<div className="md:flex gap-6">
				<div className="md:flex-auto">
					<div className="rounded-lg mt-10 p-6 bg-white border border-neutral-50 shadow">
						<p>
							I wanted to make an NFT collection cause it seemed fun.
							So, why not create a collection around my ridiculous
							mug. Seriously, there are so many better things to have
							made a collection of but nah.
						</p>

						<h3>
							Let me get some of the most common questions out of the
							way.
						</h3>
						<ul className="list-box">
							<li>
								<span className="question">
									<span className="identifier">Q</span>Is this a scam?
								</span>
								<span className="answer">
									<span className="identifier">A</span>It&apos;d be a
									really bad one if it was. So, no.
								</span>
							</li>
							<li>
								<span className="question">
									<span className="identifier">Q</span>Is it a rug
									pull?
								</span>
								<span className="answer">
									<span className="identifier">A</span>I guess if you
									have expectations it could be but I should be good
									at setting the bar low. That said, I will commit to
									the roadmap.
								</span>
							</li>
							<li>
								<span className="question">
									<span className="identifier">Q</span>Will they go to
									the moon?
								</span>
								<span className="answer">
									<span className="identifier">A</span>No.
								</span>
							</li>
							<li>
								<span className="question">
									<span className="identifier">Q</span>Will they sell
									out?
								</span>
								<span className="answer">
									<span className="identifier">A</span>No.
								</span>
							</li>
							<li>
								<span className="question">
									<span className="identifier">Q</span>Why would you
									want one?
								</span>
								<span className="answer">
									<span className="identifier">A</span>No clue. Maybe
									cause I guilted you into getting some. Maybe cause
									you think your collection could use my face in it.
									Maybe cause you have a few extra MATIC and want to
									see what happens.
								</span>
							</li>
							<li>
								<span className="question">
									<span className="identifier">Q</span>Why on the
									polygon network?
								</span>
								<span className="answer">
									<span className="identifier">A</span>Cost!! I&apos;m
									not made of Ethereum, yet.
								</span>
							</li>
						</ul>
					</div>

					<div className="rounded-lg mt-10 p-6 bg-white border border-neutral-50 shadow">
						<span className="info-box-header matic">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 38.4 33.5"
								className="enable-background:new 0 0 38.4 33.5"
							>
								<path d="M29 10.2c-.7-.4-1.6-.4-2.4 0L21 13.5l-3.8 2.1-5.5 3.3c-.7.4-1.6.4-2.4 0L5 16.3c-.7-.4-1.2-1.2-1.2-2.1v-5c0-.8.4-1.6 1.2-2.1l4.3-2.5c.7-.4 1.6-.4 2.4 0L16 7.2c.7.4 1.2 1.2 1.2 2.1v3.3l3.8-2.2V7c0-.8-.4-1.6-1.2-2.1l-8-4.7c-.7-.4-1.6-.4-2.4 0L1.2 5C.4 5.4 0 6.2 0 7v9.4c0 .8.4 1.6 1.2 2.1l8.1 4.7c.7.4 1.6.4 2.4 0l5.5-3.2 3.8-2.2 5.5-3.2c.7-.4 1.6-.4 2.4 0l4.3 2.5c.7.4 1.2 1.2 1.2 2.1v5c0 .8-.4 1.6-1.2 2.1L29 28.8c-.7.4-1.6.4-2.4 0l-4.3-2.5c-.7-.4-1.2-1.2-1.2-2.1V21l-3.8 2.2v3.3c0 .8.4 1.6 1.2 2.1l8.1 4.7c.7.4 1.6.4 2.4 0l8.1-4.7c.7-.4 1.2-1.2 1.2-2.1V17c0-.8-.4-1.6-1.2-2.1L29 10.2z" />
							</svg>
						</span>
						<span className="info-content">
							NFT&apos;s can be found on the Polygon network where the
							gas fees are more affordable. If you need assistance
							setting up your wallet, check out the instructions{' '}
							<a
								href="https://docs.polygon.technology/docs/develop/metamask/config-polygon-on-metamask/"
								target="_blank"
								rel="noreferrer"
							>
								here
							</a>
							.
						</span>
					</div>
				</div>
			</div>
		</Layout>
	);
}
