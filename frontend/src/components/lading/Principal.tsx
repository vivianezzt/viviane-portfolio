import Cabecalho from "../shared/Cabecalho";

export default function Principal() {
    return (
        <div className="flex flex-col items-center justify-center h-[500px] bg-[url('/header.jpg')] bg-cover">
            <Cabecalho />
            <div className="flex-1 flex flex-col justify-center items-center">
                <h1 className="flex items-center gap-4">
                    <span className="w-2 h-2 rounded-full bg-red-500"></span>
                    <span className="text-3xl sm:text-5xl font-bold text-center">Viviane Aguiar</span>
                    <span className="w-2 h-2 rounded-full bg-red-500"></span>
                </h1>
                <h2 className="text-zinc-400">Desenvolvedora FullStack</h2>
            </div>
        </div>
    )
}
