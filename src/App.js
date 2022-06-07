import logo from './logo.svg';
import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>App đơn giản</h1>
      <nav>
        <Link to='/invoices'>Invoices</Link> | <Link to='/expenses'>Expenses</Link>
      </nav>
      <Outlet /> 
      {/*  đường link con của app */}
    </div>
  );
}

export default App;
