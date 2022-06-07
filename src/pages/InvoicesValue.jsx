import React from 'react'
import { useParams } from 'react-router-dom'
import Invoice from '../data/invoices';

const InvoicesValue = () => {
    const params = useParams(); // params là String;
    const invoicehash = Invoice.find(invoce => invoce.id.toString() === params.invoicesId);
  return (
    <h2 style={{padding: '1rem'}}>
        {invoicehash?.id} - {invoicehash?.name}
    </h2>
  )
}

export default InvoicesValue