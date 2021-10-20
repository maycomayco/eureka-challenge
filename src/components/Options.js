import React from "react"
import {
	Flex,
	Box,
	Select,
	Icon,
	useMediaQuery,
	Link,
	Stack,
	Text
} from "@chakra-ui/react"

import { AiOutlineAppstore, AiOutlineUnorderedList } from "react-icons/ai";

const Options = ({ quantity, grid, setGrid }) => {

	const [isLargerThan768] = useMediaQuery("(min-width: 768px)")

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
			{
				isLargerThan768 &&
					<Text
						px={{sm:0, md:4}}
						flexGrow={2}
						className="options__quantity"
						fontSize="sm"
					>Available deals: {quantity}</Text>
			}
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
				px={4}
				direction="row"
				alignItems="center"
			>
				<Text fontSize="sm" minW="80px">Sort results: </Text>
				<Select
					placeholder="--- Select option"
					size="sm"
					borderRadius="md"
				>
					<option value="option1">A - Z</option>
					<option value="option2">Price: High to Low</option>
					<option value="option3">Price: Low to High</option>
				</Select>
			</Stack>
		</Flex>
	);
};

export default Options;
