import React, { useState } from 'react'
import ModalContainer from 'react-modal-promise'
import {showPaymentMethodDialog} from './components/PaymentMethodDialog';


function App() {
  return (
    <>
      <ModalContainer/>
      <button onClick={() => showPaymentMethodDialog()}>Add Payment Method</button>
    </>
  )
}

export default App
