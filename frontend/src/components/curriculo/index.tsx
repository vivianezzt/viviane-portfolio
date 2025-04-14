import { Tecnologia } from "@core";
import TecnologiasTrabalhadas from "./tecnologiasTrabalhadas";

export interface CurriculoProps {
    tecnologias: Tecnologia[];
}

export default function Curriculo(props: CurriculoProps) {
    return (
        <div>
            <TecnologiasTrabalhadas tecnologias={props.tecnologias} />
        </div>
    )
}