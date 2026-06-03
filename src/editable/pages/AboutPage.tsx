import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

export default function AboutPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[var(--editable-page-bg,#f5f1eb)] px-4 py-14 text-[var(--editable-page-text,#17120f)] sm:px-6 lg:px-8">
        <section className="mx-auto max-w-[var(--editable-container)]">
          <article className="border-b border-current pb-12">
            <p className="text-xs font-black uppercase tracking-[0.24em] opacity-55">{pagesContent.about.badge}</p>
            <h1 className="mt-5 max-w-4xl font-serif text-6xl font-normal leading-[0.98] sm:text-7xl">About {SITE_CONFIG.name}</h1>
            <p className="mt-7 max-w-2xl text-lg leading-9 opacity-75">{pagesContent.about.description}</p>
            <div className="mt-10 grid gap-6 text-base leading-8 opacity-75 lg:grid-cols-3">
              {pagesContent.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </article>
          <aside className="grid gap-5 py-12 md:grid-cols-3">
            {pagesContent.about.values.map((value) => (
              <div key={value.title} className="border-t border-current pt-5">
                <h2 className="font-serif text-3xl font-normal leading-tight">{value.title}</h2>
                <p className="mt-3 text-sm leading-7 opacity-70">{value.description}</p>
              </div>
            ))}
          </aside>
        </section>
      </main>
    </EditableSiteShell>
  )
}
