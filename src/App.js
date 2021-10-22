import React, { useEffect, useState } from 'react';
import {
  ChakraProvider,
  Box,
  Flex,
  Container,
  Stack,
  useMediaQuery,
} from '@chakra-ui/react';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Options from './components/Options';
import Main from './components/Main';

import getProductsBySubcategory from './services/Yallababy.service';

function App() {
  // products from API
  const [products, setProducts] = useState([]);

  // product types
  const [productTypes, setProductTypes] = useState([]);

  // product type to filter
  const [productTypesFilter, setProductTypeFilter] = useState([]);

  const [order, setOrder] = useState('');

  // type of product layout
  const [grid, setGrid] = useState(false);

  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

  // load products
  useEffect(() => {
    const getProducts = async () => {
      const products = await getProductsBySubcategory(
        productTypesFilter, order,
      );
      setProducts(products);

      // I get the product types only in the first render of the page
      if (!productTypes.length) {
        // Get the product types here to avoid make another GET
        const getProductTypes = () => {
          // Use Set because don't accept duplicated entries
          const uniques = new Set(products.map((p) => p.productType));
          return Array.from(uniques); // return an Array
        };
        setProductTypes(getProductTypes());
      }
    };

    getProducts();
  }, [productTypesFilter, order]);

  return (
    <ChakraProvider>
      {/* llevar a css */}
      <Box bgColor="#FAFAFA">
        <Header />
        <Container maxW="container.xl">
          <Flex minH="70vh">
            {
              isLargerThan768
                && (
                <Sidebar
                  productTypes={productTypes}
                  productTypesFilter={productTypesFilter}
                  setProductTypeFilter={setProductTypeFilter}
                />
                )
            }
            <Stack w="100%">
              <Options
                quantity={products.length}
                grid={grid}
                setGrid={setGrid}
                setOrder={setOrder}
              />
              <Main products={products} grid={grid} />
            </Stack>
          </Flex>
        </Container>
      </Box>
    </ChakraProvider>
  );
}

export default App;
