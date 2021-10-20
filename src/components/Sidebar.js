import React from "react";
import { Stack, Heading } from "@chakra-ui/layout"
import {
	Checkbox,
	RangeSlider,
	RangeSliderTrack,
	RangeSliderFilledTrack,
	RangeSliderThumb,
	Divider
} from "@chakra-ui/react"

const Sidebar = () => {

	return (
        <Stack minW="20vw" p={4}>
			<Heading size="md">Filter Results</Heading>
			<Divider />
			<Heading size="sm">Product type</Heading>
			<Stack spacing={2}>
				<Checkbox
				// isChecked={checkedItems[0]}
				// onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])}
				>
				Child Checkbox 1
				</Checkbox>
				<Checkbox
				// isChecked={checkedItems[1]}
				// onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}
				>
				Child Checkbox 2
				</Checkbox>
			</Stack>
			<Heading size="sm">Price type</Heading>
			<Stack>
				<RangeSlider aria-label={["min", "max"]} defaultValue={[10, 30]}>
				<RangeSliderTrack>
					<RangeSliderFilledTrack />
				</RangeSliderTrack>
				<RangeSliderThumb index={0} />
				<RangeSliderThumb index={1} />
				</RangeSlider>
			</Stack>
		</Stack>
	);
}

export default Sidebar;