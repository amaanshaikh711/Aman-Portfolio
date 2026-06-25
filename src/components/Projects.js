import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import projImg1 from "../assets/img/project-1 hatesense-ai-project.png";
import projImg2 from "../assets/img/project-2 insightify-Data analysis Tool.png";
import projImg3 from "../assets/img/project-3 AI-sales-dashboard-ML-project.png";
import projImg4 from "../assets/img/project-4 weather-dashboard.png";
import projImg5 from "../assets/img/project- 5 lussohomes-Live ecommerce website.png";
import projImg6 from "../assets/img/project-6 churn-prediction-ML-Project.png";
import projImg7 from "../assets/img/project-7 watch-ecommerce-website.png";
import projImg8 from "../assets/img/project-8 Live Auto Garage website.png";
import projImg9 from "../assets/img/project-9 HealthScan Pro Your Personal AI-Powered Nutritionist & Health Companion.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

const projects = [
    {
        title: "HateSense AI",
        description: "AI-powered hate speech detection system using NLP and machine learning to identify toxic content.",
        imgUrl: projImg1,
        categories: ["ai"],
        tags: ["Python", "NLP", "ML"],
    },
    {
        title: "Insightify",
        description: "Interactive data analysis tool for visualizing and exploring datasets with intelligent insights.",
        imgUrl: projImg2,
        categories: ["ai"],
        tags: ["Python", "Pandas", "Data Analysis"],
    },
    {
        title: "AI Sales Dashboard",
        description: "ML-powered sales analytics dashboard with predictive forecasting and trend analysis.",
        imgUrl: projImg3,
        categories: ["ai"],
        tags: ["Python", "Scikit-learn", "ML"],
    },
    {
        title: "Weather Dashboard",
        description: "Real-time weather tracking dashboard with dynamic visualizations and location-based forecasts.",
        imgUrl: projImg4,
        categories: ["web"],
        tags: ["JavaScript", "API", "CSS"],
    },
    {
        title: "LussoHomes",
        description: "Live luxury real estate e-commerce platform with premium UI and seamless browsing experience.",
        imgUrl: projImg5,
        categories: ["web", "ecommerce"],
        tags: ["Next.js", "React", "Live"],
    },
    {
        title: "Churn Prediction",
        description: "Machine learning model to predict customer churn with data-driven retention strategies.",
        imgUrl: projImg6,
        categories: ["ai"],
        tags: ["Python", "Scikit-learn", "ML"],
    },
    {
        title: "Watch E-commerce",
        description: "Modern luxury watch store with sleek product showcases and smooth shopping experience.",
        imgUrl: projImg7,
        categories: ["ecommerce"],
        tags: ["HTML", "CSS", "JavaScript"],
    },
    {
        title: "Auto Garage",
        description: "Live auto garage service website with booking system and service catalog.",
        imgUrl: projImg8,
        categories: ["web", "ecommerce"],
        tags: ["HTML", "CSS", "JavaScript", "Live"],
    },
    {
        title: "HealthScan Pro",
        description: "Personal AI-powered nutritionist and health companion for dietary analysis.",
        imgUrl: projImg9,
        categories: ["ai"],
        tags: ["AI", "Nutrition", "App"],
    },
];

const categories = [
    { key: "all", label: "All Projects" },
    { key: "ai", label: "AI / ML" },
    { key: "web", label: "Web Dev" },
    { key: "ecommerce", label: "E-commerce" },
];

export const Projects = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredProjects = activeCategory === "all"
        ? projects
        : projects.filter(p => p.categories && p.categories.includes(activeCategory));

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col xs={12}>
                        <div className="project-header">
                            <span className="project-badge">PORTFOLIO</span>
                            <h2>My <span className="gradient-text">Projects</span></h2>
                            <p className="project-subtitle">
                                A showcase of my work across AI/ML, web development, and e-commerce.
                            </p>
                        </div>

                        {/* Category Filter */}
                        <div className="project-filters">
                            {categories.map((cat) => (
                                <button
                                    key={cat.key}
                                    className={`project-filter-btn ${activeCategory === cat.key ? 'active' : ''}`}
                                    onClick={() => setActiveCategory(cat.key)}
                                >
                                    {cat.label}
                                </button>
                            ))}
                        </div>

                        {/* Projects Grid */}
                        <div className="projects-grid">
                            {filteredProjects.map((project, index) => (
                                <div className="project-card" key={index}>
                                    <div className="project-card-img">
                                        <img src={project.imgUrl} alt={project.title} />
                                        <div className="project-card-overlay">
                                            <h4>{project.title}</h4>
                                            <p>{project.description}</p>
                                        </div>
                                    </div>
                                    <div className="project-card-info">
                                        <h5>{project.title}</h5>
                                        <div className="project-tags">
                                            {project.tags.map((tag, i) => (
                                                <span key={i} className="project-tag">{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="" />
        </section>
    );
};
