import Verificado from "../../assets/images/verificado.svg";
import Caminhao from "../../assets/images/caminhao.svg";
import Cartao from "../../assets/images/cartao.svg";

import styles from "../HeaderTopo/HeaderTopo.module.scss";

const HeaderTopo = () => {
    return (
        <section className={styles.topo}>
            <ul>
                <li>
                    <img
                        src={Verificado}
                        alt="Icone de Verificado"
                    />
                    <span>
                        Compra <strong>100% segura</strong>
                    </span>
                </li>
                <li>
                    <img
                        src={Caminhao}
                        alt="Icone de Caminhão"
                    />
                    <span>
                        <strong>Frete grátis</strong> acima de R$ 200
                    </span>
                </li>
                <li>
                    <img
                        src={Cartao}
                        alt="Icone de Cartão"
                    />
                    <span>
                        <strong>Parcele</strong> suas compras
                    </span>
                </li>
            </ul>
        </section>
    );
}

export default HeaderTopo;
