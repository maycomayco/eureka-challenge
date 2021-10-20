import React from "react";
import { Box, Stack, Image, Divider, Flex } from "@chakra-ui/react";

const ListProduct = ({ product }) => {
	const { title, productType, imageSrc, imageAlt, quantitySold } = product;

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
					src={imageSrc}
					alt={imageAlt}
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
					{productType}
				</Box>
				{/* <Box>$1111</Box> */}
				<Box as="span" color="gray.600" fontSize="sm">Quantity sold: {quantitySold}</Box>
			</Stack>

		</Stack>
	);
};

export default ListProduct;