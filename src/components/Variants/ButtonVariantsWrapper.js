import React from "react";
import { Flex } from "@chakra-ui/react"

import ButtonVariant from "./ButtonVariant";

const ButtonVariantsWrapper = ({ type, variants, setPriceToShow, flex, justifyContent }) => {

	return (
		<>
		<Flex
			justifyContent={justifyContent}
			py={2}
			flexWrap="wrap"
		>
			{
				variants.length && variants.map( v => {
					return <ButtonVariant
						key={v.id}
						type={type}
						variant={v}
						setPriceToShow={setPriceToShow}
						flex={flex}
					/>
				})
			}
		</Flex>
		</>
	);
}

export default ButtonVariantsWrapper;