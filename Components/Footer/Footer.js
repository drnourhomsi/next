import { Container, Row, Col } from 'react-bootstrap'
/* import Link from 'next/Link'; */

import styles from '../../styles/Footer.module.scss'

export default function Footer() {
    return (
        <>
            <footer className={styles.footer}>
            <Container className="d-flex justify-content-between">
                
                    
                        <Col>
                            <span className="strong">All copyrights are reserved</span>
                        </Col>
                        <Col className="d-flex justify-content-end">
                            {/* <Link href="/impressum.php"><a className="px-2">Privacy</a></Link>
                            <Link href="/datenschutz.php"><a className="px-2">Imprint</a></Link> */}
                        </Col>
                    
                
            </Container>
            </footer>

        </>
    )
}