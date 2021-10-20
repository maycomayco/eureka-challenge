import React from "react"
import { Flex, Box, Select, Icon } from "@chakra-ui/react"
import { Link, Stack, Text } from "@chakra-ui/layout"
import { AiOutlineAppstore, AiOutlineUnorderedList } from "react-icons/ai";

const Options = ({ quantity, grid, setGrid }) => {

	// Handle kind of layout to render in Main.js
	const handleClickGrid = () => {
		if (grid) return;
		setGrid(true);
	}

	const handleClickList = () => {
		if (!grid) return;
		setGrid(false);
	}

	return (
		<Flex
			justifyContent="space-between"
			alignItems="center"
			py={2}
			className="options"
		>
			<Text
				px={{sm:0, md:4}}
				flexGrow={2}
				className="options__quantity"
				fontSize="sm"
			>
				Available deals: {quantity}
			</Text>
			<Flex px={{sm:0, md:2, lg:4}}>
				<Box mx={1}>
					<Link onClick={handleClickGrid}>
						<Icon as={AiOutlineAppstore} w={6} h={6}/>
					</Link>
				</Box>
				<Box mx={1}>
					<Link onClick={handleClickList}>
						<Icon as={AiOutlineUnorderedList} w={6} h={6}/>
					</Link>
				</Box>
			</Flex>
			<Stack
				px={1}
				direction="row"
				alignItems="center"
			>
				<Text fontSize="sm" minW="80px">Sort results: </Text>
				<Select
					placeholder="--- Select option"
					size="sm"
					borderRadius="md"
				>
					<option value="option1">Option 1</option>
					<option value="option2">Option 2</option>
					<option value="option3">Option 3</option>
				</Select>
			</Stack>
		</Flex>
	);
};

export default Options;
