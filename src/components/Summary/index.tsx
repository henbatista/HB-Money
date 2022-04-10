import React, {useContext} from 'react';

import incomeImg from '../../assets/up.svg'
import outconeImg from '../../assets/down.svg'
import totalImg from '../../assets/total.svg'



import { Container } from "./styles";
import { TransactionsContext } from '../../TransactionsContext';

export function Summary(){

    const transactions = useContext(TransactionsContext);

    return (
        <Container>



            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="" className='img'/>
                </header>
                <strong>R$1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outconeImg} alt="" />
                </header>
                <strong>- R$500,00</strong>
            </div>
            <div className='highlight-background'>
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="" className='img' />
                </header>
                <strong>R$1000,00</strong>
            </div>
        </Container>
        );
}