import Image from 'next/image'
import ListGroupItem from './ListGroupItem'

import styles from '../../styles/Hero.module.scss'
import { Container, Row, Col} from 'react-bootstrap'

import profilePic from '../../public/img/images/nourhomsi-official.png'

export default function Hero() {
    return (
        <>
            <section className={styles.hero + " d-flex align-items-start mt-5"} id="hero">
                <Container >
                    <Row>
                        <Col lg={6} className={styles.heroImg}>
                            <Image src={profilePic} alt="Nour Homsi" className={styles.rounded_35} width={550} height={550} />
                        </Col>
                        <Col lg={6} className="d-flex align-items-end">
                            <Col>
                            <h1 className={styles.mainTitle + " my-3"}>
                                Web & Graphic Designer</h1>
                            <h2 className={styles.mainTitle_Sub} role='textbox' aria-multiline='true'>With more than 15 years of experience. This is what I do every day, even if I am not before the Computer. I live art wherever I find it in a paint, a restaurant menu, a logo or a Website. I create adaptable and responsive websites using simplicity, clarity and functionality where every pixel counts.</h2>
                            <ul className={styles.socialmedia_list}>
                                <ListGroupItem media="Facebook" icon="ri-facebook-box-line" href="https://www.facebook.com/drnourhomsi/" />
                                <ListGroupItem media="Youtube" icon="ri-youtube-line" href="https://www.youtube.com/nourhomsi/" />
                                <ListGroupItem media="Instagram" icon="ri-instagram-line" href="https://www.instagram.com/drnourhomsi" />
                                <ListGroupItem media="Twitter" icon="ri-twitter-line" href="https://www.twitter.com/nourhomsi1" />
                                <ListGroupItem media="Linkedin" icon="ri-linkedin-box-line" href="https://www.linkedin.com/nourhomsi" />
                            </ul>
                            </Col>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}