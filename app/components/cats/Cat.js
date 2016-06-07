import React , {PropTypes }  from 'react'
import { Link } from 'react-router'
import styles from './cats.css';


const Cat = ({cat}) => (
    <div className={styles.cat}>
      <Link to={"/clues/cat/" + cat.category_id}>
        {cat.category_name}
      </Link>
    </div>
);


Cat.propTypes = {
  cat: PropTypes.object.isRequired
};

Cat.defaultProps = {
  cat: {category_id:1, category_name:"history"}
};

export default Cat;
