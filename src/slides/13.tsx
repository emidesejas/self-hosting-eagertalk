export const Slide = () => {
	return (
		<section>
			<section data-auto-animate>
				<h3>Alternatives</h3>
			</section>
			<section data-auto-animate>
				<h3>Alternatives</h3>
				<div className="flex justify-center items-center gap-8">
					<div className="text-center">
						<p className="font-bold">Vercel</p>
						<p className="text-sm text-gray-400">Fully managed</p>
					</div>
					<p className="text-gray-500">↔</p>
					<div className="text-center">
						<p className="font-bold">ECS</p>
						<p className="text-sm text-gray-400">Middle ground</p>
					</div>
					<p className="text-gray-500">↔</p>
					<div className="text-center">
						<p className="font-bold">EC2 + Kamal</p>
						<p className="text-sm text-gray-400">Full control</p>
					</div>
				</div>
			</section>
		</section>
	);
};
