import Curriculo from "@/components/curriculo";
import { obterTecnologias } from "@/components/functions/tecnologias";
import Principal from "@/components/lading/Principal";
import Container from "@/components/shared/Container";

export default async function Home() {
  const tecnologias = await obterTecnologias();
  return (
    <div>
      <Principal />
      <Container className="py-16">
        <Curriculo tecnologias={tecnologias.todas} />
      </Container>

    </div>
  );
}
