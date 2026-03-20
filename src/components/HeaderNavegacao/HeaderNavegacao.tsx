import Coroa from "../../assets/images/coroa.svg";

import styles from "../HeaderNavegacao/HeaderNavegacao.module.scss";

const HeaderNavegacao = () => {
    return (
        <nav className={styles.navegacao}>
            <ul>
                <li>
                    <button type="submit">Todas categorias</button>
                </li>
                <li>
                    <a href="/supermercados">Supermercados</a>
                </li>
                <li>
                    <a href="/livros">Livros</a>
                </li>
                <li>
                    <a href="/moda">Moda</a>
                </li>
                <li>
                    <a href="/lancamentos">Lançamentos</a>
                </li>
                <li>
                    <a href="/ofertas">
                        <strong>Ofertas do dia</strong>
                    </a>
                </li>
                <li>
                    <a
                        href="/assinatura"
                        className={styles.assinatura}
                    >
                        <img src={Coroa} alt="Icone de Coroa" />
                        <span>Assinatura</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default HeaderNavegacao;
