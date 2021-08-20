
import Image from 'next/image'
import { Container, Row, Col} from 'react-bootstrap'

import htmlPic          from '../../public/img/programms/html.png'
import cssPic           from '../../public/img/programms/css.png'
import javascriptPic    from '../../public/img/programms/javascript.png'
import phpPic           from '../../public/img/programms/php-code.png'
import reactPic         from '../../public/img/programms/react.png'
import wordpressPic     from '../../public/img/programms/wordpress.png'


export default function Programms() {
    return (
        <>
            <section className="d-flex align-items-center">
                <Container >
                    <Row>
                        <Col lg={3}></Col>
                        <Col lg={1} md={2} sm={4} className="d-none d-sm-block py-lg-3">
                            <Image src={htmlPic} alt="Nour Homsi" layout="responsive" objectFit="contain" />
                        </Col>
                        <Col lg={1} md={2} sm={4} className="d-none d-sm-block py-lg-3">
                            <Image src={cssPic} alt="Nour Homsi" layout="responsive" objectFit="contain" />
                        </Col>
                        <Col lg={1} md={2} sm={4} className="d-none d-sm-block py-lg-3">
                            <Image src={javascriptPic} alt="Nour Homsi" layout="responsive" objectFit="contain" />
                        </Col>
                        <Col lg={1} md={2} sm={4} className="d-none d-sm-block py-lg-3">
                            <Image src={phpPic} alt="Nour Homsi" layout="responsive" objectFit="contain" />
                        </Col>
                        <Col lg={1} md={2} sm={4} className="d-none d-sm-block py-lg-3">
                            <Image src={reactPic} alt="Nour Homsi" layout="responsive" objectFit="contain" />
                        </Col>
                        <Col lg={1} md={2} sm={4} className="d-none d-sm-block py-lg-3">
                            <Image src={wordpressPic} alt="Nour Homsi" layout="responsive" objectFit="contain" />
                        </Col>
                        <Col lg={3}></Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
