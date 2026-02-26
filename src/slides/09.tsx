export const Slide = () => {
	return (
		<section>
			<section data-auto-animate>
				<h3>Scaling</h3>
			</section>
			<section data-auto-animate>
				<h3>Scaling</h3>
				<p>Vertical scaling?</p>
			</section>
			<section data-auto-animate>
				<h3>Scaling</h3>
				<p className="line-through text-gray-500">Vertical scaling?</p>
				<p className="fragment">No parallelization in the container</p>
			</section>
			<section data-auto-animate>
				<h3>Scaling</h3>
				<p>Horizontal scaling</p>
			</section>
			<section data-auto-animate>
				<h3>Scaling</h3>
				<p>Horizontal scaling</p>
				<ul>
					<li className="fragment">8x t3.medium</li>
					<li className="fragment">Same cost as 1x xlarge</li>
					<li className="fragment">ALB in front</li>
					<li className="fragment">Kamal multi-server deployment</li>
				</ul>
			</section>
		</section>
	);
};
