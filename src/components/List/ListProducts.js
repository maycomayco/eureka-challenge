import React from 'react';
import PropTypes from 'prop-types';

import { Stack } from '@chakra-ui/react';
import ListProduct from './ListProduct';

const ListProducts = ({ products }) => (
  <Stack direction="column" spacing={5}>
    {
        products.map((p) => <ListProduct key={p.id} product={p} />)
      }
  </Stack>
);

ListProducts.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ListProducts;
