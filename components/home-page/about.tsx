import Image from 'next/image';
import Link from 'next/link';
import {
	FaForward as ForwardArrows,
	FaStar as Star,
	FaLink as ProjectLink,
} from 'react-icons/fa';

export default function About() {
	return (
		<>
			<section className="flex flex-wrap md:flex-nowrap gap-10">
				<div className="bg-white p-10 rounded-xl">
					<h2 className="mb-10">
						Developer, Team Lead, Project Management, Digital Media
					</h2>
					<span className="text-xl">
						Technology professional with experience in all aspects of
						the development process. Been developing for the web for
						nearly two decades and developed many interactive
						applications for online, desktop and mobile using
						Actionscript and libraries. Transitioned to HTML5,
						javascript libraries like React and now Web3. Possess a
						passion for learning, problem-solving, collaboration, and
						embracing challenges with a solutions based positive
						approach. Strive to be a valuable member of a team and
						grow within an organization.
					</span>
				</div>
				<div className="bg-secondary_2 p-10 rounded-xl">
					<h3 className="text-white">Over 15 years experience</h3>
					<div className="flex my-5 text-4xl text-primary_2">
						<ForwardArrows />
						<ForwardArrows />
						<ForwardArrows />
						<ForwardArrows />
						<ForwardArrows />
						<ForwardArrows />
					</div>
					<div className="text-white">
						<div className="">
							<span className="font-bold text-primary mr-1">
								Development:
							</span>{' '}
							Developer with experience in full stack development.
							Developed complex applications using in multiple
							languages (JS/NODEjs, AS3, PHP). Constantly learning and
							embrace popular frameworks to develop quality
							applications.
						</div>
						<div className="mt-5">
							<span className="font-bold text-primary mr-1">
								Technology Management:
							</span>{' '}
							Understanding how technology can be leveraged to improve
							operations, processes and user experience. Establish
							processes for technology review, evaluation, and
							implementation; as well as developing effective support
							solutions.
						</div>
						<div className="mt-5">
							<span className="font-bold text-primary mr-1">
								Leadership:
							</span>{' '}
							10+ years experience leading multifunctional teams and
							project management. A natural mentor and lift others to
							achieve goals.
						</div>
					</div>
				</div>
			</section>

			<section className="bg-primary_2 p-10 rounded-xl">
				<h3>Role and Skills</h3>
				<div className="bg-secondary text-white font-bold rounded-lg p-3 mt-5 uppercase">
					Full Stack Developer / Media Development
				</div>
				<div className="mt-5">
					<ul className="flex gap-3 flex-wrap sm:text-lg">
						<li className="flex gap-3 items-center px-5 py-3 bg-secondary_2 text-white rounded-l-full rounded-tr-full">
							<Star />
							Javascript
						</li>
						<li className="flex gap-3 items-center px-5 py-3 bg-secondary_2 text-white rounded-l-full rounded-tr-full">
							<Star />
							React.js
						</li>
						<li className="flex gap-3 items-center px-5 py-3 bg-secondary_2 text-white rounded-l-full rounded-tr-full">
							<Star />
							Typescript
						</li>
						<li className="flex gap-3 items-center px-5 py-3 bg-secondary text-white rounded-l-full rounded-tr-full">
							Web3.js
						</li>
						<li className="flex gap-3 items-center px-5 py-3 bg-secondary text-white rounded-l-full rounded-tr-full">
							TailwindCss
						</li>
						<li className="flex gap-3 items-center px-5 py-3 bg-secondary text-white rounded-l-full rounded-tr-full">
							NextJS
						</li>
						<li className="flex gap-3 items-center px-5 py-3 bg-secondary text-white rounded-l-full rounded-tr-full">
							nodejs
						</li>
						<li className="flex gap-3 items-center px-5 py-3 bg-secondary text-white rounded-l-full rounded-tr-full">
							Redux
						</li>
						<li className="flex gap-3 items-center px-5 py-3 bg-secondary text-white rounded-l-full rounded-tr-full">
							MongoDB
						</li>
						<li className="flex gap-3 items-center px-5 py-3 bg-secondary text-white rounded-l-full rounded-tr-full">
							Vercel
						</li>
						<li className="flex gap-3 items-center px-5 py-3 bg-secondary text-white rounded-l-full rounded-tr-full">
							NFT
						</li>
						<li className="flex gap-3 items-center px-5 py-3 bg-secondary text-white rounded-l-full rounded-tr-full">
							Hardhat
						</li>
						<li className="flex gap-3 items-center px-5 py-3 bg-secondary text-white rounded-l-full rounded-tr-full">
							Truffle
						</li>
						<li className="flex gap-3 items-center px-5 py-3 bg-secondary text-white rounded-l-full rounded-tr-full">
							Solidity
						</li>
						<li className="flex gap-3 items-center px-5 py-3 bg-secondary text-white rounded-l-full rounded-tr-full">
							Client Facing
						</li>
						<li className="flex gap-3 items-center px-5 py-3 bg-secondary text-white rounded-l-full rounded-tr-full">
							JSON
						</li>
						<li className="flex gap-3 items-center px-5 py-3 bg-secondary text-white rounded-l-full rounded-tr-full">
							REST API
						</li>
						<li className="flex gap-3 items-center px-5 py-3 bg-secondary text-white rounded-l-full rounded-tr-full">
							Object-Oriented Programming
						</li>
						<li className="flex gap-3 items-center px-5 py-3 bg-secondary text-white rounded-l-full rounded-tr-full">
							MVC Frameworks
						</li>
						<li className="flex gap-3 text-lg items-center px-5 py-3 bg-secondary text-white rounded-l-full rounded-tr-full">
							Photoshop
						</li>
						<li className="flex gap-3 text-lg items-center px-5 py-3 bg-secondary text-white rounded-l-full rounded-tr-full">
							Adobe Illustrator
						</li>
						<li className="flex gap-3 text-lg items-center px-5 py-3 bg-secondary text-white rounded-l-full rounded-tr-full">
							Adobe Premiere
						</li>
						<li className="flex gap-3 text-lg items-center px-5 py-3 bg-secondary text-white rounded-l-full rounded-tr-full">
							After Effects
						</li>
					</ul>
				</div>
			</section>
			<section>
				<h2>Projects</h2>
				<div className="flex flex-wrap gap-5 justify-center">
					<div className="bg-primary p-10 rounded-xl mt-10 w-96 border-4 border-white">
						<h3>Crypto Craig NFT Collection</h3>
						<div className="mt-5">
							<Image
								priority
								src="/images/cryptocraig-banner.png"
								className="rounded-lg"
								height={400}
								width={1400}
								alt="CryptoCraig NFT Collection"
							/>
						</div>
						<div className="mt-5">
							Collection of 5000 unique ridiculous variations of me.
							Got some polygon you want to waste. Come check out my
							NFT collection and perks. Images will be revieled on my
							birthday this year!!
						</div>
						<div className="mt-5">
							<Link href={'/crypto-craig'}>
								<a className="btn btn-primary flex gap-3 items-center">
									<ProjectLink />
									See Project
								</a>
							</Link>
						</div>
					</div>
					<div className="bg-primary p-10 rounded-xl mt-10 w-96 border-4 border-white">
						<h3>Pac-man Citation Builder</h3>
						<div className="mt-5">
							<Image
								priority
								src="/images/projects/pac-man-citation-1.png"
								className="rounded-lg"
								height={706}
								width={955}
								alt="Pac-man Citation Builder Learning Activity"
							/>
						</div>
						<div className="mt-5">
							Pac-man with a twist. Use pac-man to gobble the citation
							snippets in the correct order according to the type of
							source indicated in the centre. Use the arrow keys to
							move pac-man around the maze or click the snippet you
							would like pac-man to eat next.
						</div>
						<div className="mt-5">
							<a
								href="https://projects.craighicks.com/pacman-citation/"
								target="_blank"
								rel="noreferrer"
								className="btn btn-primary flex gap-3 items-center"
							>
								<ProjectLink />
								See Project
							</a>
						</div>
					</div>
					<div className="bg-primary p-10 rounded-xl mt-10 w-96 border-4 border-white">
						<h3>My Simple Ledger Full Stack Project</h3>
						<div className="mt-5">
							<Image
								priority
								src="/images/projects/my-simple-ledger.png"
								className="rounded-lg"
								height={493}
								width={806}
								alt="My Simple Ledger Full Stack Project"
							/>
						</div>
						<div className="mt-5">
							he goal of this challenge is to help us learn how you
							break down and solve technical challenges. This
							challenge involves a simple user story, a git repository
							and you. The story is about writing a Simple Ledger to
							support Harold the accountant - exponentially improving
							his day to day work.
						</div>
						<div className="mt-5">
							<a
								href="https://my-simple-ledger.vercel.app/"
								target="_blank"
								rel="noreferrer"
								className="btn btn-primary flex gap-3 items-center"
							>
								<ProjectLink />
								See Project
							</a>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
