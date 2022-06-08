import React from 'react'
import { Link, Outlet,} from 'react-router-dom'
import { Invoice } from '../data/invoices'
import '../App.css';

const Invoices = () => {

  return (
    <main>
        <h2>invoices</h2>
        <Link to={'new'}>Tạo Mới</Link>
        <div style={{display: 'flex', borderTop: '0px' }}>
          <nav>
            {
              Invoice.map((invoce) => (
                <Link 
                  style={{display: 'block', margin: '1rem'}} 
                  to={invoce.id.toString()} 
                  key= {invoce.id}
                  >
                    {invoce.name}
                </Link>
              ))
            }
          </nav>
            <Outlet />
        </div>
    </main>
  )
}

export default Invoices