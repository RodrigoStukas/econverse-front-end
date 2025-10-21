import React, { useState } from 'react';
import '../styles/Index.scss';

type CategoriaProps = {
  nome: string;
  iconDefault: string;
  iconHover: string;
};

const CategoriaCard = ({ nome, iconDefault, iconHover }: CategoriaProps) => {
  const [hovered, setHovered] = useState(false);

  return (
<div className="categoria-card">
  <div
    className="icone-wrapper"
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}
  >
    <img src={hovered ? iconHover : iconDefault} alt={nome} />
  </div>
  <span className="categoria-nome">{nome}</span>
</div>
  );
};

const Categorias = () => {
  const categorias = [
    {
      nome: 'Tecnologia',
      iconDefault: '/assets/categorias-img/tecnologia.png',
      iconHover: '/assets/categorias-img/tecnologia-colorida.png',
    },
    {
      nome: 'Supermercado',
      iconDefault: '/assets/categorias-img/supermercados 1.png',
      iconHover: '/assets/categorias-img/supermercados 1-colorida.png',
    },
    {
      nome: 'Bebidas',
      iconDefault: '/assets/categorias-img/whiskey.png',
      iconHover: '/assets/categorias-img/whiskey-colorida.png',
    },
    {
      nome: 'Ferramentas',
      iconDefault: '/assets/categorias-img/ferramentas 1.png',
      iconHover: '/assets/categorias-img/ferramentas 1-colorida.png',
    },
    {
      nome: 'Saúde',
      iconDefault: '/assets/categorias-img/cuidados-de-saude 1.png',
      iconHover: '/assets/categorias-img/Saúde 1-colorida.png',
    },
    {
      nome: 'Esportes e Fitness',
      iconDefault: '/assets/categorias-img/corrida 1.png',
      iconHover: '/assets/categorias-img/corrida 1-colorida.png',
    },
    {
      nome: 'Moda',
      iconDefault: '/assets/categorias-img/moda 1.png',
      iconHover: '/assets/categorias-img/Moda 1-colorida.png',
    },
    // Adicione mais categorias aqui
  ];

  return (
    <section className="categorias-container">
      {categorias.map((cat, i) => (
        <CategoriaCard key={i} {...cat} />
      ))}
    </section>
  );
};

export default Categorias;
