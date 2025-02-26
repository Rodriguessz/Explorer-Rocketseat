import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  
  border-radius: 7px;
  
  > input {
    height: 3.6rem;
    width: 100%;
    font-size: 1rem;
    padding: 0.8rem;
    
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    background: transparent;
    border: 0;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
  
  > svg {
    margin-left: 1rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.GRAY_400};
  }
`;