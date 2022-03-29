import styled from "styled-components";

export const Container = styled.div`
margin-top: 4rem;

table {
    width: 100%; // preenchimento do total da tela
    border-spacing: 0 0.7rem; // fazer espaçamento dos itens na tabela

    th { 
        color: var(--text-body);
        font-weight: 400;
        padding: 1rem 2rem; //margin nas laterais
        text-align: left;
        line-height: 1.5rem; //destanciamento
    }

    td {
        padding: 1rem 2rem;
        border: 0;
        background: var(--shape);
        color: var(--text-body);
        border-radius: 0.25rem;

        &:first-child {
        color: var(--text-title);
        }

        &.deposit {
            color: var(--green);
        }

        &.withdraw {
            color: var(--red);
        }

    }
}
`;