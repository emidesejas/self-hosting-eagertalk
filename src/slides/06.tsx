export const Slide = () => {
	return (
		<section>
			<section data-auto-animate>
				<h3>The Breaking Point</h3>
			</section>
			<section data-auto-animate>
				<h3>The Breaking Point</h3>
				<p>Thousands of users from organic search</p>
			</section>
			<section data-auto-animate>
				<h3>The Breaking Point</h3>
				<p>CPU at 100%</p>
				{/* TODO: Add CPU screenshot */}
				<div className="border border-dashed border-gray-500 p-8 mt-4">
					<p className="text-sm text-gray-400">[Screenshot: CPU usage]</p>
				</div>
			</section>
			<section data-auto-animate>
				<h3>The Breaking Point</h3>
				<p>Google Search Console</p>
				{/* TODO: Add Search Console screenshot */}
				<div className="border border-dashed border-gray-500 p-8 mt-4">
					<p className="text-sm text-gray-400">[Screenshot: Search Console]</p>
				</div>
			</section>
		</section>
	);
};
