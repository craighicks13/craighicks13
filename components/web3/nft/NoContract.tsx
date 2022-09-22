export default function NoContract() {
	return (
		<div className="flex gap-6 rounded-lg p-2 bg-white border border-neutral-50 shadow">
			<span className="flex items-center rounded-lg bg-violet-600 p-4 ">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 38.4 33.5"
					className="enable-background:new 0 0 38.4 33.5 fill-white w-20 m-auto"
				>
					<path d="M29 10.2c-.7-.4-1.6-.4-2.4 0L21 13.5l-3.8 2.1-5.5 3.3c-.7.4-1.6.4-2.4 0L5 16.3c-.7-.4-1.2-1.2-1.2-2.1v-5c0-.8.4-1.6 1.2-2.1l4.3-2.5c.7-.4 1.6-.4 2.4 0L16 7.2c.7.4 1.2 1.2 1.2 2.1v3.3l3.8-2.2V7c0-.8-.4-1.6-1.2-2.1l-8-4.7c-.7-.4-1.6-.4-2.4 0L1.2 5C.4 5.4 0 6.2 0 7v9.4c0 .8.4 1.6 1.2 2.1l8.1 4.7c.7.4 1.6.4 2.4 0l5.5-3.2 3.8-2.2 5.5-3.2c.7-.4 1.6-.4 2.4 0l4.3 2.5c.7.4 1.2 1.2 1.2 2.1v5c0 .8-.4 1.6-1.2 2.1L29 28.8c-.7.4-1.6.4-2.4 0l-4.3-2.5c-.7-.4-1.2-1.2-1.2-2.1V21l-3.8 2.2v3.3c0 .8.4 1.6 1.2 2.1l8.1 4.7c.7.4 1.6.4 2.4 0l8.1-4.7c.7-.4 1.2-1.2 1.2-2.1V17c0-.8-.4-1.6-1.2-2.1L29 10.2z" />
				</svg>
			</span>
			<span className="">
				<p>
					NFT&apos;s can be found on the Polygon network where the gas
					fees are more affordable.
				</p>{' '}
				<p>
					Select the <strong>Polygon Mainnet</strong> from the
					dropdown list of chains above.
				</p>{' '}
				If you need assistance setting up your wallet, check out the
				instructions{' '}
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
	);
}
