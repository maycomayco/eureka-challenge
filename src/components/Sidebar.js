import React, { useState } from "react";
// import { Stack, Heading } from "@chakra-ui/layout"
import {
	Checkbox,
	RangeSlider,
	RangeSliderTrack,
	RangeSliderFilledTrack,
	RangeSliderThumb,
	Divider,
	Box,
	Stack,
	Heading
} from "@chakra-ui/react"

const Sidebar = ({ productTypes, productTypesFilter, setProductTypeFilter }) => {

	const handleOnChange = e => {
		const checked = e.target.value;

		// check if the filter has already in the state
		if (productTypesFilter.includes(checked)) {
			setProductTypeFilter(
				productTypesFilter.filter( i => i !== checked)
			)
			return;
		}

		setProductTypeFilter([
			...productTypesFilter,
			checked
		])
	}

	return (
        <Stack minW="20vw" p={4} spacing={7}>
			<Stack spacing={2}>
				<Heading size="sm">Product types</Heading>
				<Divider />
				<Stack>
					{
						productTypes.map( p => (
							<Checkbox
								key={p}
								value={p}
								name={p}
								onChange={handleOnChange}
							>
								{p}
							</Checkbox>
						))
					}s
				</Stack>
			</Stack>
			<Stack spacing={2}>
				<Heading size="sm">Price type</Heading>
				<Divider />
				<Box py={11}>
					{/* <Stack> */}
						<RangeSlider aria-label={["min", "max"]} defaultValue={[10, 30]} >
							<RangeSliderTrack>
								<RangeSliderFilledTrack />
							</RangeSliderTrack>
							<RangeSliderThumb index={0} />
							<RangeSliderThumb index={1} />
						</RangeSlider>
					{/* </Stack> */}
				</Box>
			</Stack>
		</Stack>
	);
}

export default Sidebar;