import styles from '../../styles/Card.module.scss'
import { Container, Row, Col, Card } from 'react-bootstrap'

export default function Services() {

    const data = {
        webdesign: {
            Title: "Web Designer",
            icon: "window-line",
            Service: "Developing websites or other multimedia applications. Dealing with Databases and most famous Frameworks like React and PWA"
        },
        graphicdesign: {
            Title: "Graphic Designer",
            icon: "file-chart-2-line",
            Service: "From plan, draft and design media, advertisements, commercials, company logos to websites or complete virtual scenarios."
        },
        youtube: {
            Title: "Youtuber",
            icon: "youtube-line",
            Service: "Creating unique videos for variant social media sources on Graphic Design and Web Design as well as personal marketing"
        },
        seoexpert: {
            Title: "Mentor",
            icon: "building-3-line",
            Service: "Guiding more that half a million followers online writing resumes, finding their skills and talents that are fit for the perfect job"
        },
    }

    const services = Object.keys(data).map((key, index) => {
        return (
            <Col lg={3} key={index}>
                <Card className={styles.cardToast}>
                    <Card.Body>
                    <i className={`ri-${data[key].icon} ${styles.serviceIcon}`}></i>
                        <Card.Title><b>{data[key].Title}</b></Card.Title>
                        <Card.Text>
                            {data[key].Service}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        )
    });


    return (
        <>
            <section className="d-flex align-items-center">
                <Container>
                    <Row>
                        {services}
                    </Row>
                </Container>
            </section>
        </>
    )
}