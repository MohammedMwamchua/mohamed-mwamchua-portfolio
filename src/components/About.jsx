import Reveal from './Reveal.jsx'
import { skills } from '../data/content.js'

export default function About() {
  return (
    <section className="section" id="about">
      <div className="wrap split">
        <Reveal>
          <p className="eyebrow">01 / About</p>
          <h2 className="section-title">About me</h2>
        </Reveal>
        <div>
          <Reveal>
            <p className="about-text">
              I build websites and apps that solve everyday problems in Tanzania &mdash; like
              finding a house to rent, running a school website, or helping a hospital check
              stroke risk. I care about shipping things that actually get used, not just demos.
            </p>
            <p className="about-text">
              Alongside my studies, I completed hands-on field training at TANESCO and NSSF,
              doing IT support and building software for real teams. That's where I got used to
              working with non-technical staff and fitting into how an organisation actually
              runs, not just how a textbook says it should.
            </p>
            <p className="about-text">
              I finished my Bachelor of Computer Engineering at Dar es Salaam Institute of
              Technology in 2026. Before that, I earned a Diploma in Computer Engineering at
              Mbeya University of Science and Technology in 2023. I speak English and Swahili,
              and I hold an English proficiency certificate.
            </p>
          </Reveal>

          <dl className="skills">
            {skills.map((row, i) => (
              <Reveal key={row.group} delay={i * 0.05} className="skill-row">
                <dt>{row.group}</dt>
                <dd>
                  {row.items.map((item) => (
                    <span className="chip" key={item}>{item}</span>
                  ))}
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
