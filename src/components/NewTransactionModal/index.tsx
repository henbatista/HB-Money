import Modal from 'react-modal';
import incomeImg from '../../assets/up.svg';
import outcomeImg from '../../assets/down.svg';
import closeImg from "../../assets/close.svg";
import { Container, TransactionTypeContainer, RadioBox } from './syles';
import { FormEvent, useState } from 'react';
import { api } from '../../services/api';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    const[title, setTitle] = useState('');
    const[value, setValue] = useState(0);
    const[category, setCategory] = useState('')
    const [type,setType] = useState('deposit');

    function handleCreateNewTransaction(event: FormEvent){
        event.preventDefault();
    }

    const data = {
        title, 
        value, 
        category, 
        type,
    };

    api.post('/trasaction', data)

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            style={{
                overlay: {
                    background: 'rgba(0,0,0, 0.5)',

                    position: 'fixed',
                    top: '0',
                    bottom: '0',
                    right: '0',
                    left: '0',

                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',

                },
                content: {
                    width: '100%',
                    maxWidth: '576px',
                    background: 'var(--background)',
                    padding: '3rem',
                    position: 'relative',
                    borderRadius: '0.25rem',

                }
            }}

        >
            <Container onSubmit={handleCreateNewTransaction}> 

                <button type="button" onClick={onRequestClose} >
                    <img src={closeImg} alt="Fechar modal" className='closed'

                        style={{
                            maxWidth: '5%',
                            position: 'absolute',
                            right: ' 1.5rem',
                            top: '1.5rem',
                            border: '0',
                            background: 'transparent',
                        }
                        }
                    />
                </button>

                <h2>Cadastrar transação</h2>

                <input 
                placeholder="Título" 
                value={title} 
                onChange={event => setTitle(event.target.value)} 
                />

                <input 
                type="number" 
                placeholder="Valor" 
                value={value}
                onChange={event => setValue(Number(event.target.value))}
                />

                <TransactionTypeContainer>
                    <RadioBox type="button"
                    //className={type === 'deposit' ? 'active' : ''}
                    onClick={() => {setType('deposit'); }}
                    isActive={type === 'deposit'}
                    activeColor="green"
                    >
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox type="button"
                    onClick={() => {setType('withdraw'); }}
                    isActive={type === 'withdraw'}
                    activeColor="red"
                    >
                        <img src={outcomeImg} alt="Saída" />
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input 
                placeholder="Categoria" 
                value={category}
                onChange={event => setCategory(event.target.value)}
                />

                <button type="submit"> Cadastrar </button>
            </Container>
        </Modal>


    );


}