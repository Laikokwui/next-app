import { FooterContainer, FooterLink, FooterLogo } from "./footer.style";
import styles from '../../styles/Home.module.css';
import Image from 'next/image'

export default function Footer() {
    return <FooterContainer>
        <FooterLink
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
        >
            Powered by{' '}
            <FooterLogo className={styles.logo}>
                <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </FooterLogo>
        </FooterLink>
    </FooterContainer>;
}