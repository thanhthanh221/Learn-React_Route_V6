import React from 'react'
import { Link, Outlet,} from 'react-router-dom'
import { Invoice } from '../data/invoices'
import '../App.css';

const Invoices = () => {

  return (
    <main>
        <h2>invoices</h2>
        <div style={{display: 'flex', borderRight: '1px solid' }}>
          <nav>
            {
              Invoice.map((invoce) => (
                <Link 
                  style={{display: 'block', margin: '1rem'}} 
                  to={`/invoices/${invoce.id}`} 
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