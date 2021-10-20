import React from "react";
import {
	Box,
	Stack,
	Image,
	Divider,
	Flex ,
	Badge
} from "@chakra-ui/react";

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
			overflow="hidden"
		>
			<Flex
				className="wrapper-image"
				minW="150px"
			>
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
					<Badge>{productType}</Badge>
				</Box>

				<Box
					as="span"
					color="gray.600"
					fontSize="xs"
				>Quantity sold: {quantitySold}</Box>
			</Stack>

		</Stack>
	);
};

export default ListProduct;
