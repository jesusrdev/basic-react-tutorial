import { useEffect, useState } from "react";

export default function Pokemones() {
  const [pokemones, setPokemones] = useState(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(res => res.json())
    .then(data => setPokemones(data))
    .catch(err => {console.error(err)
      setPokemones(0)
    });
  },[]);

  if (pokemones == null) {
    return <div>Cargando...</div>;
  }

  if (pokemones === 0) {
    return <div>No se encontro ningun Pokemon</div>;
  }

  return (
    <div>
      <h3>Name: {pokemones.name}</h3>
      <p>Peso: {pokemones.weight}</p>
      <img src={pokemones.sprites.front_default} alt="Pokemon" />
    </div>
  )
}
