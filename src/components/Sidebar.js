import React from 'react';
import PropTypes from 'prop-types';

import {
  Checkbox,
  // RangeSlider,
  // RangeSliderTrack,
  // RangeSliderFilledTrack,
  // RangeSliderThumb,
  Divider,
  // Box,
  Stack,
  Heading,
} from '@chakra-ui/react';

const Sidebar = ({
  productTypes, productTypesFilter, setProductTypeFilter,
}) => {
  const handleOnChange = (e) => {
    const checked = e.target.value;

    // check if the filter has already in the state to remove it
    if (productTypesFilter.includes(checked)) {
      setProductTypeFilter(
        productTypesFilter.filter((i) => i !== checked),
      );
      return;
    }
    //  add new category to filter
    setProductTypeFilter([
      ...productTypesFilter,
      checked,
    ]);
  };

  return (
    <Stack
      minW="20vw"
      py={4}
      px={{ md: 0, lg: 4 }}
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
            productTypes.map((p) => (
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
          }
          s
        </Stack>
      </Stack>
      <Stack spacing={2}>
        {/* <Heading
          size="sm"
          className="sidebar__title"
        >
          Price type

        </Heading>
        <Divider /> */}
        {/* <Box py={11}>
          <RangeSlider aria-label={['min', 'max']} defaultValue={[10, 30]}>
            <RangeSliderTrack>
              <RangeSliderFilledTrack />
            </RangeSliderTrack>
            <RangeSliderThumb index={0} />
            <RangeSliderThumb index={1} />
          </RangeSlider>
        </Box> */}
      </Stack>
    </Stack>
  );
};

Sidebar.propTypes = {
  productTypes: PropTypes.array.isRequired,
  productTypesFilter: PropTypes.array.isRequired,
  setProductTypeFilter: PropTypes.func.isRequired,
};

export default Sidebar;
