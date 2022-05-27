import { useState } from "react";
import peli from "./api/peliculas";
import "./styles.css";
import styled from "styled-components";
import Card from "./components/card";

const Botones = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 960px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const Boton = styled.button`
  font-size: 1.2rem;
  font-weight: bold;
  width: 10rem;
  color: #fff;
  background-color: #000;
  margin: 1rem;
  padding: 1rem;
  display: flex;
  justify-content: center;
`;
const Cards = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 960px;
  width: 100%;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function App() {
  const [movies, setMovies] = useState(peli);
  function moviesFiltradas(value) {
    const peliFiltrada = peli.filter((pelicula) =>
      pelicula.genero.toLowerCase().includes(value)
    );
    setMovies(peliFiltrada);
  }
  return (
    <Container>
      <h1>Nuevos Lanzamientos</h1>
      <Botones>
        <Boton onClick={() => moviesFiltradas("action")}>Accion</Boton>
        <Boton onClick={() => moviesFiltradas("horror")}>Terror</Boton>
        <Boton onClick={() => moviesFiltradas("adventure")}>Aventura</Boton>
        <Boton onClick={() => moviesFiltradas("fantasy")}>Fantasia</Boton>
        <Boton onClick={() => moviesFiltradas("drama")}>Drama</Boton>
      </Botones>
      <Cards>
        {movies.map((pelicula) => {
          return <Card {...pelicula} />;
        })}
      </Cards>
    </Container>
  );
}
