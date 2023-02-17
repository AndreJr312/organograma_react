import './Footer.css'

const Footer = () => {
    return (
      <footer className="footer">
        <div className="redes">
          <a href='https:/instagram.com/Andreejr18'>
            <img src="./images/ig.png" alt="Imagem Instagram" />
          </a>
          <img src="./images/fb.png" alt="Imagem Facebook" />
          <img src="./images/tw.png" alt="Imagem Twitter" />
        </div>

        <div className="logo">
          <img src="./images/logo.png" alt="Imagem Logo" />
        </div>

        <div className="credito">
          <p>Desenvolvido por André Luis</p>
        </div>
      </footer>
    );
}

export default Footer