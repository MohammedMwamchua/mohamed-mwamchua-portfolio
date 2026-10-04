import BrandIcon from './BrandIcon.jsx'
import { skills } from '../data/content.js'

export default function About() {
  return (
    <section className="section" id="about">
      <div className="wrap split">
        <header className="reveal">
          <h2 className="section-title">About me</h2>
        </header>
        <div>
          <div className="about-text reveal">
            <p className="about-lead">
              I build websites and apps for everyday problems in Tanzania: finding a house to
              rent, running a school website, keeping the books for a small food business, and
              helping a hospital check stroke risk.
            </p>
            <p>
              Alongside my studies, I did field training at TANESCO and NSSF, working in IT
              support and building software. That is where I learned to work with staff who are
              not technical, and to fit software around the way an office already works.
            </p>
            <p>
              I finished my Bachelor of Computer Engineering at Dar es Salaam Institute of
              Technology in 2026. Before that, I earned a Diploma in Computer Engineering at
              Mbeya University of Science and Technology in 2023. I speak English and Swahili,
              and I hold an English proficiency certificate.
            </p>
          </div>

          <dl className="skills reveal">
            {skills.map((row) => (
              <div className="skill-row" key={row.group}>
                <dt>{row.group}</dt>
                <dd>
                  {row.items.map((item) => (
                    <span className="tag" key={item.label}>
                      <BrandIcon icon={item.icon} size={14} />
                      {item.label}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
