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
		{ name: 'GraphQL', expert: false },
		{ name: 'Apollo Client', expert: false },
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
						Fullstack Developer | Team Lead | Project Management |
						Digital Media
					</h2>
					<span className="text-xl">
						I am a full stack developer with over fifteen years of
						experience in the industry. Throughout my career, I have
						gained a broad range of skills and expertise in all
						aspects of the development process, and have also taken on
						leadership and management roles where I have demonstrated
						my ability to guide and motivate teams to achieve their
						goals. I have developed numerous interactive applications
						for online, desktop, and mobile platforms, and have a
						passion for learning and problem-solving. I thrive in
						collaborative environments and enjoy tackling challenges
						head-on with a solutions-based approach. As a leader, I
						have a track record of bringing out the best in my team
						members and fostering a positive, inclusive work culture.
						I am eager to continue learning and growing as a
						developer, and am excited to bring my skills, experience,
						and enthusiasm to a new team. As a full stack developer, I
						have the ability to work on projects from start to finish,
						using a variety of languages and technologies to create
						high-quality, user-friendly applications.
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
							Highly resourceful developer with over 10 years of full
							stack development and award winning digital media
							production experience. Worked as sole developer and
							within team settings on projects for the web, mobile and
							desktop. Constantly learning and staying on top of
							technology trends and advancements.
						</div>
						<div className="mt-5">
							<span className="font-bold text-primary mr-1">
								Leadership:
							</span>{' '}
							With over five years of experience in leading
							multifunctional teams and mentoring junior staff, I have
							a proven track record of supporting my colleagues to
							achieve their goals. I am also a valued contributor to
							leadership groups, where I share my ideas, apply my
							reasoned judgments, and help establish goals for our
							organization. I am passionate about fostering a
							collaborative and inclusive work environment, and I take
							great pride in the success of the teams that I have had
							the privilege of leading.
						</div>
						<div className="mt-5">
							<span className="font-bold text-primary mr-1">
								Management:
							</span>{' '}
							Responsible for leading all aspects of the project
							process, including daily scrums, performance management,
							code reviews, and hiring new team members. My strong
							leadership skills and attention to detail have helped me
							effectively guide my team to success, delivering
							high-quality projects on time and within budget. I am
							committed to helping my team members reach their full
							potential and am always looking for ways to improve our
							processes and practices.
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
