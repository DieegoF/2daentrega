import React, { useState} from 'react';
import {Sidebar, Header} from '../src/Componentes'
import { useFetch } from './hooks/useFetch';
import { Link } from 'react-router-dom';
import { URL_BASE, URL_ENDPOINTS } from '../src/constant/service';
import Router from '../src/router';
import '../src/index.css';
import { CartProvider } from '../src/context';
import { PRODUCTS } from './constant/data/products';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const { data: user, error, loading } = useFetch(`${URL_BASE}${URL_ENDPOINTS.USERS}`);

  const onHandlerCart = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="container">
      <CartProvider>
      <Sidebar onClose={onHandlerCart} isOpen={isOpen} />
      <Header onHandlerCart={onHandlerCart} user={user[0]} />
      
      <Router />
 
      </CartProvider>
    </div>
  )
}

export default App;