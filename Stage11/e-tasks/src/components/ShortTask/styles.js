import styled from 'styled-components';

export const Container = styled.button`
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  height: 2.8rem;
  border: 0;
  padding: 0 1rem;
  border-radius: 7px;
  font-size: 1rem;
  
  display: flex;
  align-items: center;
  gap: 7px;

  > svg {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.COLORS.RED_200};
  }
`;