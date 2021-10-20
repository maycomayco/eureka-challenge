import React from "react";
import { SimpleGrid } from "@chakra-ui/layout";

import GridProduct from "./GridProduct"

const GridProducts = ({products}) => {
	return (
		<SimpleGrid columns={[2, null, 3]} spacing="60px">
			{
				products.map( p => <GridProduct key={p.id} product={p}/>)
			}
		</SimpleGrid>
	)
}

export default GridProducts;
