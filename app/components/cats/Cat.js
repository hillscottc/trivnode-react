import React , {PropTypes }  from 'react'
import styles from './cats.css';


const Cat = ({cat}) => (
    <div className={styles.cat}>
        <span>{cat.category_name}</span>
    </div>
);


Cat.propTypes = {
  cat: PropTypes.object.isRequired
};

Cat.defaultProps = {
  cat: {category_id:1, category_name:"history"}
};

export default Cat;
