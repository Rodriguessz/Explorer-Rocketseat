import  styled from 'styled-components'

export const Container = styled.span`

    font-size: 1.2rem; 
    font-family: 'Roboto', serif;
    padding: 0.5rem 1.4rem;

    border-radius: .5rem;

    margin-right: 6px;

    color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    background-color: ${({theme}) => theme.COLORS.ORANGE};


`