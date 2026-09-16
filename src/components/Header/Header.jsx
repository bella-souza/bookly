import React from 'react';
import './Header.css';
import Logo from "../../assets/logo.png"

// Componente funcional simples para o cabeçalho da aplicação
function Header() {
  return (
    <header className="header">
      {/* Nome da e-commerce fictícia */}
      <h1 className="header-title">Bookly</h1>
      <img src={Logo} alt= "logo da minha empresa, representada por um carrinho de compras" />
    </header>
  );
}



export default Header;
