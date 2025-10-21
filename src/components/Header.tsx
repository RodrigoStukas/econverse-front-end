// src/components/Header.tsx
import '../styles/Index.scss';
import coroaIcon from '../assets/icons/Coroa.png';
import lupaIcon from '../assets/icons/MagnifyingGlass.png';
import logo from '../assets/img/Logo.png';
import heartIcon from '../assets/icons/Heart.png';
import cartIcon from '../assets/icons/ShoppingCart.png';
import userIcon from '../assets/icons/UserCircle.png';
import groupIcon from '../assets/icons/Group.png';
import checkIcon from '../assets/icons/ShieldCheck.png'
import truckIcon from '../assets/icons/Truck.png'
import parcelIcon from '../assets/icons/CreditCard.png'


const Header = () => {
  return (
    <header className="header">
      <div className="top-bar">
        <ul>
          <li>
            <img src={checkIcon} alt="Segurança" />
            <span>Compra<strong> 100% segura</strong></span>
          </li>
          <li>
            <img src={truckIcon} alt="Frete grátis" />
            <span><strong>Frete grátis</strong> acima de R$ 200</span>
          </li>
          <li>
            <img src={parcelIcon} alt="Parcelamento" />
            <span><strong>Parcele</strong> suas compras</span>
          </li>
      </ul>
  </div>



      <div className="main-header">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        <form className="search-bar">
          <input type="text" placeholder="O que você está buscando?" />
          <img src={lupaIcon} alt="Buscar" className="icon-lupa" />
        </form>

        <div className="icons">
          <button className="icon">
            <img src={groupIcon} alt="Grupo" />
          </button>
          <button className="icon">
            <img src={heartIcon} alt="Favoritos" />
          </button>
          <button className="icon">
            <img src={cartIcon} alt="Carrinho" />
          </button>
          <button className="icon">
            <img src={userIcon} alt="Perfil" />
          </button>
        </div>
      </div> 

      <nav className="nav-menu">
        <ul>
          <li>TODAS CATEGORIAS</li>
          <li>SUPERMERCADO</li>
          <li>LIVROS</li>
          <li>MODA</li>
          <li>LANÇAMENTOS</li>
          <li>OFERTAS DO DIA</li>
          <li className="assinatura">
            <img src={coroaIcon} alt="Coroa" className="icon" />
            ASSINATURA
          </li>
        </ul>
      </nav>
    </header>
  );
};


export default Header;
