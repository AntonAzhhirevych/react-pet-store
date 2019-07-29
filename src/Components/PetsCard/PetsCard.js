import React from 'react';
import PropTypes from 'prop-types';
import styles from './PetsCard.module.css';

const PetsCard = ({ image, name, breed }) => {
  return (
    <>
      <img className={styles.img} src={image} alt={breed} />
      <p className={styles.text}>{name}</p>
    </>
  );
};

PetsCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired,
};

export default PetsCard;
