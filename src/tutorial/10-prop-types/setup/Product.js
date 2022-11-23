import React from 'react';
import PropTypes from 'prop-types';

const Product = ({image, name, price}) => {
  const url = image && image.url;
  const defaultImage = 'https://via.placeholder.com/400';
  return (
    // <article className='product'>
    //   { image && image.url ? <img src={image.url} alt={name} /> : <img src='https://via.placeholder.com/400' alt={name} />}
    //   <h4>{name && name}</h4>
    //   <p>${price && price}</p>
    // </article>
    
    // use prop type
    <article className='product'>
      <img src={url || defaultImage} alt={name || 'default image'} />
      <h4>{name || 'default name'}</h4>
      <p>${price || 3.99}</p>
    </article>
  );
};

Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};

// Product.defaultProps = {
//   image: <img src='https://via.placeholder.com/400' alt='' />,
//   name: 'default name',
//   price: 3.99
// };

export default Product;
