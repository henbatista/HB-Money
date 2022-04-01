import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{ // variaveis de cor
 --background: #f0f2f5;
 --red: #E52E4D;
 --blue: #5429CC ;
 --green: #33CC95;

 --blue-light: #6933FF;
 
 --text-title: #363F5F;
 --text-body: #969CB3;
 
 --background: #F0F2F5;
 --shape: #FFFFFF ;
}

// estilo global

* { 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html { 
    @media (max-width: 1080px) {
        font-size: 93.75%; //15px
    }
    
    @media (max-width: 720px){
        font-size: 87.5; // 14px
    }
}

body { 
    background: var(--background); // usada a variavel de cor
    -webkit-font-smoothing: antialiased; //deixa as fontes mais nitidas
}

//fonte
body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
}

button { 
    cursor: pointer;
}

[disabled]{ // para deixar padrão em toda a plicação
    opacity: 0.6;
    cursor: not-allowed; // dexar como a aviso de não abilitado
}

// modal styled

.react-modal-overlay {
    background: rgba(0, 0, 0, 0.5); // deixar opaco

    position: fixed; // tela toda
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
}

.react-modal-content {
    width: 100%;
    max-width:576px;
    background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
}

`