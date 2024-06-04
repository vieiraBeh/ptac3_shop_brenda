import styles from "./footer.module.css"
import Image from "next/image";
import Link from "next/link";

export default function Footer(){
    return(
            <footer className={styles.rodape}>
            <Link href="https://ead.ifms.edu.br/">
            <Image 
            width={120}
            height={100}
            src={"https://ead.ifms.edu.br/theme/moove/pix/moodle-logo-white.png"}
            />
            </Link>
        </footer>
    )
}