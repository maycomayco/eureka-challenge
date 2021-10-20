import React, { useEffect, useState } from "react"
import { ChakraProvider, Box, Flex } from "@chakra-ui/react"
import { Container, Stack } from "@chakra-ui/layout";
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Options from "./components/Options"
import Main from "./components/Main";

// import { getItems } from "./services/yallababy.service";


function App() {
  const [ products, setProducts ] = useState([]);


  useEffect(() =>{
    const getProducts = async () => {
      const secretKey = '1DIPIkKeq8';
	    const url = `https://kabsa.yallababy.com/api/v1/products/best-selling-products-by-subcategory`;

      // revisar doc de fetch
      const resp = await fetch(url, {
        headers: {
          'secretKey': secretKey
        }
      }),
      data = await resp.json();

      setProducts(data);
    };

    getProducts();
  }, [products]);

  // getItems();

  return (
    <ChakraProvider>
      {/* llevar a css */}
      <Box bgColor="#FAFAFA">
        <Header />
        <Container maxW="container.xl">
          <Flex minH="70vh">
            <Sidebar />
            <Flex flexGrow={2}>
            <Stack width="100%">
              <Options quantity={products.length}/>
              <Main products={products}/>
            </Stack>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </ChakraProvider>
  )
}

export default App;