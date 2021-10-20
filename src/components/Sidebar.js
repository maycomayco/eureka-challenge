import React from "react";

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
        <Stack
			minW="20vw"
			py={4}
			px={{md:0, lg:4}}
			spacing={7}
			className="sidebar"
		>
			<Stack spacing={2}>
				<Heading
					size="sm"
					className="sidebar__title"
				>
					Product types
				</Heading>
				<Divider />
				<Stack className="sidebar__wrapper-checkbox">
					{
						productTypes.map( p => (
							<Checkbox
								className="product-type"
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
				<Heading
					size="sm"
					className="sidebar__title"
				>Price type</Heading>
				<Divider />
				<Box py={11}>
					<RangeSlider aria-label={["min", "max"]} defaultValue={[10, 30]} >
						<RangeSliderTrack>
							<RangeSliderFilledTrack />
						</RangeSliderTrack>
						<RangeSliderThumb index={0} />
						<RangeSliderThumb index={1} />
					</RangeSlider>
				</Box>
			</Stack>
		</Stack>
	);
}

export default Sidebar;
