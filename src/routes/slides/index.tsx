import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import Reveal from "reveal.js";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/black.css";
import "reveal.js/plugin/highlight/monokai.css";
import Highlight from "reveal.js/plugin/highlight/highlight";
import RevealNotes from "reveal.js/plugin/notes/notes";

import { Slide as TitleSlide } from "~/slides/01";
import { Slide as AgendaSlide } from "~/slides/02";
import { Slide as ContextSlide } from "~/slides/03";
import { Slide as RedFlagsSlide } from "~/slides/04";
import { Slide as AdsHellSlide } from "~/slides/05";
import { Slide as BreakingPointSlide } from "~/slides/06";
import { Slide as ThePlanSlide } from "~/slides/07";
import { Slide as StaticRenderingSlide } from "~/slides/08";
import { Slide as ScalingSlide } from "~/slides/09";
import { Slide as CloudFrontSlide } from "~/slides/10";
import { Slide as CloudflareSlide } from "~/slides/11";
import { Slide as LessonsLearnedSlide } from "~/slides/12";
import { Slide as AlternativesSlide } from "~/slides/13";
import { Slide as ThankYouSlide } from "~/slides/14";

export const Route = createFileRoute("/slides/")({
	component: SlidesPage,
});

function SlidesPage() {
	const deckDivRef = useRef<HTMLDivElement>(null); // reference to deck container div
	const deckRef = useRef<Reveal.Api | null>(null); // reference to deck reveal instance

	useEffect(() => {
		// Prevents double initialization in strict mode
		if (deckRef.current) return;
		if (!deckDivRef.current) return;

		deckRef.current = new Reveal(deckDivRef.current, {
			transition: "slide",
			showNotes: "separate-page",
			plugins: [RevealNotes, Highlight],
			viewDistance: 100,
			autoAnimate: true,
			// other config options
		});

		deckRef.current.initialize().then(() => {
			// good place for event handlers and plugin setups
		});

		return () => {
			try {
				if (deckRef.current) {
					deckRef.current.destroy();
					deckRef.current = null;
				}
			} catch (e) {
				console.warn("Reveal.js destroy call failed.");
				console.error(e);
			}
		};
	}, []);

	return (
		<div className="h-dvh w-full">
			<div className="reveal" ref={deckDivRef}>
				<div className="slides">
					<TitleSlide />
					<AgendaSlide />
					<ContextSlide />
					<RedFlagsSlide />
					<AdsHellSlide />
					<BreakingPointSlide />
					<ThePlanSlide />
					<StaticRenderingSlide />
					<ScalingSlide />
					<CloudFrontSlide />
					<CloudflareSlide />
					<LessonsLearnedSlide />
					<AlternativesSlide />
					<ThankYouSlide />
				</div>
			</div>
		</div>
	);
}
