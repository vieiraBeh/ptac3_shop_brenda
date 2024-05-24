import Link from "next/link";
import Image from "next/image";

export default function Header(){
    return(
        <header className={styles.cabecalho}>
            <Image 
            width={100}
            height={100}
            src={"#"}
            />
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