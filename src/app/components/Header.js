import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.css"

export default function Header(){
    return(
        <header className={styles.cabecalho}>
                <Link href="/">
                    <Image className={styles.imagem}
                        width={70}
                        height={70}
                        src={"https://cdn-icons-png.freepik.com/256/131/131602.png?ga=GA1.1.491756765.1717006945&semt=ais_hybrid"}/>
                </Link>
                <nav>
                    <ul className={styles.lista}>
                    <li className={styles.frase}>Não deixe para amanhã o que você pode comprar hoje!</li>
                    <li>
                   <Link href="/">
                    <Image className={styles.imagem}
                        width={25}
                        height={25}
                        src={"https://cdn-icons-png.freepik.com/256/7914/7914989.png?ga=GA1.1.491756765.1717006945&semt=ais_hybrid"}/>
                </Link>
                  <button className={styles.button}>ADD</button>
                  </li>
                  </ul>
            </nav>
        </header>
    );
}