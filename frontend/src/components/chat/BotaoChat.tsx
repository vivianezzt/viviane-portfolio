import Image from "next/image";

export default function BotaoChat() {
    return(
        <div className="fixed bottom-5 right-5 cursor-pointer">
            <Image src="./chat.svg" width={50} height={50} alt="botao de chat" />
        </div>
    )
}