'use client'

import Link from 'next/link'
import type { CSSProperties } from 'react'
import { ArrowUpRight, Mail } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { globalContent } from '@/editable/content/global.content'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableFooter() {
  const footerVars = { '--editable-footer-bg': 'var(--editable-page-bg, #f5f1eb)', '--editable-footer-text': 'var(--editable-page-text, #17120f)' } as CSSProperties
  const taskLinks = SITE_CONFIG.tasks.filter((task) => task.enabled)
  const year = new Date().getFullYear()
  const { session, logout } = useEditableLocalAuthSession()

  return (
    <footer style={footerVars} className="border-t border-[var(--editable-footer-text)] bg-[var(--editable-footer-bg)] text-[var(--editable-footer-text)]">
      <div className="mx-auto grid max-w-[var(--editable-container)] gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_1.25fr_0.75fr] lg:px-8">
        <div>
          <Link href="/" className="font-serif text-4xl leading-none">
            {SITE_CONFIG.name}
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-7 opacity-70">{globalContent.footer?.description || SITE_CONFIG.description}</p>
          <p className="mt-8 text-xs font-black uppercase tracking-[0.24em] opacity-55">{globalContent.footer?.bottomNote}</p>
        </div>

        <div className="border-y border-current/40 py-8 text-center lg:border-y-0 lg:border-x lg:px-10 lg:py-0">
          <h3 className="font-serif text-3xl font-normal">Join the article letter</h3>
          <form action="/contact" className="mx-auto mt-6 flex max-w-md border-b border-current/70 pb-2">
            <input name="email" type="email" placeholder="Your email" className="min-w-0 flex-1 bg-transparent px-1 text-sm outline-none placeholder:text-current/55" />
            <button className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em]" type="submit">
              Submit <Mail className="h-4 w-4" />
            </button>
          </form>
          <p className="mx-auto mt-5 max-w-sm text-sm leading-7 opacity-65">A quiet digest of new articles, useful reads, and editorial notes from {SITE_CONFIG.name}.</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-1">
          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.22em] opacity-55">Explore</h3>
            <div className="mt-4 grid gap-2">
              {taskLinks.map((task) => (
                <Link key={task.key} href={task.route} className="inline-flex items-center gap-2 text-sm font-bold opacity-75 hover:opacity-100">
                  {task.label} <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.22em] opacity-55">Site</h3>
            <div className="mt-4 grid gap-2">
              {[
                ['About', '/about'],
                ['Contact', '/contact'],
                ...(session ? [['Create', '/create']] : [['Login', '/login'], ['Sign up', '/signup']]),
              ].map(([label, href]) => (
                <Link key={href} href={href} className="text-sm font-bold opacity-75 hover:opacity-100">{label}</Link>
              ))}
              {session ? <button type="button" onClick={logout} className="text-left text-sm font-bold opacity-75 hover:opacity-100">Logout</button> : null}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-current/40 px-4 py-5 text-center text-xs font-bold opacity-55">
        © {year} {SITE_CONFIG.name}. All rights reserved.
      </div>
    </footer>
  )
}
