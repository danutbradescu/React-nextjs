import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';

import { useStateContext } from '../context/StateContext';
import { runFireworks } from '../lib/utils';

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  
  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Comanda a fost plasata! </h2>
        <p className="email-msg">Pentru a obține informații suplimentare și factura, vă rugăm să verificați adresa dvs. de e-mail.</p>
        <p className="description">
          Pentru intrebari si nelamuriri, 
          <a className="email" href="bradescudanut@gmail.com">
            bradescudanut@gmail.com
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Continua Cumparaturile!
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Success