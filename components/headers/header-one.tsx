import Image from 'next/image';
import Link from 'next/link';
import MainMenu from '../menus/main-menu';
import MenuConnectWeb3 from '../web3/MenuConnectWeb3';

export default function HeaderOne() {
	return (
		<>
			<div className="grid grid-cols-2 items-center p-5 max-w-6xl mx-auto">
				<div>
					<Link href="/">
						<a>
							<Image
								priority
								src="/images/logo.png"
								className="rounded-full cursor-pointer"
								height={108}
								width={108}
								alt="Personal website for Craig Hicks"
							/>
						</a>
					</Link>
				</div>
				<div>
					<MainMenu />
				</div>
			</div>
			<div className="w-full p-2 bg-secondary">
				<div className="grid grid-flow-col items-center auto-cols-max gap-5 max-w-6xl mx-auto justify-end ">
					<MenuConnectWeb3 />
				</div>
			</div>
		</>
	);
}
