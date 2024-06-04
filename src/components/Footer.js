import styles from "./footer.module.css"
import Image from "next/image";
import Link from "next/link";

export default function Footer(){
    return(
            <footer className={styles.rodape}>
            <Link href="/">
            <Image 
            width={120}
            height={100}
            src={"https://cdn-icons-png.freepik.com/256/131/131602.png?ga=GA1.1.491756765.1717006945&semt=ais_hybrid"}/>
            </Link>
        </footer>
    );
}