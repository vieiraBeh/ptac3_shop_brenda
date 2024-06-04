import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.css"

export default function Header(){
    return(
        <header className={styles.cabecalho}>
                <Link href="/">
                    <Image
                        width={70}
                        height={70}
                        src={"https://cdn-icons-png.freepik.com/256/131/131602.png?ga=GA1.1.491756765.1717006945&semt=ais_hybrid"}/>
                </Link>
                <nav>
                    <ul>
                    <li>Não deixe para amanhã o que você pode comprar hoje!
                    <br/>
                    <br/>
                   <Link href="/">
                    <Image
                        width={50}
                        height={50}
                        src={"https://cdn-icons-png.freepik.com/256/7914/7914989.png?ga=GA1.1.491756765.1717006945&semt=ais_hybrid"}/>
                </Link>
                  <button>ADD</button>
                  </li>
                  </ul>
            </nav>
        </header>
    );
}