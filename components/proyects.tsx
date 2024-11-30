import type { Translation } from "../utils/types.ts";

const Project = (props: {
	link: string;
	title: string;
	type: string;
	technologies: string;
}) => (
	<a href={props.link} rel="noreferrer noopener" target="_blank">
		<div
			class="rounded-xl p-0.3 h-full cursor-pointer transition-transform hover:scale-105"
		>
			<div class="bg-stone-200 rounded-lg p-2 text-center h-full">
				<h4 class="mb-0.5 text-black">{props.title}</h4>
				<h5>{props.type}</h5>
				<p class="text-xs mt-0.3">{props.technologies}</p>
			</div>
		</div>
	</a>
);

const Projects = (data: { translation: Translation["projects"] }) => (
	<>
		<h3>{data.translation.title}</h3>
		<div class="grid grid-cols-2 sm:grid-cols-1 gap-3">
			<Project
				link="https://github.com/ManuMxrales/lotus-card"
				title="Lotus Card"
				type="LIT Web Component"
				technologies="JavaScript, CSS, HTML, LIT"
			/>
		</div>
	</>
);

export default Projects;