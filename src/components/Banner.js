import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/banner-img-3.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import bgVideo from "../assets/img/vidssave.com Stars Fly Through in the Universe Space Background Animation _ 4K Screensaver Royalty Free 720p.mp4";
import { SiPython, SiReact, SiNextdotjs, SiVercel, SiGit, SiJavascript, SiHtml5, SiCss } from "react-icons/si";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const toRotate = ["Web Developer", "Web Designer", "Software Developer", "MERN Stack Developer", "Code Explorer", "AI/ML Enthusiast"];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className="banner" id="home">
            <video autoPlay loop muted playsInline className="banner-video-bg">
                <source src={bgVideo} type="video/mp4" />
            </video>

            <div className="banner-bg-orbs">
                <div className="bg-orb orb-1"></div>
                <div className="bg-orb orb-2"></div>
                <div className="bg-orb orb-3"></div>
            </div>

            <div className="nebula"></div>

            <Container>
                <Row className="align-items-center">
                    <Col xs={12} lg={7} xl={7}>
                        <TrackVisibility once>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeInLeft animate__delay-1s" : ""}>
                                    <div className="banner-badge">
                                        <span className="pulse-dot"></span>
                                        Available for Freelance
                                    </div>
                                    <h1 className="banner-title">
                                        Hello, I'm <span className="gradient-name">Aman</span>
                                        <br />
                                        <span className="txt-rotate" data-period="1000" data-rotate='[ "Web Developer", "Web Designer", "Software Developer", "MERN Stack Developer", "Code Explorer", "AI/ML Enthusiast" ]'>
                                            <span className="wrap">{text}</span>
                                        </span>
                                    </h1>
                                    <p className="banner-description">
                                        I craft elegant, high-performance digital experiences that blend cutting-edge technology with refined design. Specializing in MERN stack development, AI/ML integration, and scalable web solutions.
                                    </p>
                                    <div className="banner-cta">
                                        <button className="btn-primary" onClick={() => document.getElementById('connect')?.scrollIntoView({ behavior: 'smooth' })}>
                                            Let's Connect <ArrowRightCircle size={22} className="btn-icon" />
                                        </button>
                                        <button className="btn-secondary" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                                            View My Work
                                        </button>
                                    </div>
                                </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} lg={5} xl={5} className="d-none d-lg-block">
                        <TrackVisibility once>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeInRight" : ""}>
                                    <div className="hero-image-wrapper">
                                        <div className="hero-glow"></div>
                                        <div className="hero-ring ring-1"></div>
                                        <div className="hero-ring ring-2"></div>
                                        
                                        <div className="orbit-wrapper">
                                            <div className="tech-icon-container" style={{'--angle': '0deg', color: '#61DAFB'}}><SiReact /></div>
                                            <div className="tech-icon-container" style={{'--angle': '45deg', color: '#FFFFFF'}}><SiNextdotjs /></div>
                                            <div className="tech-icon-container" style={{'--angle': '90deg', color: '#F7DF1E'}}><SiJavascript /></div>
                                            <div className="tech-icon-container" style={{'--angle': '135deg', color: '#E34F26'}}><SiHtml5 /></div>
                                            <div className="tech-icon-container" style={{'--angle': '180deg', color: '#1572B6'}}><SiCss /></div>
                                            <div className="tech-icon-container" style={{'--angle': '225deg', color: '#3776AB'}}><SiPython /></div>
                                            <div className="tech-icon-container" style={{'--angle': '270deg', color: '#F05032'}}><SiGit /></div>
                                            <div className="tech-icon-container" style={{'--angle': '315deg', color: '#FFFFFF'}}><SiVercel /></div>
                                        </div>

                                        <img src={headerImg} alt="Hero Illustration" className="hero-img" />
                                    </div>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}