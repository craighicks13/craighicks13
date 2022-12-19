import Image from 'next/image';
import MainMenu from '../menus/main-menu';

export default function HeaderHome() {
	return (
		<>
			<div className="max-w-6xl mx-auto pt-10 pr-10 xl:pr-0">
				<MainMenu />
			</div>
			<div className="px-10 pb-24 md:px-5">
				<div className="grid grid-flow-row auto-rows-max justify-items-center text-textmain h-full pt-10 md:pt-24">
					<Image
						priority
						src="/images/name-logo.png"
						height={700 / 1.5}
						width={725 / 1.5}
						alt="Personal website for Craig Hicks"
					/>
					<div className="mt-10">
						<Image
							priority
							src="/images/logo.png"
							className="rounded-full"
							height={164}
							width={164}
							alt="Personal website for Craig Hicks"
						/>
					</div>

					<div className="mt-3">
						<Image
							priority
							src="/images/welcome.png"
							height={390 / 3.5}
							width={1085 / 3.5}
							alt="Personal website for Craig Hicks"
						/>
					</div>
					<div className="text-base pt-2">
						This is my personal site.
					</div>
					<div className="text-xs pt-1">Hi.</div>
				</div>
			</div>
		</>
	);
}
