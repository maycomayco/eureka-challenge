import React from "react";
import {
	Box,
	Image,
	Stack,
	Divider,
	Flex,
	Badge
} from "@chakra-ui/react"

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
				<Box
					as="span"
					color="gray.600" fontSize="sm"
				>
					<Badge>{productType}</Badge>
				</Box>
				<Box
					color="gray.600"
					fontSize="xs"
				>Quantity sold: {quantitySold}</Box>
			</Box>
		</Stack>
	)
}

export default GridProduct;
