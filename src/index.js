import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import PokeCard from "./PokeCard";

export default class Pokedex extends React.Component {
  render() {
    // array of pokemond
    const pokeList = pokeArr.map(pokemo => {
      return (
        <PokeCard
          key={pokemo.id}
          name={pokemo.name}
          image={pokemo.image}
          type={pokemo.type}
        />
      );
    });

    return (
      <div className="App">
        <h1>Hello Pokedex </h1>
        <ul>{pokeList}</ul>
      </div>
    );
  }
}

// default pokemon
const pokeArr = [
  {
    id: 1,
    name: "Charmander",
    type: "fire",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
  },
  {
    id: 2,
    name: "Squirtle",
    type: "water",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
  },
  {
    id: 3,
    name: "Butterfree",
    type: "flying",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png"
  },
  {
    id: 4,
    name: "Rattata",
    type: "normal",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png"
  },
  {
    id: 5,
    name: "Metapod",
    type: "bug",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png"
  }
];

const rootElement = document.getElementById("root");
ReactDOM.render(<Pokedex />, rootElement);
