import React from 'react';
import PropTypes from 'prop-types';

import { Flex } from '@chakra-ui/react';

import ButtonVariant from './ButtonVariant';

const ButtonVariantsWrapper = ({
  type, variants, setPriceToShow, flex, justifyContent,
}) => (
  <>
    <Flex
      justifyContent={justifyContent}
      py={2}
      flexWrap="wrap"
    >
      {
        variants.length && variants.map((v) => (
          <ButtonVariant
            key={v.id}
            type={type}
            variant={v}
            setPriceToShow={setPriceToShow}
            flex={flex}
          />
        ))
      }
    </Flex>
  </>
);

ButtonVariantsWrapper.propTypes = {
  type: PropTypes.string.isRequired,
  variants: PropTypes.array.isRequired,
  setPriceToShow: PropTypes.func.isRequired,
  flex: PropTypes.string.isRequired,
  justifyContent: PropTypes.string.isRequired,
};

export default ButtonVariantsWrapper;
