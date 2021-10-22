import React, { useState, useEffect } from "react";

import {
	Box,
	Image,
	Stack,
	Divider,
	Flex,
	Badge,
	Text
} from "@chakra-ui/react"

import ButtonVariantsWrapper from "../Variants/ButtonVariantsWrapper";


const GridProduct = ({ product }) => {
	// config to render properly
	const flexGrid = "1 1 25%";
	const justifyContent = "center";
	const { title, productType, imageSrc, imageAlt, quantitySold, variants } = product;

	const [ priceToShow, setPriceToShow ] = useState(0);

	// al cargar el component mapeo todas las variantes solo una vez
	useEffect(() => {
		if (priceToShow === 0) {
			setPriceToShow(variants[0].price);
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);



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
				>{title}</Box>
				<Box
					as="span"
					color="gray.400"
					fontSize="xs"
				>
					<Badge>{productType}</Badge>
				</Box>
				<Box>
					<ButtonVariantsWrapper
						type={productType}
						variants={variants}
						setPriceToShow={setPriceToShow}
						flex={flexGrid}
						justifyContent={justifyContent}
					/>
				</Box>
				<Text>Precio: {priceToShow}</Text>
				<Box
					color="gray.600"
					fontSize="xs"
				>Quantity sold: {quantitySold}</Box>
			</Box>
		</Stack>
	)
}

export default GridProduct;
