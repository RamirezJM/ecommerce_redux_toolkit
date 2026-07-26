// App.js

import ProductList from './Components/ProductList';
import ShoppingCart from './Components/ShoppingCart';
import Supercoin from './Components/Supercoins';
import './App.css'
const App = () => {
  return (
 
      <div>
        <h1 className='app-heading'>E-Commerce Application</h1>
        <ProductList />
        <ShoppingCart />
        <Supercoin/>
      </div>

  );
};

export default App;
