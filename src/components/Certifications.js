import { Container, Row, Col } from "react-bootstrap";
import cert1 from "../assets/img/Certificates/AI-Infosys-certificate.jpeg";
import cert2 from "../assets/img/Certificates/Google Hackathon.jpeg";
import cert3 from "../assets/img/Certificates/UDemy - Complete guide in HTML, CSS and JAVASCRIPT.png";
import cert4 from "../assets/img/Certificates/aws certificate.png";
import cert5 from "../assets/img/Certificates/hackathon winning certificate.png";
import cert6 from "../assets/img/Certificates/python training certificate.png";

const certifications = [
    {
        title: "Hackathon Winner",
        issuer: "Tech Event",
        imgUrl: cert5,
    },
    {
        title: "Google Hackathon",
        issuer: "Google",
        imgUrl: cert2,
    },
    {
        title: "AWS Certification",
        issuer: "Amazon Web Services",
        imgUrl: cert4,
    },
    {
        title: "AI Certification",
        issuer: "Infosys",
        imgUrl: cert1,
    },
    {
        title: "Python Training",
        issuer: "Institution",
        imgUrl: cert6,
    },
    {
        title: "Web Development (HTML/CSS/JS)",
        issuer: "Udemy",
        imgUrl: cert3,
    },
];

export const Certifications = () => {
    return (
        <section className="certifications" id="certifications">
            <Container>
                <Row>
                    <Col xs={12}>
                        <div className="cert-header">
                            <span className="cert-badge">ACHIEVEMENTS</span>
                            <h2>My <span className="gradient-text">Certifications</span></h2>
                            <p className="cert-subtitle">
                                A showcase of my continuous learning, skills, and hackathon achievements.
                            </p>
                        </div>

                        <div className="certs-grid">
                            {certifications.map((cert, index) => (
                                <div className="cert-card" key={index}>
                                    <div className="cert-img-wrapper">
                                        <img src={cert.imgUrl} alt={cert.title} />
                                        <div className="cert-overlay">
                                            <div className="cert-overlay-content">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <circle cx="12" cy="8" r="7"/>
                                                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cert-info">
                                        <h4>{cert.title}</h4>
                                        <span>{cert.issuer}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
