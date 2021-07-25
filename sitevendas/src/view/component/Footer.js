import '../../css/Global.css';
import '../../css/FooterPrincipal.css'

function Footer() {
    return (
        <>
            <footer id="footerPrincipal" className="backgroundCor2 corPadrao4">
                <p>Desenvolvido por <span className="destaqueFooter corPadrao5">Martex84 - <a className="corPadrao5" href="https://github.com/martex84" target="_blank" rel="noreferrer">GitHub <i className="fab fa-github"></i></a></span> </p>
                <p> Imagens Retiradas de <span>Pixabay</span> e <span>Vecteezy</span></p>
            </footer>
            {/* Footer Principal */}
        </>
    );
}

export default Footer;