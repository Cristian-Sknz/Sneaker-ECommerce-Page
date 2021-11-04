import classNames from 'classnames';
import React from 'react';
import styled from 'styled-components';

export const Previewer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 0;
  transition: .5s;

  @media screen and (min-width: 968px) {
    margin-right: 3rem;
    transition: .5s;
  }
`;

export const MainImage = styled.div`
  background-size: cover;
  background-position: center;

  max-width: 450px;
  max-height: 450px;
  width: 45vw;
  height: 45vw;
  border-radius: 1rem;
  cursor: zoom-in;

  @media screen and (max-width: 768px) {
    width: 100vw;
    height: 80vw;
    transition: 1s;
  }

  @media screen and (max-width: 600px) {
    max-width: 600px;
    max-height: 480px;
    border-radius: 0;
    width: 100vw;
    height: 80vw;
    transition: .5s;
  }
  
  transition: 1s;
`;

export const PreviewList = styled.ul`
  display: none;
  margin: 1.5rem;
  transition: display 2s;

  @media screen and (min-width: 768px) {
    display: flex;
    transition: display 2s;
  }
`;

export const PreviewImageStyled = styled.li`
  & img {
    max-width: 88px;
    width: 9vw;
    margin: 0 0.7rem;
    border-radius: 1rem;
    background-color: white;
    transition: filter 0.2s;
    cursor: pointer;
  }

  & img:hover {
    filter: opacity(0.5);
    transition: filter 0.2s;
  }

  &.active img {
    border: 2px solid ${({ theme }) => theme.colors.primary};
  }
`;

type PreviewImageProps = {
  itemID: number;
  src: string;
  alt?: string;
  active?: boolean;
  onClick: (e: number) => void;
};

export const PreviewImage : React.FC<PreviewImageProps> = (props: PreviewImageProps) => {
  const onClickEvent = () => {
    props.onClick(props.itemID);
  };

  const className = classNames({ 
    active: props.active 
  })

  return (
    <PreviewImageStyled
      className={className}
      onClick={onClickEvent}
      itemID={`${props.itemID}`}
    >
      <img src={props.src} alt={props.alt} />
    </PreviewImageStyled>
  );
};
