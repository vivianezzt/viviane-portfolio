
import { httpGet } from "./api";
import { Tecnologia } from "@core"; // Adjust the path to where Tecnologia is defined


export async function obterTecnologias(){
    const tecnologias: Tecnologia[] = await httpGet("/tecnologias")
    return {
        todas: tecnologias,
        get destaques(){
            return tecnologias.filter((tecnologia) => tecnologia.destaque)
        }
    }
}