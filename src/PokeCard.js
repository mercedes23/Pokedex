import React from "react";
import PropTypes from "prop-types";

// creating the pokemond class component
class PokeCard extends React.Component {
  render() {
    return (
      <div className="card">
        <li>
          <h2>{this.props.name}</h2>
          <img src={this.props.image} alt={this.props.name} />
          <p>Type: {this.props.type}</p>
        </li>
      </div>
    );
  }
}

// props type
PokeCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  type: PropTypes.string
};

export default PokeCard;
