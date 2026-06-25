import { Container, Row, Col } from "react-bootstrap";
import colorSharp from "../assets/img/color-sharp.png";


const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

const skillCategories = [
    {
        title: "Languages",
        color: "#4FC3F7",
        // description: "Python, JavaScript, TypeScript, HTML, CSS",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
            </svg>
        ),
        items: [
            { name: "Python", img: `${DEVICON}/python/python-original.svg`, url: "https://docs.python.org" },
            { name: "JavaScript", img: `${DEVICON}/javascript/javascript-original.svg`, url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
            { name: "TypeScript", img: `${DEVICON}/typescript/typescript-original.svg`, url: "https://www.typescriptlang.org/docs/" },
            { name: "HTML", img: `${DEVICON}/html5/html5-original.svg`, url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
            // { name: "CSS", img: `${DEVICON}/css3/css3-original.svg`, url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
        ]
    },
    {
        title: "Frameworks",
        color: "#CE93D8",
        // description: "Flask, Next.js, Three.js, Tailwind CSS, Pandas, Scikit-learn, Matplotlib",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 2 7 12 12 22 7 12 2" />
                <polyline points="2 17 12 22 22 17" />
                <polyline points="2 12 12 17 22 12" />
            </svg>
        ),
        items: [
            { name: "Flask", img: `${DEVICON}/flask/flask-original.svg`, url: "https://flask.palletsprojects.com/", invert: true },
            { name: "Next.js", img: `${DEVICON}/nextjs/nextjs-original.svg`, url: "https://nextjs.org/docs", invert: true },
            { name: "Three.js", img: `${DEVICON}/threejs/threejs-original.svg`, url: "https://threejs.org/docs/", invert: true },
            { name: "Tailwind", img: `${DEVICON}/tailwindcss/tailwindcss-original.svg`, url: "https://tailwindcss.com/docs" },
            { name: "Pandas", img: `${DEVICON}/pandas/pandas-original.svg`, url: "https://pandas.pydata.org/docs/", invert: true },
            { name: "Scikit", img: `${DEVICON}/scikitlearn/scikitlearn-original.svg`, url: "https://scikit-learn.org/" },
            // { name: "Matplotlib", img: `${DEVICON}/matplotlib/matplotlib-original.svg`, url: "https://matplotlib.org/stable/" },
        ]
    },
    {
        title: "AI / ML",
        color: "#F48FB1",
        // description: "NLP, Scikit-learn, Machine Learning, Prompt Engineering, Vapi AI",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="4" width="16" height="16" rx="2" />
                <rect x="9" y="9" width="6" height="6" />
                <line x1="9" y1="1" x2="9" y2="4" />
                <line x1="15" y1="1" x2="15" y2="4" />
                <line x1="9" y1="20" x2="9" y2="23" />
                <line x1="15" y1="20" x2="15" y2="23" />
                <line x1="20" y1="9" x2="23" y2="9" />
                <line x1="20" y1="14" x2="23" y2="14" />
                <line x1="1" y1="9" x2="4" y2="9" />
                <line x1="1" y1="14" x2="4" y2="14" />
            </svg>
        ),
        items: [
            { name: "NLP", text: "NLP", url: "https://www.nltk.org/", badgeColor: "#E91E63" },
            { name: "Scikit-learn", img: `${DEVICON}/scikitlearn/scikitlearn-original.svg`, url: "https://scikit-learn.org/" },
            { name: "ML", text: "ML", url: "https://www.tensorflow.org/", badgeColor: "#FF6F00" },
            { name: "Prompt Eng.", text: "PE", url: "https://platform.openai.com/docs", badgeColor: "#10A37F" },
            { name: "Vapi AI", text: "V", url: "https://docs.vapi.ai/", badgeColor: "#7C4DFF" },
        ]
    },
    {
        title: "Tools",
        color: "#FFD54F",
        // description: "Git, GitHub, Vercel, Render, Google AR, SEO Optimisation",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
            </svg>
        ),
        items: [
            { name: "Git", img: `${DEVICON}/git/git-original.svg`, url: "https://git-scm.com/doc" },
            { name: "GitHub", img: `${DEVICON}/github/github-original.svg`, url: "https://docs.github.com/", invert: true },
            { name: "Vercel", img: `${DEVICON}/vercel/vercel-original.svg`, url: "https://vercel.com/docs", invert: true },
            { name: "Render", text: "R", url: "https://render.com/docs", badgeColor: "#46E3B7" },
            { name: "Google AR", text: "AR", url: "https://developers.google.com/ar", badgeColor: "#4285F4" },
            { name: "SEO", text: "SEO", url: "https://developers.google.com/search/docs", badgeColor: "#34A853" },
        ]
    }
];

