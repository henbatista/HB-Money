import Modal from 'react-modal';
import incomeImg from '../../assets/up.svg';
import outcomeImg from '../../assets/down.svg';
import closeImg from "../../assets/close.svg";
import { Container, TransactionTypeContainer } from './syles';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
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
            <Container>

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

                <input placeholder="Título" />

                <input type="number" placeholder="Valor" />

                <TransactionTypeContainer>
                    <button type="button">
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </button>
                    <button type="button">
                        <img src={outcomeImg} alt="Saída" />
                        <span>Saída</span>
                    </button>
                </TransactionTypeContainer>

                <input placeholder="Categoria" />

                <button type="submit"> Cadastrar </button>
            </Container>
        </Modal>


    );


}