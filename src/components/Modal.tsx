import { useState } from 'react';
import '../styles/Index.scss';

type Produto = {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
};

type Props = {
  produto: Produto;
  onClose: () => void;
};

const Modal = ({ produto, onClose }: Props) => {
  const [quantidade, setQuantidade] = useState(1);

  const aumentar = () => setQuantidade((q) => q + 1);
  const diminuir = () => setQuantidade((q) => (q > 1 ? q - 1 : 1));

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="fechar" onClick={onClose}>&times;</span>

        <div className="modal-body">
         
          <div className="modal-imagem">
            <img src={produto.photo} alt={produto.productName} />
          </div>

          
          <div className="modal-info">
            <h2>{produto.productName}</h2>
            <p className="preco">R$ {produto.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
            <p className="descricao">
              Many desktop publishing packages and web page editors now many desktop publishing.
            </p>
            <p className="detalhes">Veja mais detalhes do produto &gt;</p>

            <div className="modal-actions">
              <div className="quantidade">
                <button onClick={diminuir} className='diminuir'>-</button>
                <span>{quantidade.toString().padStart(2, '0')}</span>
                <button onClick={aumentar} className='aumentar'>+</button>
              </div>
              <button className="comprar-modal">COMPRAR</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
