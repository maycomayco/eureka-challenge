import React from "react";
import { Stack } from "@chakra-ui/react";
import ListProduct from "./ListProduct";

const ListProducts = ({ products }) => {
	return (
		<Stack direction="column" spacing={5}>
			{
				products.map( p => <ListProduct key={p.id} product={p}/>)
			}
		</Stack>
	);
};

export default ListProducts;