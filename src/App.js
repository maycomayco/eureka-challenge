import React, { useEffect, useState } from "react"
import { ChakraProvider, Box, Flex } from "@chakra-ui/react"
import { Container, Stack } from "@chakra-ui/layout";

import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Options from "./components/Options"
import Main from "./components/Main";

import { getProductsBySubcategory } from "./services/Yallababy.service";

// import { getItems } from "./services/yallababy.service";


function App() {
  // products from API
  const [ products, setProducts ] = useState([]);

  // product types
  const [ productTypes, setProductTypes ] = useState([]);

  // product type to filter
  const [ productTypesFilter, setProductTypeFilter ] = useState([]);

  // type of product layout
  const [ grid, setGrid ] = useState(false);


  useEffect(() =>{
    const getProducts = async () => {
      const products = await getProductsBySubcategory(productTypesFilter);
      setProducts(products);

      if (!productTypes.length) {
        // Get the product types here to avoid make another GET
        const getProductTypes = () => {
          // Use Set because don't accept duplicated entries
          const uniques = new Set(products.map( p => p.productType));
          return Array.from(uniques); // return an Array
        }
        setProductTypes(getProductTypes());
      }

    };

    getProducts();
  }, [productTypesFilter]);

  return (
    <ChakraProvider>
      {/* llevar a css */}
      <Box bgColor="#FAFAFA">
        <Header />
        <Container maxW="container.xl">
          <Flex minH="70vh">
            <Sidebar
              productTypes={productTypes}
              productTypesFilter={productTypesFilter}
              setProductTypeFilter={setProductTypeFilter}
            />
            <Flex flexGrow={2}>
            <Stack width="100%">
              <Options
                quantity={products.length}
                grid={grid}
                setGrid={setGrid}
              />
              <Main products={products} grid={grid} />
            </Stack>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </ChakraProvider>
  )
}

export default App;