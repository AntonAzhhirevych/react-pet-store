import React, { Component } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import pets from '../../assets/pets.json';
import styles from './PetPage.module.css';

class PetPage extends Component {
  state = {};

  static propTypes = {
    history: ReactRouterPropTypes.history.isRequired,
    match: ReactRouterPropTypes.match.isRequired,
  };

  getPetId = (items, id) => {
    return items.find(pet => pet.id === id);
  };

  handleReturnButton = () => {
    this.props.history.push('/pets');
  };

  matchId = () => {
    return this.props.match.params.id;
  };

  render() {
    const pet = this.getPetId(pets, this.matchId());
    return (
      <>
        <div className={styles.card}>
          <button
            className={styles.button}
            onClick={this.handleReturnButton}
            type="button"
          >
            Return
          </button>

          <h2>All about {pet.name}</h2>
          <div className={styles.general_content}>
            <img className={styles.img} src={pet.image} alt={pet.breed} />
            <div className={styles.descr}>
              <p className={styles.text}>
                Age: <span className={styles.text_desc}>{pet.age}</span>
              </p>
              <p className={styles.text}>
                Gender: <span className={styles.text_desc}>{pet.breed}</span>
              </p>
              <p className={styles.text}>
                Color: <span className={styles.text_desc}>{pet.gender}</span>
              </p>
              <p className={styles.text}>
                Breed: <span className={styles.text_desc}>{pet.color}</span>
              </p>
            </div>
          </div>
          <p>{pet.description}</p>
        </div>
      </>
    );
  }
}

export default PetPage;
