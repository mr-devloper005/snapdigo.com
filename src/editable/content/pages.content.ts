import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const pagesContent = {
  home: {
    metadata: {
      title: 'Articles, essays, and useful reading',
      description: 'Explore thoughtful articles, editorial notes, and curated reading in a calm magazine-style experience.',
      openGraphTitle: 'Articles, essays, and useful reading',
      openGraphDescription: 'Discover article-first stories through a calmer magazine-style reading experience.',
      keywords: ['article site', 'editorial stories', 'online magazine', 'reading platform'],
    },
    hero: {
      badge: 'Independent article journal',
      title: ['Read sharper ideas', 'without the noise.'],
      description: 'Browse thoughtful articles, practical explainers, and editorial notes in a calm layout built for focused reading.',
      primaryCta: { label: 'Read latest stories', href: '/article' },
      secondaryCta: { label: 'Explore visuals', href: '/image' },
      searchPlaceholder: 'Search stories, visuals, listings, and more',
      focusLabel: 'Focus',
      featureCardBadge: 'latest cover rotation',
      featureCardTitle: 'New articles set the tone of the publication.',
      featureCardDescription: 'Fresh writing, clean cards, and measured spacing keep the homepage useful without feeling crowded.',
    },
    intro: {
      badge: 'About the platform',
      title: 'Built for readers who want useful articles, not clutter.',
      paragraphs: [
        'This site gives articles room to breathe: large headlines, quiet summaries, clear categories, and reading paths that do not fight for attention.',
        'The layout is designed around scanning first and reading second, so visitors can find a strong headline quickly and then settle into the article.',
        'Every page keeps the same editorial rhythm, from the homepage to search, article archives, and the detail page.',
      ],
      sideBadge: 'At a glance',
      sidePoints: [
        'Reading-first homepage with stronger emphasis on stories and imagery.',
        'Connected sections for articles, visuals, listings, and supporting resources.',
        'Cleaner browsing rhythm designed to make exploration feel easier.',
        'Lightweight interactions that keep the experience fast and readable.',
      ],
      primaryLink: { label: 'Browse articles', href: '/article' },
      secondaryLink: { label: 'See visuals', href: '/image' },
    },
    cta: {
      badge: 'Start exploring',
      title: 'Explore the latest articles in one calm reading space.',
      description: 'Move from feature stories to practical posts through one clear editorial system.',
      primaryCta: { label: 'Browse Articles', href: '/article' },
      secondaryCta: { label: 'Contact Sales', href: '/contact' },
    },
    taskSection: {
      heading: 'Latest {label}',
      descriptionSuffix: 'Browse the newest posts in this section.',
    },
  },
  about: {
    badge: 'Our Story',
    title: 'A calmer, clearer way to explore content.',
    description: `${slot4BrandConfig.siteName} is an article-first publication built for calm discovery, sharp headlines, and useful reading.`,
    paragraphs: [
      'We publish and organize articles so readers can move from a question to an answer, from a headline to a fuller idea, and from one useful post to the next without friction.',
      'The experience is deliberately quiet: warm paper tones, editorial spacing, strong hierarchy, and no unnecessary visual noise around the reading task.',
      'Writers get a simple publishing surface, and readers get pages that feel composed, legible, and easy to revisit.',
    ],
    values: [
      {
        title: 'Reading-first experience',
        description: 'We prioritize clarity, pacing, and structure so people can read, browse, and discover without noise.',
      },
      {
        title: 'Connected content surfaces',
        description: 'Article lists, search, related posts, and detail pages share one editorial system so discovery feels natural across the site.',
      },
      {
        title: 'Simple and trustworthy',
        description: 'We focus on clean navigation and clear page structure to help visitors find useful content faster.',
      },
    ],
  },
  contact: {
    eyebrow: `Contact ${slot4BrandConfig.siteName}`,
    title: 'Send a note about articles, publishing, or partnerships.',
    description: 'Tell us what you want to publish, fix, sponsor, or ask about. The form is tuned for article submissions, editorial support, and publication questions.',
    formTitle: 'Send a message',
  },

  search: {
    metadata: {
      title: 'Search',
      description: 'Search posts, topics, categories, and content across the site.',
    },
    hero: {
      badge: 'Search the archive',
      title: 'Search the article archive with less friction.',
      description: 'Use keywords, categories, and content type filters to find useful posts, essays, and editorial notes quickly.',
      placeholder: 'Search by keyword, topic, category, or title',
    },
    resultsTitle: 'Latest searchable content',
  },
  create: {
    metadata: {
      title: 'Create',
      description: 'Create and submit new content for the site.',
    },
    locked: {
      badge: 'Creator access',
      title: 'Login to create a new article.',
      description: 'Use your account to open the publishing workspace and draft article content for the site.',
    },
    hero: {
      badge: 'Publishing workspace',
      title: 'Draft a polished article submission.',
      description: 'Add a headline, category, summary, image, and body copy. The form keeps the writing visible and readable while you work.',
    },
    formTitle: 'Content details',
    submitLabel: 'Submit content',
    successTitle: 'Content submitted successfully.',
  },
  auth: {
    login: {
      metadataDescription: 'Login page for this site.',
      badge: 'Member access',
      title: 'Welcome back to the reading desk.',
      description: 'Login to continue creating article drafts and managing your local publishing session.',
      formTitle: 'Login',
      submitLabel: 'Continue',
      noAccount: 'No account matched these details. Create an account first, then login.',
      success: 'Login successful. Redirecting...',
      createCta: 'Create an account',
    },
    signup: {
      metadataDescription: 'Signup page for this site.',
      badge: 'Site access',
      title: 'Create your writer account.',
      description: 'Create an account to access the article workspace, keep your name on drafts, and submit content through the site.',
      formTitle: 'Create account',
      submitLabel: 'Create account',
      passwordShort: 'Use at least 4 characters for the password.',
      success: 'Account created successfully. Redirecting...',
      loginCta: 'Login',
    },
  },
  detailPages: {
    article: {
      relatedTitle: 'Related articles',
      fallbackTitle: 'Article details',
    },
    listing: {
      relatedTitle: 'Related listings',
      fallbackTitle: 'Listing details',
    },
    image: {
      relatedTitle: 'Related visuals',
      fallbackTitle: 'Image details',
    },
    profile: {
      relatedTitle: 'Suggested articles',
      fallbackDescription: 'Profile details will appear here once available.',
      visitButton: 'Visit Official Site',
    },
  },
} as const
