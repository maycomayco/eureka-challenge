import React from "react";
import { Box, Stack, Image, Divider, Flex } from "@chakra-ui/react";

const ListProduct = ({ product }) => {
	const { image: { src, alt }, title, product_type } = product;

	return (
		<Stack
			bgColor="white"
			borderWidth="1px"
			borderRadius="lg"
			direction="row"
			p={4}
			spacing={4}
			h="184px"
		>
			<Flex className="wrapper-image">
				<Image
					src={src}
					alt={alt}
					objectFit="contain"
					fallbackSrc="https://via.placeholder.com/150"
					boxSize="150px"
				/>
			</Flex>
			<Divider orientation="vertical" color="gray.900"/>
			<Stack className="wrapper-info" py={2}>
				<Box
					fontWeight="semibold"
					as="h4"
				>
					{title}
				</Box>
				<Box as="span" color="gray.600" fontSize="sm">
					{product_type}
				</Box>
				<Box>$1111</Box>
				<Box>Quantity sold</Box>
			</Stack>

		</Stack>
	);
};

export default ListProduct;