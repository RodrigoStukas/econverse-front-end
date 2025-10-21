import React from 'react';
import '../styles/Index.scss';
import logo from '../assets/img/econverse-footer.png';
import instagram from '../assets/icons/instagram.png';
import facebook from '../assets/icons/facebook.png';
import linkedin from '../assets/icons/linkedin.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img src={logo} alt="Econverse" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="social-icons">
            <img src={instagram} alt="Instagram" />
            <img src={facebook} alt="Facebook" />
            <img src={linkedin} alt="LinkedIn" />
          </div>
        </div>

        <div className="divider" />

        <div className="footer-links">
          <ul>
            <h4>Institucional</h4>
            <li>Sobre Nós</li>
            <li>Movimento</li>
            <li>Trabalhe conosco</li>
          </ul>
          <ul>
            <h4>Ajuda</h4>
            <li>Suporte</li>
            <li>Fale Conosco</li>
            <li>Perguntas Frequentes</li>
          </ul>
          <ul>
            <h4>Termos</h4>
            <li>Termos e Condições</li>
            <li>Política de Privacidade</li>
            <li>Trocas e Devoluções</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </footer>
  );
};

export default Footer;
