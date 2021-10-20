import React from "react";
import { Box, Heading, Container } from "@chakra-ui/react"

const Header = () => {

	return (
		<Box bgColor="gray.500" boxShadow="md" py={6} >
			<Container maxW="container.xl">
				<Heading textAlign="center">Welcome to the Mum's Deals Page!</Heading>
			</Container>
		</Box>
	);
};

export default Header;
