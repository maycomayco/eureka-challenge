/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';

import {
  Flex,
  Box,
  Select,
  Icon,
  useMediaQuery,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react';

import { AiOutlineAppstore, AiOutlineUnorderedList } from 'react-icons/ai';

const Options = ({
  quantity,
  grid,
  setGrid,
  setOrder,
}) => {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

  // Handle kind of layout to render in Main.js
  const handleClickGrid = () => {
    if (grid) return;
    setGrid(true);
  };

  const handleClickList = () => {
    if (!grid) return;
    setGrid(false);
  };

  const handleOnChange = (e) => {
    setOrder(e.target.value);
  };

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      py={2}
      className="options"
    >
      {
        isLargerThan768
          && (
          <Text
            px={{ sm: 0, md: 4 }}
            flexGrow={2}
            className="options__quantity"
            fontSize="sm"
          >
            Available deals:
            {' '}
            {quantity}

          </Text>
          )
      }
      <Flex px={{ sm: 0, md: 2, lg: 4 }}>
        <Box mx={1}>
          <Link onClick={handleClickGrid}>
            <Icon as={AiOutlineAppstore} w={6} h={6} />
          </Link>
        </Box>
        <Box mx={1}>
          <Link onClick={handleClickList}>
            <Icon as={AiOutlineUnorderedList} w={6} h={6} />
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
          placeholder="Default order"
          size="sm"
          borderRadius="md"
          onChange={handleOnChange}
          name="orderBy"
        >
          <option value="alphabetical">A - Z</option>
        </Select>
      </Stack>
    </Flex>
  );
};

Options.propTypes = {
  quantity: PropTypes.number.isRequired,
  grid: PropTypes.bool.isRequired,
  setGrid: PropTypes.func.isRequired,
  setOrder: PropTypes.func.isRequired,
};

export default Options;
