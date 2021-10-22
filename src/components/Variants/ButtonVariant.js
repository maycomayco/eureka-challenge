import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@chakra-ui/react';

const ButtonVariant = ({
  type, variant, setPriceToShow, flex,
}) => {
  const { price, diapersName, title } = variant;
  const [localPrice, setLocalPrice] = useState(0);

  useEffect(() => {
    setLocalPrice(price);
  }, []);

  // seteamos el precio a mostrar "globalmente"
  const handleButtonClick = () => setPriceToShow(localPrice);

  const formatedVariantName = () => (
    type === 'diapers'
      ? `${diapersName} u.`
      : title
  );

  return (
    <>
      <Button
        as="button"
        colorScheme="gray"
        size="sm"
        flex={flex}
        maxW="33%"
        borderRadius={0}
        border="1px"
        borderColor="gray.200"
        m={1}
        onClick={handleButtonClick}
        minW="fit-content"
      >
        {formatedVariantName()}
      </Button>
    </>
  );
};

ButtonVariant.propTypes = {
  type: PropTypes.string.isRequired,
  variant: PropTypes.object.isRequired,
  setPriceToShow: PropTypes.func.isRequired,
  flex: PropTypes.string.isRequired,
};

export default ButtonVariant;
