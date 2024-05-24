import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.css"
export default function Header(){
    return(
        <header className={styles.cabecalho}>
            
            <nav>
                <ul>
                    <Link href="/">
                    <li>Home</li>
                    </Link>
                </ul>
            </nav>
        </header>
    );
}