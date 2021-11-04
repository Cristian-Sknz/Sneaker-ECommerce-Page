import styled from 'styled-components';
import { ReactComponent as MinusIcon } from '../../../assets/icon-minus.svg';
import { ReactComponent as PlusIcon } from '../../../assets/icon-plus.svg';
import CIcon from '../../../assets/icon-cart-white.svg';

export const Product = styled.div`
  max-width: 500px;
  margin: 2rem 1rem;

  @media screen and (max-width: 768px) {
    margin: 2rem 0;
  }
`;

export const Container = styled.div`
  max-width: 500px;
  margin: auto 1rem;
`;

export const BrandText = styled.h3`
  font-weight: 700;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.9rem;
`;

export const ProductName = styled.h2`
  font-size: 7.5vw;
  font-weight: 700;
  color: black;
  margin: 1rem 0;

  @media screen and (min-width: 600px) {
    font-size: 2.5rem;
  }
`;

export const ProductSummary = styled.div`
  display: block;
`;

export const ProductDescription = styled.p`
  margin: 2rem 0;
  max-width: 425px;
  line-height: 1.8;
`;

export const ProductCost = styled.div`
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const ProductPromotion = styled.div`
  display: block;
`;

export const ProductPrice = styled.h4`
  font-size: 1.7rem;
  font-weight: 700;
  color: black;
  display: inline-block;
`;

export const ProductPercentOff = styled.span`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};

  vertical-align: text-top;
  padding: 0.1rem 0.4rem;
  margin: 0.8rem;
  font-weight: 700;
`;

export const ProductRealPrice = styled.h5`
  color: ${({ theme }) => theme.colors.grayLight};
  margin: 0.7rem 0;
  font-weight: 700;
`;

export const CartButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0.5rem 0;
  & button {
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    margin: 2.5rem 0;
    transition: 0.5s;
  }
  transition: 0.5s;
`;

export const InputBody = styled.div`
  background: #ebebeb;

  display: flex;
  align-items: stretch;

  width: 100%;
  max-width: 165px;

  justify-content: space-between;

  & * {
    border: none;
    background: transparent;
  }

  @media screen and (max-width: 768px) {
    max-width: none;
  }
`;

export const InputButtonStyled = styled.button`
  padding: 1rem;

  & svg {
    vertical-align: middle;
  }
`;

type InputButtonProp = {
  minus?: boolean;
  plus?: boolean;
  onClick?: (e: any) => void;
};

export const InputButton: React.FC<InputButtonProp> = (props: InputButtonProp) => {
  const icon = props.minus ? (
    <MinusIcon />
  ) : props.plus ? (
    <PlusIcon />
  ) : (
    <MinusIcon />
  );
  return <InputButtonStyled onClick={props.onClick}>{icon}</InputButtonStyled>;
};

export const NumberInput = styled.input`
  width: 100%;
  text-align: center;
  font-size: 1rem;
  font-weight: 700;

  :focus,
  :focus-visible {
    border: none;
    outline: none;
  }
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

export const AddCartButtonStyled = styled.button`
  width: 50%;
  margin: 0 0.5rem;
  padding: 1rem;
  position: relative;

  & {
    background-color: ${({ theme }) => theme.colors.primary};
    border: none;
    border-radius: 0.5rem;
  }

  & span {
    font-weight: bold;
    color: white;
    margin: 0 0.4rem;
    display: none;
  }

  ::before {
    content: url(${CIcon});
    vertical-align: middle;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 1rem 0;

    & span {
      display: inline;
    }
  }

  @media screen and (min-width: 968px) {
    & span {
      display: inline;
    }
  }
`;

export const AddCartButton: React.FC<React.HTMLProps<HTMLButtonElement>> = (
  { children },
  props
) => {
  return (
    <AddCartButtonStyled {...props}>
      <span>{children}</span>
    </AddCartButtonStyled>
  );
};
