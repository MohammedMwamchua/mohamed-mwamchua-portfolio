import { useState } from 'react'
import { Check, Copy, Mail, Phone, Send } from 'lucide-react'
import { siGithub, siWhatsapp } from 'simple-icons'
import BrandIcon from './BrandIcon.jsx'
import { profile } from '../data/content.js'

const LucideMail = (props) => <Mail size={18} strokeWidth={1.6} {...props} />
const LucidePhone = (props) => <Phone size={18} strokeWidth={1.6} {...props} />
const WhatsAppMark = (props) => <BrandIcon icon={siWhatsapp} size={17} {...props} />
const GitHubMark = (props) => <BrandIcon icon={siGithub} size={17} {...props} />

const CONTACT_ITEMS = [
  { label: 'Email', Icon: LucideMail, href: `mailto:${profile.email}`, text: profile.email, copy: true },
  { label: 'Phone', Icon: LucidePhone, href: `tel:${profile.phone}`, text: profile.phoneDisplay },
  {
    label: 'WhatsApp',
    Icon: WhatsAppMark,
    href: `https://wa.me/${profile.whatsapp}`,
    text: 'Chat with me',
    external: true,
  },
  {
    label: 'GitHub',
    Icon: GitHubMark,
    href: `https://github.com/${profile.github}`,
    text: `github.com/${profile.github}`,
    external: true,
  },
]

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [name, setName] = useState('')
  const [msg, setMsg] = useState('')
  const [note, setNote] = useState('')

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      setNote('Please copy it by hand.')
    }
  }

  function buildMessage() {
    const trimmedMsg = msg.trim()
    if (!trimmedMsg) {
      setNote('Please write what you need first.')
      return null
    }
    setNote('')
    const trimmedName = name.trim()
    const greeting = trimmedName
      ? `Hello Mohamed, my name is ${trimmedName}.\n\n`
      : 'Hello Mohamed,\n\n'
    return greeting + trimmedMsg
  }

  function handleSendMail() {
    const text = buildMessage()
    if (!text) return
    const url = `mailto:${profile.email}?subject=${encodeURIComponent('Message from your portfolio')}&body=${encodeURIComponent(text)}`
    window.open(url, '_blank')
    setNote('Your email app should open with your message ready to send.')
  }

  function handleSendWhatsApp() {
    const text = buildMessage()
    if (!text) return
    window.open(`https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener')
    setNote('WhatsApp should open with your message ready to send.')
  }

  return (
    <section className="section" id="contact">
      <div className="wrap contact-grid">
        <div className="reveal">
          <h2 className="contact-heading">Have a project or a job in mind?</h2>
          <p className="contact-intro">Send me a message and I will reply as soon as I can.</p>

          <ul className="contact-list">
            {CONTACT_ITEMS.map(({ label, Icon, href, text, copy, external }) => (
              <li key={label}>
                <span className="contact-icon"><Icon aria-hidden="true" /></span>
                <span className="contact-text">
                  <span className="contact-label">{label}</span>
                  <a href={href} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}>
                    {text}
                  </a>
                </span>
                {copy && (
                  <button className="copy-btn" type="button" onClick={handleCopy} aria-label="Copy email address">
                    {copied ? <Check size={13} /> : <Copy size={13} />} {copied ? 'Copied' : 'Copy'}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>

        <form className="msg-box reveal" onSubmit={(e) => { e.preventDefault(); handleSendMail() }}>
          <h3>Write me a message</h3>
          <label className="field">
            <span>Your name</span>
            <input type="text" name="name" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <label className="field">
            <span>What do you need?</span>
            <textarea name="message" value={msg} onChange={(e) => setMsg(e.target.value)} />
          </label>
          <div className="msg-actions">
            <button className="btn btn-primary" type="submit">
              Send by email <Send size={15} strokeWidth={1.75} />
            </button>
            <button className="btn btn-secondary" type="button" onClick={handleSendWhatsApp}>
              <BrandIcon icon={siWhatsapp} size={15} /> Send on WhatsApp
            </button>
          </div>
          <p className="note" role="status">{note}</p>
        </form>
      </div>
    </section>
  )
}
