import React from "react";
import { Box } from "@chakra-ui/layout";
import GridProducts from "./GridProducts"
import ListProducts from "./ListProducts";

const Main = ({products}) => {
	return (
		<Box py={2} px={4}>
			{/* <GridProducts products={products}/> */}
			<ListProducts products={products} />
		</Box>
	);
};

export default Main;
