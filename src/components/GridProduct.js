import React from "react";
import { Box, Image, Stack, Divider, Flex } from "@chakra-ui/react"

const GridProduct = ({ product }) => {
	const { title, productType, imageSrc, imageAlt, quantitySold } = product;

	return (
		<Stack
			maxW="sm"
			borderWidth="1px"
			borderRadius="lg"
		 	bgColor="white"
		>
			<Flex className="wrapper-image" h="200px" p={2}>
				<Image
					src={imageSrc}
					alt={imageAlt}
					objectFit="contain"
					fallbackSrc="https://via.placeholder.com/150"
				/>
			</Flex>
			<Divider />
			<Box p="6">
				<Box
					fontWeight="semibold"
					as="h4"
					minH="50px"
				>
					{title}
				</Box>
				<Box as="span" color="gray.600" fontSize="sm">
					{productType}
				</Box>
				{/* <Box>$1111</Box> */}
				<Box>Quantity sold: {quantitySold}</Box>
			</Box>
		</Stack>
	)
}

export default GridProduct;
