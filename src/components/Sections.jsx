import {
  profile,
  skills,
  projects,
  education,
  courses,
  experience,
  certifications,
} from "../data";
import ProjectVisual from "./ProjectVisual";

function Kicker({ n, children }) {
  return (
    <p className="kicker reveal">
      <span>({n})</span> {children}
    </p>
  );
}

const visualTone = ["blue", "amber", "dark"];

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-head">
        <Kicker n="01">Selected work</Kicker>
        <h2 className="section-title reveal">
          Featured <em>projects</em>
        </h2>
      </div>

      <div className="project-list">
        {projects.map((p, i) => (
          <article key={p.title} className="project">
            <div className={`project-visual ${visualTone[i % 3]} reveal`}>
              <ProjectVisual type={p.visual} />
            </div>
            <div className="project-info reveal">
              <div className="project-meta">
                <span className="project-num">0{i + 1}</span>
                <span className="project-tag">{p.tag}</span>
              </div>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <ul className="tags">
                {p.stack.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
              <a className="project-open" href={p.link} target="_blank" rel="noreferrer">
                View on GitHub <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="section about">
      <Kicker n="02">About</Kicker>
      <div className="about-grid">
        <h2 className="about-heading reveal">
          Curious about data, <em>driven</em> by what it can tell us.
        </h2>
        <div className="about-body reveal">
          <p>{profile.summary}</p>
          <p>
            I started the Bachelor of IT with an Artificial Intelligence major at
            Macquarie University and now continue my degree at Charles Darwin
            University. Outside class I work through courses on data science and
            full-stack development and build my own projects.
          </p>
          <dl className="facts">
            <div>
              <dt>Based in</dt>
              <dd>{profile.location}</dd>
            </div>
            <div>
              <dt>Studying</dt>
              <dd>B. Information Technology</dd>
            </div>
            <div>
              <dt>Focus</dt>
              <dd>Data analytics &amp; ML</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-head">
        <Kicker n="03">Toolkit</Kicker>
        <h2 className="section-title reveal">
          Skills &amp; <em>tools</em>
        </h2>
      </div>
      <div className="skill-cols">
        {skills.map((g, i) => (
          <div key={g.group} className="skill-col reveal">
            <p className="skill-head">
              <span>0{i + 1}</span> {g.group}
            </p>
            <ul>
              {g.items.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Journey() {
  return (
    <section id="journey" className="section journey">
      <div className="section-head">
        <Kicker n="04">Journey</Kicker>
        <h2 className="section-title reveal">
          Education &amp; <em>experience</em>
        </h2>
      </div>

      <div className="journey-layout">
        <div className="journey-side reveal">
          <p className="side-label">Courses</p>
          {courses.map((c) => (
            <div key={c.title} className="side-item">
              <strong>{c.title}</strong>
              <span>{c.by}</span>
            </div>
          ))}
          <p className="side-label">Certifications</p>
          {certifications.map((c) => (
            <div key={c} className="side-item">
              <strong>{c}</strong>
            </div>
          ))}
        </div>

        <ol className="timeline">
          {education.map((e) => (
            <li key={e.school} className="reveal">
              <span className="node edu" />
              <p className="when">{e.when}</p>
              <h3>{e.degree}</h3>
              <p className="where">
                {e.school} · {e.place}
              </p>
            </li>
          ))}
          {experience.map((x) => (
            <li key={x.company} className="reveal">
              <span className="node" />
              <p className="when">{x.when}</p>
              <h3>{x.role}</h3>
              <p className="where">{x.company}</p>
              <ul>
                {x.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="section contact">
      <Kicker n="05">Contact</Kicker>
      <h2 className="contact-title reveal">
        Let's work <em>together.</em>
      </h2>
      <div className="contact-row reveal">
        <p>
          I'm looking for data analytics internships and graduate roles. Have an
          opportunity or a dataset worth exploring? I'd love to hear about it.
        </p>
        <div className="contact-links">
          <a href={`mailto:${profile.email}`} className="btn btn-accent">
            {profile.email}
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="btn btn-ghost-light">
            GitHub ↗
          </a>
          {profile.linkedin && (
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn btn-ghost-light">
              LinkedIn ↗
            </a>
          )}
        </div>
      </div>
      <footer className="footer">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </section>
  );
}
