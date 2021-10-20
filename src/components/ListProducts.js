import React from "react";
import { Box, Stack, Image } from "@chakra-ui/react";

const ListProducts = ({ products }) => {
	return (
		<Stack direction="column" spacing={10}>
			<Box
				bgColor="tomato"
				borderWidth="1px"
				borderRadius="lg"
				direction="row"
			>
				<Box className="wrapper-image" h="150px" p={2}>
					<Image
						// src={src}
						// alt={alt}
						objectFit="contain"
						fallbackSrc="https://via.placeholder.com/150"
					/>
				</Box>
				product 1
			</Box>
			<Box>product 2</Box>
		</Stack>
	);
};

export default ListProducts;