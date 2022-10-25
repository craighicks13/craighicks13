import Image from 'next/image';
import Link from 'next/link';
import {
	FaForward as ForwardArrows,
	FaStar as Star,
	FaLink as ProjectLink,
} from 'react-icons/fa';
import CryptoCraig from '../feature-projects/crypto-craig';
import PacManCitation from '../feature-projects/pac-man';
import SimpleLedger from '../feature-projects/simple-ledger';

export default function About() {
	const skillsList = [
		{ name: 'Javascript', expert: true },
		{ name: 'ReactJS', expert: true },
		{ name: 'Typescript', expert: true },
		{ name: 'Web3.js', expert: false },
		{ name: 'TailwindCss', expert: false },
		{ name: 'NextJS', expert: false },
		{ name: 'node.js', expert: false },
		{ name: 'Redux', expert: false },
		{ name: 'Client Facing', expert: false },
		{ name: 'Project Management', expert: false },
		{ name: 'Team Lead', expert: false },
		{ name: 'MongoDB', expert: false },
		{ name: 'Express', expert: false },
		{ name: 'Vercel', expert: false },
		{ name: 'NFT', expert: false },
		{ name: 'Hardhat', expert: false },
		{ name: 'Truffle', expert: false },
		{ name: 'Solidity', expert: false },
		{ name: 'JSON', expert: false },
		{ name: 'REST API', expert: false },
		{ name: 'MySQL', expert: false },
		{ name: 'PHP', expert: false },
		{ name: 'Object-Oriented Programming', expert: false },
		{ name: 'MVC Frameworks', expert: false },
		{ name: 'Photoshop', expert: false },
		{ name: 'Adobe Illustrator', expert: false },
		{ name: 'Adobe Premiere', expert: false },
		{ name: 'After Effects', expert: false },
		{ name: 'Cinema 4D', expert: false },
	];

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
						{skillsList.map((item, index) => {
							return (
								<li
									key={index}
									className={`flex gap-3 items-center px-5 py-3 ${
										item.expert ? 'bg-secondary_2' : 'bg-secondary'
									} text-white rounded-l-full rounded-tr-full`}
								>
									{item.expert && <Star />}
									{item.name}
								</li>
							);
						})}
					</ul>
				</div>
			</section>
			<section>
				<h2>Projects</h2>
				<div className="flex flex-wrap gap-5 justify-center">
					<CryptoCraig />
					<PacManCitation />
					<SimpleLedger />
				</div>
			</section>
		</>
	);
}
