import { Tecnologia } from "@core"

export interface TecnologiasTrabalhadasProps {
	lista: Tecnologia[]
}

export default function TecnologiasTrabalhadas(props: { tecnologias: Tecnologia[] }) {

	return (
		<div className="flex justify-center items-center p-6 w-full lg:w-72 bg-black rounded-2xl border-zinc-800">
			<div className="flex justify-center items-center gap-4 flex-wrap">
				{props.tecnologias.map((tecnologia) => (
					<div key={tecnologia.id}>
						<span className="text-red-500 font-bold">#</span>
						<span>{tecnologia.nome}</span>
					</div>
				))}
			</div>
		</div>
	);
}
