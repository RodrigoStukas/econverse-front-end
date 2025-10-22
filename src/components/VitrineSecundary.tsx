import { useState } from 'react';
import Modal from './Modal';
import '../styles/Index.scss';

type Produto = {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
};

const produtos: Produto[] = [
  {
    productName: 'Iphone 11 PRO MAX BRANCO 1',
    descriptionShort: 'Iphone 11 PRO MAX BRANCO 1',
    photo: 'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png',
    price: 15000,
  },
  {
    productName: 'IPHONE 13 MINI 1',
    descriptionShort: 'IPHONE 13 MINI 1',
    photo: 'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png',
    price: 9000,
  },
  {
    productName: 'Iphone 11 PRO MAX BRANCO 2',
    descriptionShort: 'Iphone 11 PRO MAX BRANCO 2',
    photo: 'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png',
    price: 14990,
  },
  {
    productName: 'IPHONE 13 MINI 2',
    descriptionShort: 'IPHONE 13 MINI 2',
    photo: 'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png',
    price: 12000,
  },
  {
    productName: 'Iphone 11 PRO MAX BRANCO 3',
    descriptionShort: 'Iphone 11 PRO MAX BRANCO 3',
    photo: 'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png',
    price: 4550,
  },
  {
    productName: 'IPHONE 13 MINI 3',
    descriptionShort: 'IPHONE 13 MINI 3',
    photo: 'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png',
    price: 38000,
  },
  {
    productName: 'Iphone 11 PRO MAX BRANCO 4',
    descriptionShort: 'Iphone 11 PRO MAX BRANCO 4',
    photo: 'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png',
    price: 42000,
  },
  {
    productName: 'IPHONE 13 MINI 4',
    descriptionShort: 'IPHONE 13 MINI 4',
    photo: 'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png',
    price: 520,
  },
  {
    productName: 'Iphone 11 PRO MAX BRANCO 5',
    descriptionShort: 'Iphone 11 PRO MAX BRANCO 5',
    photo: 'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png',
    price: 149990,
  },
  {
    productName: 'IPHONE 13 MINI 5',
    descriptionShort: 'IPHONE 13 MINI 5',
    photo: 'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png',
    price: 100000,
  },
];

const Vitrine = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [produtoSelecionado, setProdutoSelecionado] = useState<Produto | null>(null);
  const [startIndex, setStartIndex] = useState(0);
  const produtosPorPagina = 4;

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + produtosPorPagina) % produtos.length);
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) =>
      (prevIndex - produtosPorPagina + produtos.length) % produtos.length
    );
  };

  const handleProductClick = (produto: Produto) => {
    setProdutoSelecionado(produto);
    setModalOpen(true);
  };

  const produtosVisiveis = Array.from({ length: produtosPorPagina }).map((_, i) => {
    const index = (startIndex + i) % produtos.length;
    return produtos[index];
  });

  return (
    <>
      <section className="vitrine">
        <div className="vitrine-header">
          <div className="titulo">
            <span className="linha"></span>
            <h2>Produtos relacionados</h2>
          </div>
            <span className="ver-todos">Ver todos</span>
          </div>

        <div className="carrossel">
          <button className="nav prev" onClick={handlePrev}>‹</button>

          <div className="produtos">
            {produtosVisiveis.map((produto, i) => (
              <div className="produto-card" key={i}>
                <div className="card-content">
                  <img src={produto.photo} alt={produto.productName} />
                  <div className="info">
                    <p>{produto.productName}</p>
                    <span>R$ {produto.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                    <small>
                      ou 2x de R$ {(produto.price / 2).toLocaleString('pt-BR', { minimumFractionDigits: 2 })} sem juros
                    </small>
                    <small className="frete">Frete grátis</small>
                  </div>
                </div>
                <div className="card-footer">
                  <button className="comprar" onClick={() => handleProductClick(produto)}>COMPRAR</button>
                </div>
              </div>
            ))}
          </div>

          <button className="nav next" onClick={handleNext}>›</button>
        </div>
      </section>

      {modalOpen && produtoSelecionado && (
        <Modal produto={produtoSelecionado} onClose={() => setModalOpen(false)} />
      )}
    </>
  );
};

export default Vitrine;
