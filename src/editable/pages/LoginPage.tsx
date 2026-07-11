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
        <section className="mx-auto grid min-h-[calc(100vh-12rem)] max-w-2xl items-center px-4 py-12 sm:px-6 lg:px-8">
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
