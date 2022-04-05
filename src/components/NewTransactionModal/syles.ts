import styled from 'styled-components';
import { darken, transparentize } from 'polished'; // transparentize 'propriedade para deixar o fundo transparente /pacote de manipulção de cores via javascript "yarn add polished"

export const Container = styled.form`

h2 { 
    color: var(--text-title);
    font-size:1.5rem;
    margin-bottom: 2rem;
}

.closed:hover{
    transition: filter 0.2s;
    filter: brightness(0.9);
}

input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    border: 1px solid #d7d7d7;
    background: #e7e9ee;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder{
        color: var(--text-body);
    }
    
    & + input {
        margin-top: 1rem;
    }
 }


 button[type="submit"]{
     width: 100%;
     padding: 0 1.5rem;
     height: 4rem;
     background: var(--green);
     color: #fff;
     border-radius: 0.25rem;
     border: 0;
     margin-top: 1.5rem;
     transition: filter 0.2s; // para não deixar o botão tão seco ao passar o mouse
     font-weight: 600;

     &:hover {
         filter: brightness(0.9); // deixa a cor mais escura
     }
 }

`;

export const TransactionTypeContainer = styled.div`

margin: 1rem 0;
display: grid;
grid-template-columns: 1fr 1fr; //criação das colulnas
gap: 0.5rem; // espaçamento entre os botões

`;

interface RadioBoxProps {
    isActive: boolean;
    activeColor: 'green' | 'red';
}

const colors = {
    green: '#33cc95',
    red: '#e52e4D'
}

export const RadioBox = styled.button<RadioBoxProps>`
    height: 4rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;

    background: ${(props) => props.isActive 
    ? transparentize(0.9, colors[props.activeColor]) // puxar a cor e deixar transparente
    : 'transparent'
    };

    display: flex;
    align-items: center;
    justify-content: center;


    &:hover{
    border-color: ${darken(0.3, '#6933FF')};
    transition: border-color 0.9s;

    }

    span{
    display: inline-block;
    margin-left: 1rem;
    color: var(--text-title);
    }

    img{
    max-width: 10%;
    }

`;