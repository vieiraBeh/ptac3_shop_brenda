import styles from "./footer.module.css"
import Image from "next/image";
import Link from "next/link";

export default function Footer(){
    return(
            <footer className={styles.rodape}>
                <ul className={styles.social}>
                    <li>
                        <Link href="/">
            <Image 
            width={25}
            height={25}
            src={"https://cdn-icons-png.freepik.com/256/16566/16566143.png?ga=GA1.1.491756765.1717006945&semt=ais_hybrid"}/>
            </Link></li>
                    <li><Link href="/">
            <Image 
            width={25}
            height={25}
            src={"https://cdn-icons-png.freepik.com/256/2111/2111463.png?ga=GA1.1.491756765.1717006945&semt=ais_hybrid"}/>
            </Link></li>
                    <li><Link href="/">
            <Image 
            width={25}
            height={25}
            src={"https://cdn-icons-png.freepik.com/256/3670/3670151.png?ga=GA1.1.491756765.1717006945&semt=ais_hybrid"}/>
            </Link></li>
                    <li><Link href="/">
            <Image 
            width={25}
            height={25}
            src={"https://cdn-icons-png.freepik.com/256/6422/6422199.png?ga=GA1.1.491756765.1717006945&semt=ais_hybrid"}/>
            </Link></li>
                </ul>

        <div className={styles.propaganda}>
            <Link href="/">
            <Image 
            width={50}
            height={50}
            src={"https://cdn-icons-png.freepik.com/256/131/131602.png?ga=GA1.1.491756765.1717006945&semt=ais_hybrid"}/>
            </Link>

            <p>Copyright by Brenda Vieira <br/>
            17/11/2006</p>
            </div>
        </footer>
    );
}