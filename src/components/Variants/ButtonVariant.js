import React, { useState, useEffect } from "react";
import { Button } from "@chakra-ui/react";

const ButtonVariant = ({ type, variant, setPriceToShow, flex }) => {
	const { price, diapersName, title } = variant;
	const [ localPrice, setLocalPrice ] = useState(0);

	useEffect(() => {
		setLocalPrice(price);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// seteamos el precio a mostrar "globalmente"
	const handleButtonClick = () => setPriceToShow(localPrice);

	const formatedVariantName = (type, diapersName, title) => (
		type === 'diapers'
			? `${diapersName} u.`
			: title
	)

	return (
		<>
			<Button
				as="button"
				colorScheme="gray"
				size="sm"
				flex={flex}
				maxW="33%"
				borderRadius={0}
				border="1px"
				borderColor="gray.200"
				m={1}
				onClick={handleButtonClick}
			>
				{formatedVariantName(type, diapersName, title)}
			</Button>
		</>
	);
};

export default ButtonVariant;