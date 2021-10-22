import React from "react";
import { SimpleGrid } from "@chakra-ui/layout";

import GridProduct from "../Grid/GridProduct"

const GridProducts = ({products}) => {
	return (
		<SimpleGrid columns={{sm: 2, md: 2, xl: 3}} spacing="60px">
			{
				products.map( p => <GridProduct key={p.id} product={p}/>)
			}
		</SimpleGrid>
	)
}

export default GridProducts;
