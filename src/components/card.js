import styled from "styled-components";
const Portada = styled.div`
  margin: 1rem;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Card = ({ nombre, portada }) => {
  return (
    <Portada>
      <img src={portada} alt="" width={220} height={300} />
      <h2>{nombre}</h2>
    </Portada>
  );
};
export default Card;
