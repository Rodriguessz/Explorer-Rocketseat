import styled from "styled-components";
import {DEVICE_BREAKPOINTS} from "../../styles/deviceBreakPoints";


export const Container = styled.section`
  padding: 2rem;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > h1 {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.RED_200};
    display: flex;
    align-items: center;
    gap: 7px;
  }

  > small {
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }
`;

export const Tasks = styled.div`
  border: 1px dashed  ${({ theme }) => theme.COLORS.RED_200};
  min-height: 154px;
  border-radius: 7px;
  margin-top: 1rem;

  display: flex;
  gap: 1rem;
  padding: 1.6rem;
  flex-wrap: wrap;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
    justify-content: center;
    align-items: center;
  }
`;