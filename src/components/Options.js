import React from "react"
import { Flex, Box, Select, Icon } from "@chakra-ui/react"
import { Stack, Text } from "@chakra-ui/layout"
import { AiOutlineAppstore, AiOutlineUnorderedList } from "react-icons/ai";

const Options = ({ quantity }) => {
	return (
		<Flex justifyContent="space-between" alignItems="center" py={2}>
			<Text px={4} flexGrow={2}>Available deals: {quantity}</Text>
			<Box px={4}>
				<Icon as={AiOutlineAppstore} w={6} h={6} mx={2}/>
				<Icon as={AiOutlineUnorderedList} w={6} h={6} mx={2}/>
			</Box>
			<Stack px={4} direction="row" alignItems="center">
				<Text fontSize="sm" minW="80px">Sort results: </Text>
				<Select placeholder="--- Select option ---">
					<option value="option1">Option 1</option>
					<option value="option2">Option 2</option>
					<option value="option3">Option 3</option>
				</Select>
			</Stack>
		</Flex>
	);
};

export default Options;