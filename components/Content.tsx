import { ScrollArea } from '@mantine/core';
import styled from 'styled-components'
import Card from './Card';

const StyledContent = styled.div`
    position: fixed;
    z-index: 2;
    right: .5rem;
    height: calc(100% - 70px - 1rem);
    max-width: calc(100% - 300px);
    width: 100%;

`;

const StyledCardSection = styled.div`
    display: flex;
    row-gap: 1rem;
    column-gap: 1rem;
    flex-wrap: wrap;
`;

const showCards = () => {
    let arr = []

    for (let i = 1; i <= 20; i++) {
        arr.push(
            <Card />
        )
    }

    return arr;
}

const Content = () => {
    return (
        <StyledContent className='main-contents'>
            <ScrollArea
                style={{ height: '100%', overflowX: 'hidden' }}
                offsetScrollbars scrollbarSize={5}
            >
                <StyledCardSection>
                    {
                        showCards()
                    }
                </StyledCardSection>
            </ScrollArea>
        </StyledContent>
    )
}

export default Content