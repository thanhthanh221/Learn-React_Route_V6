import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {Invoice} from '../data/invoices';

const InvoicesValue = () => {
    const params = useParams(); // params là String;
    const invoicehash = Invoice.find(invoce => invoce.id.toString() === params.invoicesId);

    const navigate = useNavigate(); 

    useEffect(() => { 
      // Nếu không có giá trị thì đẩy về trang chủ luôn

      if(!invoicehash) { // nếu cái kia không có
        navigate('..'); // lùi về 1 cấp
      } 
    },[invoicehash]); // nó chỉ gọi khi mà invoicehash thay đổi
  return (
    <h2 style={{padding: '1rem'}}>
      {
        invoicehash ?
        `${invoicehash?.id} - ${invoicehash?.name}` : "Không có giá trị"
      }
        

        
    </h2>
  )
}

export default InvoicesValue