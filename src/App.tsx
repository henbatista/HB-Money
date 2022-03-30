import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";

import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal'
import { useState } from "react";

Modal.setAppElement('#root');

export function App(): JSX.Element{
  
    // criação do modal
    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

    //abrir modal
    function handleOpenNewTransactionModal(){
        setIsNewTransactionModalOpen(true);
    }

    //fechar modal
    function handleCloseNewTransactionModal(){
        setIsNewTransactionModalOpen(false);
    }
    return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard/>
      <NewTransactionModal
      isOpen={isNewTransactionModalOpen}
      onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </>
  );
}