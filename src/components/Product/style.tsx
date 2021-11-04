import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: normal;
  
  
  margin: 2%;
  padding: 3rem 2rem;
  background: white;

  border-radius: 1rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: 600px) {
    margin: 0;
    padding: 0;
    transition: .5s;
  }
  transition: .5s;
`;
