import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Invoices from './pages/Invoices';
import Expensess from './pages/Expenses';
import NotFound from './pages/NotFound';
import InvoicesValue from './pages/InvoicesValue';
import NewInvoice from './pages/NewInvoice';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path= '/' element = {<App />} > 
          <Route path='invoices' element = {<Invoices />}>
            <Route index element = {<h2 style={{padding: '1rem'}}>Index</h2>} />
            <Route path=':invoicesId' element = {<InvoicesValue />} />
            <Route path='new' element= {<NewInvoice />} />
            {/* thêm 1 biến Id vào đuôi */}
          </Route>
          <Route path = 'expenses' element = {<Expensess />} />
          {/* Không đường dẫn {đường dẫn chung} */}
          <Route path='*' element = {<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
