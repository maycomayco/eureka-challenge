import React from 'react';
import PropTypes from 'prop-types';

import { SimpleGrid } from '@chakra-ui/react';

import GridProduct from './GridProduct';

const GridProducts = ({ products }) => (
  <SimpleGrid columns={{ sm: 2, md: 2, xl: 3 }} spacing="60px">
    {
        products.map((p) => <GridProduct key={p.id} product={p} />)
      }
  </SimpleGrid>
);

GridProducts.propTypes = {
  products: PropTypes.object.isRequired,
};

export default GridProducts;
