import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@chakra-ui/react';

import GridProducts from './Grid/GridProducts';
import ListProducts from './List/ListProducts';

const Main = ({ products, grid }) => (
  <Box
    py={2}
    px={{ sm: 0, md: 4 }}
  >
    {
        grid
          ? <GridProducts products={products} />
          : <ListProducts products={products} />
      }
  </Box>
);

Main.propTypes = {
  products: PropTypes.array.isRequired,
  grid: PropTypes.bool.isRequired,
};

export default Main;
