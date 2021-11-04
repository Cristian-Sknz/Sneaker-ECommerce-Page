import React, { ChangeEvent, useCallback, useState } from 'react';
import {
  AddCartButton,
  CartButtonsContainer,
  InputBody,
  InputButton,
  NumberInput,
} from './style';

const CartButtons: React.FC<any> = () => {
  const [value, setValue] = useState<number>(1);

  const minus = useCallback(() => {
    if (value - 1 < 1) {
      setValue(1);
      return;
    }
    setValue(value - 1);
  }, [value]);

  const change = useCallback((props: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(props.target.value);
    if (value < 1 || isNaN(value)) {
      setValue(1);
      return;
    }
    if (value > 10) {
      setValue(10);
      return;
    }
    setValue(value);
  },[])

  const plus = useCallback(() => {
    if (value + 1 > 10) {
      setValue(10);
      return;
    }
    setValue(value + 1);
  }, [value]);

  return (
    <CartButtonsContainer>
      <InputBody>
        <InputButton minus onClick={minus} />
        <NumberInput min={1} 
          value={value} 
          type={'number'} 
          max={10}
          onChange={change} />
        <InputButton plus onClick={plus} />
      </InputBody>
      <AddCartButton>Add to cart</AddCartButton>
    </CartButtonsContainer>
  );
};

export default CartButtons;
