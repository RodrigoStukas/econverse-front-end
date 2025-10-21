import { useState } from 'react';
import Header from '../components/Header';
import Modal from '../components/Modal';
import Categorias from '../components/Categorias';
import Vitrine from '../components/Vitrine';
import VitrineSecundary from '../components/VitrineSecundary';
import Banner from '../components/BannerSection';
import Footer from '../components/Footer';

import '../styles/Index.scss';

// Tipo do produto (se já estiver definido em outro lugar, pode importar)
type Produto = {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
};

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [produtoSelecionado, setProdutoSelecionado] = useState<Produto | null>(null);

  // Exemplo: botão "Ver produto" abre um produto genérico
  const handleProductClick = () => {
    setProdutoSelecionado({
      productName: 'IPHONE 13 MINI',
      descriptionShort: 'IPHONE 13 MINI',
      photo: 'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png',
      price: 9999,
    });
    setModalOpen(true);
  };

  return (
    <>
      <Header />

      <main>
        {/* Banner Promocional */}
        <section className="promo-banner">
          <div className="conteudo">
            <h2>Venha conhecer nossas <br />promoções</h2>
            <h3><strong>50% Off</strong> nos produtos</h3>
            <button className="ver-produto" onClick={handleProductClick}>
              Ver produto
            </button>
          </div>
        </section>

        {/* Categorias de Compra */}
        <section className="compra-categorias">
          <Categorias />
        </section>

        {/* Vitrine Principal */}
        <section className="vitrine-wrapper">
          <Vitrine />
        </section>

        {/* Banners de Parceiros */}
        <section className="banners">
          <Banner
            title="Parceiros"
            description="Lorem ipsum dolor sit amet, consectetur"
            image="/assets/img/banner1.jpg"
          />
          <Banner
            title="Parceiros"
            description="Lorem ipsum dolor sit amet, consectetur"
            image="/assets/img/banner2.jpg"
          />
        </section>

        {/* Vitrine Secundária */}
        <section className="vitrine-wrapper">
          <VitrineSecundary />
        </section>

        {/* Repetição de Banners */}
        <section className="banners">
          <Banner
            title="Parceiros"
            description="Lorem ipsum dolor sit amet, consectetur"
            image="/assets/img/banner1.jpg"
          />
          <Banner
            title="Parceiros"
            description="Lorem ipsum dolor sit amet, consectetur"
            image="/assets/img/banner2.jpg"
          />
        </section>

        {/* Marcas */}
        <section className="marcas-wrapper">
          <h2 className="marcas-title">Navegue por marcas</h2>
          <div className="marcas-grid">
            {[...Array(5)].map((_, index) => (
              <div className="marca-item" key={index}>
                <img src="/assets/img-frame/Frame.png" alt="Marca" />
              </div>
            ))}
          </div>
        </section>

        {/* Vitrine Secundária Repetida */}
        <section className="vitrine-wrapper">
          <VitrineSecundary />
        </section>

        {/* Newsletter */}
        <section className="newsletter-wrapper">
          <div className="newsletter-content">
            <div className="newsletter-left">
              <h2>Inscreva-se na nossa newsletter</h2>
              <p>Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.</p>
            </div>
            <div className="newsletter-right">
              <form className="newsletter-form">
                <input type="text" placeholder="Digite seu nome" />
                <input type="email" placeholder="Digite seu e-mail" />
                <button type="submit">INSCREVER</button>
              </form>
              <label className="newsletter-termos">
                <input type="checkbox" />
                Aceito os termos e condições
              </label>
            </div>
          </div>
        </section>
      </main>

      {/* Rodapé */}
      <footer>
        <Footer />
      </footer>

      {/* Modal de Produto */}
      {modalOpen && produtoSelecionado && (
        <Modal produto={produtoSelecionado} onClose={() => setModalOpen(false)} />
      )}
    </>
  );
};

export default Home;
