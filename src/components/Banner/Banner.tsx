import styles from "../Banner/Banner.module.scss";

const Banner = () => {
    return (
        <section className={styles.banner}>
            <div className={styles.conteudo}>
                <h1>Venha conhecer nossas promoções</h1>
                <p>
                    <strong>50% off</strong> nos produtos
                </p>
                <a href="/produtos">Ver produto</a>
            </div>
        </section>
    );
}

export default Banner;
