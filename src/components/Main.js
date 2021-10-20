import React from "react";
import { Box } from "@chakra-ui/layout";
import GridProducts from "./GridProducts"
import ListProducts from "./ListProducts";

const Main = ({ products , grid}) => {
	return (
		<Box py={2} px={4}>
			{
				grid
				? <GridProducts products={products}/>
				: <ListProducts products={products} />
			}
		</Box>
	);
};

export default Main;
