import styled from "styled-components";

export const Container = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr); //criar colunas com tamanhos iguais
gap: 2rem;
margin-top: -5rem;

div { 
    background: var(--shape);
    padding: 1.5rem;
    border-radius: 0.25rem;
    color: var(--text-title);

    header{ 
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    strong {
        display: block;
        margin-top: 1rem;
        font-size: 2rem;
        font-weight: 500;
        line-height: 3rem;
    }

    &.highlight-background {
        background: var(--green);
        color: #fff;
    }
}
`;