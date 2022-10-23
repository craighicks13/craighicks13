import Link from 'next/link';
import { Popover, Transition } from '@headlessui/react';
import { BiMenu as MenuIcon, BiX } from 'react-icons/bi';
import MenuConnectWeb3 from '../web3/MenuConnectWeb3';
import ThemeButton from './ThemeButton';
import Image from 'next/image';
import { Fragment } from 'react';

export default function MainMenu() {
	return (
		<>
			<div className="hidden md:block">
				<div className="grid grid-flow-col items-center auto-cols-max gap-5 w-full justify-end text-base font-bold">
					<Link href="/doodles">
						<a>Doodles</a>
					</Link>
					<Link href="/crypto-craig">
						<a>NFT</a>
					</Link>
					<Link href="/posts">
						<a>Posts</a>
					</Link>
				</div>
			</div>
			<div className="md:hidden">
				<Popover className="relative flex justify-end">
					<div className="">
						<Popover.Button className="bg-secondary rounded-md p-2 inline-flex items-center justify-center hover:bg-secondary_2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500">
							<span className="sr-only">Open menu</span>
							<MenuIcon
								className="h-6 w-6 sm:h-8 sm:w-8 text-primary"
								aria-hidden="true"
							/>
						</Popover.Button>
					</div>

					<Transition
						as={Fragment}
						enter="duration-200 ease-out"
						enterFrom="opacity-0 scale-95"
						enterTo="opacity-100 scale-100"
						leave="duration-100 ease-in"
						leaveFrom="opacity-100 scale-100"
						leaveTo="opacity-0 scale-95"
					>
						<Popover.Panel
							focus
							className="absolute z-20 -mt-8 right-0 w-96"
						>
							{({ close }) => (
								<div className="bg-neutral-300 h-80 rounded-lg shadow-xl ring-1 ring-neutral-400 ring-2 ring-offset-white divide-y-4 divide-neutral-400 py-5 px-5">
									<div className="">
										<div className="flex justify-between mb-4">
											<div className="">
												<Image
													className="h-6 w-auto sm:h-10"
													src="/images/logo.png"
													height={64}
													width={64}
													alt="craighicks.com"
												/>
											</div>
											<div className="flex gap-5 h-10">
												<Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-neutral-400 hover:text-neutral-500 hover:bg-neutral-100 focus:outline-none focus:ring-t focus:ring-inset focus:ring-primary-500">
													<span className="sr-only">Close menu</span>
													<BiX
														className="h-6 w-6"
														aria-hidden="true"
													/>
												</Popover.Button>
											</div>
										</div>
									</div>
									<div className="py-6 px-5 space-y-6">
										<div className="grid grid-cols-2 gap-y-4 gap-x-8">
											<Link href="/doodles">
												<a>Doodles</a>
											</Link>
											<Link href="/crypto-craig">
												<a>NFT</a>
											</Link>
											<Link href="/posts">
												<a>Posts</a>
											</Link>
										</div>
									</div>
								</div>
							)}
						</Popover.Panel>
					</Transition>
				</Popover>
			</div>
		</>
	);
}
