import styles from "./footer.module.css"
import Image from "next/image";
import Link from "next/link";

export default function Footer(){
    return(
            <footer className={styles.rodape}>
            <Link href="#">
            <Image 
            width={120}
            height={100}
            src={"#"}
            />
            </Link>
        </footer>
    )
}