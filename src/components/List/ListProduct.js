import React, { useState, useEffect } from "react";
import {
	Box,
	Stack,
	Image,
	Divider,
	Flex ,
	Badge,
	Text
} from "@chakra-ui/react";

import ButtonVariantsWrapper from "../Variants/ButtonVariantsWrapper";

const ListProduct = ({ product }) => {
	const { title, productType, imageSrc, imageAlt, quantitySold, variants } = product;
	const flexList = "1 1 10%";
	const justifyContent = "flex-start";

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
			bgColor="white"
			borderWidth="1px"
			borderRadius="lg"
			direction="row"
			p={4}
			spacing={4}
			h="284px"
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
				<Box className="acaaaa">
					<ButtonVariantsWrapper
						type={productType}
						variants={variants}
						setPriceToShow={setPriceToShow}
						flex={flexList}
						justifyContent={justifyContent}
					/>
				</Box>
				<Text>Precio: {priceToShow}</Text>
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
