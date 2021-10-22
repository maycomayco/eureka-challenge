import React from "react";
import { Box } from "@chakra-ui/layout";
import GridProducts from "./Grid/GridProducts"
import ListProducts from "./List/ListProducts";

const Main = ({ products , grid}) => {
	return (
		<Box
			py={2}
			px={{sm:0, md:4}}
		>
			{
				grid
				? <GridProducts products={products}/>
				: <ListProducts products={products} />
			}
		</Box>
	);
};

export default Main;
