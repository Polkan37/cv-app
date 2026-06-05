
  // {
  //   "title": "",
  //   "description": "",
  //   "technologies": ["HTML", "CSS", "JS"],
  //   "image": "/projects/",
  //   "published": "",
  //   "liveLink": "",
  //   "githubLink": ""
  // },


const PROJECTS = [
    {
    "title": "Tip calculator app",
    "description": "React + TypeScript tip calculator with responsive design, preset tip options, per-person split, and mobile-first layout. Built with Vite & SCSS.",
    "technologies": ["React", "TypeScript", "Vite", "HTML", "SCSS"],
    "image": "/projects/tip-calculator-app.jpg",
    "published": "04.06.2026",
    "liveLink": "https://polkan37.github.io/tip-calculator-app/",
    "githubLink": "https://github.com/Polkan37/tip-calculator-app"
  },
  {
    "title": "GitHub Release Notifier",
    "description": "The service allows users to subscribe to GitHub repositories and receive email notifications about new releases.",
    "technologies": [ "TypeScript", "Node.js", "Fastify", "Prisma", "PostgreSQL", "node-cron", "Docker", "Jest"],
    "image": "/projects/notifier.jpg",
    "published": "13.04.2026",
    "liveLink": "",
    "githubLink": "https://github.com/Polkan37/github-release-notifier"
  },
  {
    "title": "Newsletter sign-up form",
    "description": "Responsive newsletter sign-up landing page with a simple form to collect email subscriptions and a success confirmation message after submission.",
    "technologies": ["React", "Vite", "HTML5/SCSS"],
    "image": "/projects/newsletter-form.jpg",
    "published": "21.04.2026",
    "liveLink": "https://newsletter-sign-up-with-success-mes-woad-five.vercel.app/",
    "githubLink": "https://github.com/Polkan37/newsletter-sign-up-with-success-message"
  },
  {
    "title": "Meet landing page",
    "description": "Responsive landing page for a fictional meeting platform.",
    "technologies": ["HTML", "CSS/SASS", "JS"],
    "image": "/projects/meet.jpg",
    "published": "26.03.2026",
    "liveLink": "https://polkan37.github.io/meet-landing-page",
    "githubLink": "https://github.com/Polkan37/meet-landing-page"
  },
  {
    "title": "Beer boutique",
    "description": "Team project on SoftServe fundamentals course – Bar website.",
    "technologies": ["HTML", "CSS", "JS"],
    "image": "/projects/team-project.jpg",
    "published": "14.07.2022",
    "liveLink": "https://koldovsky.github.io/698-team-4/",
    "githubLink": "https://github.com/koldovsky/698-team-4"
  }
]


export default function Projects() {

  return (
    <section className="projects">
      <div className="section-title">
        <h1>Projects</h1>
      </div>
      <div className="main-container-wrapper">
        <div className="projects-content">
          <div className="slider">
            {PROJECTS.map((project, index) => (
              <div className="project" key={index}>
                <div className="card-wrapper">
                  <div className="project-card">
                    <div className="background"><img src={project.image} alt="" /></div>
                    <p>published {project.published}</p>
                    <img src={project.image} alt="" />
                    <div className="buttons">
                      {project?.liveLink && <a href={project.liveLink} target="_blank">view live</a>}
                      {project?.githubLink && <a href={project.githubLink} target="_blank">github</a>}
                    </div>
                  </div>
                </div>
                <div className="project-details">
                  <h2>{project.title}<span><div className="dots"></div></span></h2>
                  <p className="subtitle">{project.technologies.join(" / ")}</p>
                  <p>{project.description}</p>
                </div>
              </div>
            )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
