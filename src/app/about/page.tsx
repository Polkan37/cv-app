export default function About() {
  return (
    <section className="about">
      <div className="section-title">
        <h1>About me</h1>
      </div>
      <div className="main-container-wrapper">
        <div className="about-content">
          <div className="about-text">
            <div className="about-paragraph">
              <h2>The short introduction of my life</h2>
              <p>
                I've always been driven by how technology can reshape everyday experiences and make complex systems feel effortless. As a developer, I focus on building smart, practical, and future-ready solutions that bring clarity to fast-moving digital environments and genuinely improve the way people interact with technology.
              </p>
            </div>
            <div className="about-paragraph">
              <h2>Career and development</h2>
              <p>
                Throughout my journey, I’ve worked across the creating websites, internal tools, automation systems, and chatbots for marketing workflows.
                I continuously expand my technical toolkit, staying current with modern frameworks, architectural patterns, and emerging development practices to elevate the quality and impact of my work.
              </p>
            </div>

            <div className="about-paragraph">
              <h2>More can be added for the summary</h2>
              <p>
                As a developer, my priority is delivering reliable, intuitive, and scalable solutions that streamline teams’ work and align with real business needs. I thrive in cross-functional collaboration—translating requirements into clean, efficient systems that empower users and support long-term growth.
              </p>
            </div>

          </div>
          <div className="about-skills">
            <div className="panel">
              <div className="panel-header text-dark">Core Arsenal</div>
            </div>
            <div className="skills-table">
              <div className="row-l">
                <span><img src="/about/next.svg" alt="Next js" /></span>
                <span><img src="/about/vitest.svg" alt="Vitest" /></span>
                <span><img src="/about/ts.svg" alt="TypeScript" /></span>
              </div>
              <div className="row-m">
                <span><img src="/about/react.svg" alt="React" /></span>
                <span><img src="/about/node.svg" alt="Node js" /></span>
              </div>
              <div className="row-l">
                <span><img src="/about/sql.svg" alt="SQL" /></span>
                <span><img src="/about/js.svg" alt="JavaScript" /></span>
                <span><img src="/about/git.svg" alt="git" /></span>
              </div>
              <div className="row-m">
                <span><img src="/about/css.svg" alt="CSS/SCSS" /></span>
                <span><img src="/about/html.svg" alt="html5" /></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
