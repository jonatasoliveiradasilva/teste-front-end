import Logo from "../../assets/images/logo.svg";
import Lupa from "../../assets/images/lupa.svg";
import Caixa from "../../assets/images/caixa.svg";
import Coracao from "../../assets/images/coracao.svg";
import Usuario from "../../assets/images/usuario.svg";
import Carrinho from "../../assets/images/carrinho.svg";

import styles from "../HeaderPrincipal/HeaderPrincipal.module.scss";

const HeaderPrincipal = () => {
  return (
    <section className={styles.principal}>
      <a href="/" aria-label="Página Inicial">
        <img src={Logo} alt="Logo Econverse" />
      </a>
      <form role="search">
        <input
          type="text"
          id="buscar"
          placeholder="O que você está buscando?"
        />
        <button type="submit" aria-label="Buscar">
          <img
            src={Lupa}
            alt="Icone de Lupa"
          />
        </button>
      </form>
      <nav aria-label="Ações do usuário">
        <ul>
          <li>
            <a href="/pedidos" aria-label="Pedidos">
              <img src={Caixa} alt="Icone de Caixa" />
            </a>
          </li>
          <li>
            <a href="/favoritos" aria-label="Favoritos">
              <img src={Coracao} alt="Icone de Coração" />
            </a>
          </li>
          <li>
            <a href="/conta" aria-label="Minha conta">
              <img src={Usuario} alt="Icone de Usuário(a)" />
            </a>
          </li>
          <li>
            <a href="/carrinho" aria-label="Carrinho">
              <img src={Carrinho} alt="icone de Carrinho" />
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default HeaderPrincipal;
