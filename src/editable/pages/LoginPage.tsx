import type { Metadata } from 'next'
import Link from 'next/link'
import { buildPageMetadata } from '@/lib/seo'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalLoginForm } from '@/editable/components/EditableLocalAuthForms'
import { pagesContent } from '@/editable/content/pages.content'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/login', title: 'Login', description: pagesContent.auth.login.metadataDescription })
}

export default function LoginPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[var(--editable-page-bg,#f5f1eb)] text-[var(--editable-page-text,#17120f)]">
        <section className="mx-auto grid min-h-[calc(100vh-12rem)] max-w-[var(--editable-container)] items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[0.95fr_0.85fr] lg:px-8">
          <div className="border-y border-current py-10">
            <p className="text-xs font-black uppercase tracking-[0.28em] opacity-55">{pagesContent.auth.login.badge}</p>
            <h1 className="mt-5 max-w-xl font-serif text-6xl font-normal leading-[0.98] sm:text-7xl">{pagesContent.auth.login.title}</h1>
            <p className="mt-6 max-w-lg text-base leading-8 opacity-70">{pagesContent.auth.login.description}</p>
            <div className="mt-8 grid gap-3 text-sm leading-7 opacity-70 sm:grid-cols-2">
              <p>Return to your article drafts, saved publishing session, and clean create workspace.</p>
              <p>After login, the header changes from Login and Sign up to your name, Create, and Logout.</p>
            </div>
          </div>
          <div className="border border-[var(--editable-border)] bg-white/90 p-6 shadow-[0_24px_70px_rgba(16,36,31,0.08)] backdrop-blur sm:p-8">
            <h2 className="font-serif text-3xl font-normal">{pagesContent.auth.login.formTitle}</h2>
            <EditableLocalLoginForm />
            <p className="mt-5 text-sm opacity-70">New here? <Link href="/signup" className="font-black underline-offset-4 hover:underline">{pagesContent.auth.login.createCta}</Link></p>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
