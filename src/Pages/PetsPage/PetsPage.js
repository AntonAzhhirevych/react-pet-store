import React from 'react';
import { Link } from 'react-router-dom';
import pets from '../../assets/pets.json';
import styles from './PetsPage.module.css';
import PetsCard from '../../Components/PetsCard/PetsCard';

const PetsPage = () => {
  return (
    <>
      <p className={styles.title}>Available pets</p>
      <ul className={styles.ul}>
        {pets.map(pet => (
          <li className={styles.li} key={pet.id}>
            <Link className={styles.petLink} to={`/pets/${pet.id}`}>
              <PetsCard {...pet} />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default PetsPage;
