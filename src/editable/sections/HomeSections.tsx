import Link from 'next/link'
import { ArrowRight, Search } from 'lucide-react'
import type { ReactNode } from 'react'
import type { SitePost } from '@/lib/site-connector'
import type { HomeTimeSection } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { editableDesignContract as dc } from '@/editable/layouts/design-contract'
import { getEditableCategory, getEditableExcerpt, getEditablePostImage, postHref } from '@/editable/cards/PostCards'

type HomeSectionProps = {
  primaryTask: TaskKey
  primaryRoute: string
  posts: SitePost[]
  timeSections: HomeTimeSection[]
}

function taskLabel(task: TaskKey) {
  return SITE_CONFIG.tasks.find((item) => item.key === task)?.label || task
}

function Meta({ children }: { children: ReactNode }) {
  return <p className="text-[11px] font-black uppercase tracking-[0.26em] text-[var(--slot4-accent)]">{children}</p>
}

function EditorialCard({ post, href, large = false }: { post: SitePost; href: string; large?: boolean }) {
  return (
    <Link href={href} className={`group block min-w-0 ${large ? 'lg:col-span-2' : ''}`}>
      <article className="border-t border-[var(--slot4-page-text)] pt-5">
        <div className={`relative overflow-hidden bg-[var(--slot4-media-bg)] ${large ? 'aspect-[16/10]' : 'aspect-[4/3]'}`}>
          <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(0,0,0,0.48))]" />
        </div>
        <Meta>{getEditableCategory(post)}</Meta>
        <h3 className={`mt-3 font-serif font-normal leading-[1.02] ${large ? 'text-4xl sm:text-5xl' : 'text-3xl'}`}>{post.title}</h3>
        <p className="mt-4 line-clamp-3 text-sm leading-7 text-[var(--slot4-muted-text)]">{getEditableExcerpt(post, large ? 190 : 140)}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em]">
          Read more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </span>
      </article>
    </Link>
  )
}

function OverlayCard({ post, href, index }: { post: SitePost; href: string; index: number }) {
  return (
    <Link href={href} className="group relative block min-h-[390px] overflow-hidden bg-black text-white">
      <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover opacity-78 transition duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.72))]" />
      <div className="relative z-10 flex min-h-[390px] flex-col justify-end p-6">
        <p className="text-[11px] font-black uppercase tracking-[0.26em] text-white/75">Story {String(index + 1).padStart(2, '0')} / {getEditableCategory(post)}</p>
        <h3 className="mt-3 font-serif text-3xl font-normal leading-[1.02]">{post.title}</h3>
      </div>
    </Link>
  )
}

function TextIndex({ post, href, index }: { post: SitePost; href: string; index: number }) {
  return (
    <Link href={href} className="group grid grid-cols-[48px_minmax(0,1fr)] gap-4 border-t border-current/70 py-5">
      <span className="font-serif text-3xl opacity-45">{String(index + 1).padStart(2, '0')}</span>
      <span>
        <Meta>{getEditableCategory(post)}</Meta>
        <h3 className="mt-2 font-serif text-2xl leading-tight">{post.title}</h3>
        <span className="mt-3 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] opacity-65 group-hover:opacity-100">Open <ArrowRight className="h-4 w-4" /></span>
      </span>
    </Link>
  )
}

