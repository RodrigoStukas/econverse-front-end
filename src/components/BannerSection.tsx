import banner from '../assets/img/Banner.png';
import  '../styles/Index.scss';

type BannerProps = {
  title: string;
  description: string;
  image: string;
};

const Banner: React.FC<BannerProps> = ({ title, description }) => {
  return (
    <div className="banner" style={{ backgroundImage: `url(${banner})` }}>
      <div className="banner-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <button>CONFIRA</button>
      </div>
    </div>
  );
};


export default Banner;