const qualities = [
    {
        title: "Clean Code",
        desc: "Writing efficient and scalable code",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#CE93D8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3l1.912 5.813a2 2 0 0 0 1.275 1.275L21 12l-5.813 1.912a2 2 0 0 0-1.275 1.275L12 21l-1.912-5.813a2 2 0 0 0-1.275-1.275L3 12l5.813-1.912a2 2 0 0 0 1.275-1.275L12 3z" />
            </svg>
        )
    },
    {
        title: "Problem Solver",
        desc: "Turning challenges into solutions",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4FC3F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
        )
    },
    {
        title: "Always Learning",
        desc: "Exploring new tech and improving",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFD54F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="9" y1="18" x2="15" y2="18" />
                <line x1="10" y1="22" x2="14" y2="22" />
                <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
            </svg>
        )
    },
    {
        title: "Impact Driven",
        desc: "Building solutions that make a difference",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F48FB1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" />
            </svg>
        )
    }
];

export const Skills = () => {
    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col xs={12}>
                        <div className="skill-bx">
                            {/* Header */}
                            <div className="skill-header">
                                <span className="expertise-badge">MY EXPERTISE</span>
                                <h2>Technical <span className="gradient-text">Skills</span></h2>
                                <p className="skill-subtitle">
                                    Technologies and tools I use to bring ideas to life<br />
                                    and build impactful solutions.
                                </p>
                            </div>

                            {/* Skills Grid with Center Logo */}
                            <div className="skills-layout">
                                <div className="skills-grid">
                                    {skillCategories.map((cat, idx) => (
                                        <div className="skill-card" key={idx}>
                                            <div className="skill-card-header">
                                                <div className="skill-card-icon" style={{ backgroundColor: `${cat.color}20`, color: cat.color }}>
                                                    {cat.icon}
                                                </div>
                                                <div>
                                                    <h3 style={{ color: cat.color }}>{cat.title}</h3>
                                                    <div className="skill-card-divider" style={{ backgroundColor: cat.color }}></div>
                                                </div>
                                            </div>
                                            <div className="skill-icons-row">
                                                {cat.items.map((item, i) => (
                                                    <a
                                                        key={i}
                                                        href={item.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="skill-icon-link"
                                                        title={item.name}
                                                    >
                                                        <div className="skill-icon-box">
                                                            {item.img ? (
                                                                <img
                                                                    src={item.img}
                                                                    alt={item.name}
                                                                    className={item.invert ? 'invert-icon' : ''}
                                                                />
                                                            ) : (
                                                                <span
                                                                    className="skill-text-badge"
                                                                    style={{ backgroundColor: item.badgeColor }}
                                                                >
                                                                    {item.text}
                                                                </span>
                                                            )}
                                                        </div>
                                                        <span className="skill-icon-name">{item.name}</span>
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Bottom Qualities Bar */}
                            <div className="skills-qualities">
                                {qualities.map((q, idx) => (
                                    <div className="quality-item" key={idx}>
                                        <div className="quality-icon">{q.icon}</div>
                                        <div className="quality-text">
                                            <h4>{q.title}</h4>
                                            <p>{q.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="" />
        </section>
    );
};