export function EditableHomeHero({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const heroPost = posts[0]
  const sidePost = posts[1] || posts[0]
  const heroTitle = pagesContent.home.hero.title.join(' ') || `Read the latest ${taskLabel(primaryTask).toLowerCase()}`

  return (
    <section className="border-b border-[var(--slot4-page-text)] bg-[var(--slot4-page-bg)]">
      <div className="mx-auto grid max-w-[var(--editable-container)] gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-16">
        <div className="flex min-h-[520px] flex-col justify-between bg-[var(--slot4-panel-bg)] p-8 outline outline-1 outline-[var(--slot4-accent)] sm:p-12">
          <div>
            <Meta>{pagesContent.home.hero.badge}</Meta>
            <h1 className={`${dc.type.heroTitle} mt-5 max-w-xl text-[var(--slot4-accent)]`}>{heroTitle}</h1>
            <p className="mt-6 max-w-lg text-base leading-8 text-[var(--slot4-muted-text)]">{pagesContent.home.hero.description}</p>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href={primaryRoute} className={dc.button.primary}>Read latest <ArrowRight className="h-4 w-4" /></Link>
            <Link href="/search" className={dc.button.secondary}>Search archive</Link>
          </div>
        </div>
        {heroPost ? (
          <Link href={postHref(primaryTask, heroPost, primaryRoute)} className="group relative min-h-[520px] overflow-hidden bg-black text-white">
            <img src={getEditablePostImage(heroPost)} alt={heroPost.title} className="absolute inset-0 h-full w-full object-cover opacity-82 transition duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_35%,rgba(0,0,0,0.68))]" />
            <div className="relative z-10 flex min-h-[520px] flex-col justify-end p-7 sm:p-10">
              <p className="text-[11px] font-black uppercase tracking-[0.26em] text-white/78">Featured article / {getEditableCategory(heroPost)}</p>
              <h2 className="mt-4 max-w-3xl font-serif text-5xl font-normal leading-[0.96] sm:text-6xl">{heroPost.title}</h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-white/75">{getEditableExcerpt(heroPost, 175)}</p>
            </div>
          </Link>
        ) : (
          <div className="min-h-[520px] bg-[var(--slot4-media-bg)]" />
        )}
      </div>
      {sidePost ? (
        <div className="mx-auto max-w-[var(--editable-container)] px-4 pb-12 sm:px-6 lg:px-8">
          <Link href={postHref(primaryTask, sidePost, primaryRoute)} className="grid border-y border-[var(--slot4-page-text)] py-8 md:grid-cols-[1fr_160px] md:items-center">
            <h2 className="max-w-2xl font-serif text-3xl leading-tight sm:text-4xl">“{sidePost.title}”</h2>
            <span className="mt-5 text-xs font-black uppercase tracking-[0.22em] md:mt-0 md:text-right">Editor pick</span>
          </Link>
        </div>
      ) : null}
    </section>
  )
}

export function EditableStoryRail({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const railPosts = posts.slice(0, 3)
  const trendPosts = posts.slice(3, 7)
  if (!railPosts.length) return null

  return (
    <section className="bg-[var(--slot4-warm)]">
      <div className="mx-auto grid max-w-[var(--editable-container)] gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_330px] lg:px-8">
        <div>
          <div className="mb-8 flex items-end justify-between gap-4 border-b border-current pb-4">
            <h2 className={dc.type.sectionTitle}>Our latest articles</h2>
            <Link href={primaryRoute} className="text-xs font-black uppercase tracking-[0.2em]">All stories <ArrowRight className="inline h-4 w-4" /></Link>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {railPosts.map((post, index) => (
              <OverlayCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />
            ))}
          </div>
        </div>
        <aside>
          <h2 className="border-b border-current pb-4 font-serif text-3xl">Trending</h2>
          <div>
            {trendPosts.map((post, index) => <TextIndex key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />)}
          </div>
        </aside>
      </div>
    </section>
  )
}

export function EditableMagazineSplit({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const featured = posts.slice(7, 12)
  if (!featured.length) return null
  return (
    <section className="bg-[var(--slot4-gray)]">
      <div className="mx-auto max-w-[var(--editable-container)] px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {featured.map((post, index) => (
            <EditorialCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} large={index === 0} />
          ))}
        </div>
      </div>
    </section>
  )
}

export function EditableTimeCollections({ primaryTask, primaryRoute, posts, timeSections }: HomeSectionProps) {
  const categoryPosts = timeSections.flatMap((section) => section.posts).length ? timeSections.flatMap((section) => section.posts) : posts.slice(12)
  const picks = categoryPosts.slice(0, 6)

  return (
    <section className="bg-[var(--slot4-page-bg)]">
      <div className="mx-auto grid max-w-[var(--editable-container)] gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
        <div>
          <Meta>Archive search</Meta>
          <h2 className={`${dc.type.sectionTitle} mt-4`}>Find the article you came for.</h2>
          <p className="mt-5 text-sm leading-7 text-[var(--slot4-muted-text)]">Search by topic, headline, category, or phrase. The archive is designed to stay narrow, legible, and easy to scan.</p>
          <form action="/search" className="mt-8 flex border-b border-current pb-2">
            <input name="q" placeholder={pagesContent.home.hero.searchPlaceholder} className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-current/45" />
            <button className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em]"><Search className="h-4 w-4" /> Search</button>
          </form>
        </div>
        <div className="grid gap-x-8 md:grid-cols-2">
          {picks.map((post, index) => <TextIndex key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />)}
        </div>
      </div>
    </section>
  )
}

export function EditableHomeCta() {
  return (
    <section id="get-app" className="bg-[var(--slot4-panel-bg)]">
      <div className="mx-auto max-w-[var(--editable-container)] px-4 py-16 sm:px-6 lg:px-8">
        <div className="border border-[var(--slot4-accent)] px-6 py-12 text-center sm:px-10">
          <Meta>Start reading</Meta>
          <h2 className="mx-auto mt-4 max-w-3xl font-serif text-4xl font-normal leading-tight sm:text-5xl">Useful articles, calmer pages, and a publication that feels made to read.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[var(--slot4-muted-text)]">Explore new posts, search the archive, or contact the editorial team about article submissions and partnerships.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/article" className={dc.button.primary}>Browse articles</Link>
            <Link href="/contact" className={dc.button.secondary}>Contact us</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
