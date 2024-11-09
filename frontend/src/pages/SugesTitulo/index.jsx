import SugestaoLista from "../../components/SugestComponents/sugest_lista";
import { HeaderBlue } from "../../components/Header";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  font-family: 'Roboto', sans-serif;
`;

const SugesTitulo = () => {
    return (<>
      <HeaderBlue />
      <Container>
        <SugestaoLista />
      </Container>
    </>);
};

export default SugesTitulo;