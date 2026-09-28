import { useState } from 'react'
import { Mail, Phone, MessageCircle, Copy, Check, Send } from 'lucide-react'
import Reveal from './Reveal.jsx'
import GithubMark from './icons/GithubMark.jsx'
import { profile } from '../data/content.js'

const CONTACT_ITEMS = [
  { label: 'Email', icon: Mail, href: `mailto:${profile.email}`, text: profile.email, copy: true },
  { label: 'Phone', icon: Phone, href: `tel:${profile.phone}`, text: profile.phoneDisplay },
  {
    label: 'WhatsApp',
    icon: MessageCircle,
    href: `https://wa.me/${profile.whatsapp}`,
    text: 'Chat with me',
    external: true,
  },
  {
    label: 'GitHub',
    icon: GithubMark,
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
    <footer className="contact-section" id="contact">
      <div className="wrap">
        <Reveal className="glass glass-strong contact-panel">
          <p className="eyebrow">05 / Contact</p>
          <h2 className="contact-heading">Have a project or a job in mind? Let&apos;s talk.</h2>
          <p className="contact-intro">Send me a message and I will reply as soon as I can.</p>

          <div className="contact-grid">
            <ul className="contact-list">
              {CONTACT_ITEMS.map((item) => (
                <li key={item.label}>
                  <span className="contact-icon"><item.icon size={18} /></span>
                  <span>
                    <span className="label">{item.label}</span>
                    <a href={item.href} target={item.external ? '_blank' : undefined} rel={item.external ? 'noopener noreferrer' : undefined}>
                      {item.text}
                    </a>
                    {item.copy && (
                      <button className="copy-btn" type="button" onClick={handleCopy}>
                        {copied ? <Check size={12} /> : <Copy size={12} />} {copied ? 'Copied' : 'Copy'}
                      </button>
                    )}
                  </span>
                </li>
              ))}
            </ul>

            <div className="msg-box">
              <h3>Write me a message</h3>
              <label className="field">
                <span>Your name</span>
                <input type="text" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} />
              </label>
              <label className="field">
                <span>What do you need?</span>
                <textarea value={msg} onChange={(e) => setMsg(e.target.value)} />
              </label>
              <div className="msg-actions">
                <button className="btn btn-solid" type="button" onClick={handleSendMail}>
                  Send by email <Send size={16} />
                </button>
                <button className="btn btn-ghost" type="button" onClick={handleSendWhatsApp}>
                  Send on WhatsApp
                </button>
              </div>
              <p className="note" role="status">{note}</p>
            </div>
          </div>

          <p className="foot">
            <span>Mohamed Haikali Mwamchua &middot; Dar es Salaam, Tanzania &middot; 2026</span>
          </p>
        </Reveal>
      </div>
    </footer>
  )
}
