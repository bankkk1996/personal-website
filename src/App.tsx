import { ArrowRight, ArrowUpRight, Lock } from 'lucide-react';
import { GithubIcon } from '@/components/github-icon';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ThemeToggle } from '@/components/theme-toggle';

const GITHUB = 'https://github.com/bankkk1996';

const SKILLS = [
  'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js / Express', 'Tailwind CSS', 'SQLite',
  'Docker', 'WordPress', 'Python', 'Android (Java)', 'Firebase', 'Cloudflare',
];

interface Project {
  title: string;
  year: number;
  description: string;
  tags: string[];
  links: { label: string; href: string }[];
  private?: boolean;
}

const PROJECTS: Project[] = [
  {
    title: 'Website Monitoring',
    year: 2026,
    description:
      'Tools for keeping websites healthy: an SSL certificate, uptime & domain-expiry monitor on Cloudflare Workers + SQLite (D1) with checks on GitHub Actions and LINE alerts, an uptime status dashboard, and a self-hosted full-stack version.',
    tags: ['Cloudflare Workers', 'D1 / SQLite', 'GitHub Actions', 'React', 'shadcn/ui'],
    links: [
      { label: 'SSL monitor code', href: `${GITHUB}/ssl-monitor` },
      { label: 'Status dashboard', href: 'https://site-status-observer.vercel.app' },
      { label: 'Full-stack code', href: `${GITHUB}/monitoring` },
    ],
  },
  {
    title: 'QR Code Check-In',
    year: 2025,
    description: 'Check people in by scanning a QR code or typing the code in, with a search page for admins. Runs entirely in the browser.',
    tags: ['HTML', 'JavaScript', 'GitHub Pages'],
    links: [
      { label: 'Live demo', href: 'https://bankkk1996.github.io/QRCode-CheckIn/' },
      { label: 'GitHub', href: `${GITHUB}/QRCode-CheckIn` },
    ],
  },
  {
    title: 'Finance',
    year: 2026,
    description: 'Personal income & expense tracker with monthly summaries and spending by category, running on Cloudflare’s edge behind Zero Trust login.',
    tags: ['Cloudflare Workers', 'D1', 'Zero Trust', 'React', 'shadcn/ui'],
    links: [],
    private: true,
  },
  {
    title: 'Coach App',
    year: 2025,
    description: 'Mobile app for coaches, built with React Native and Expo Router, styled with NativeWind.',
    tags: ['React Native', 'Expo', 'TypeScript'],
    links: [{ label: 'GitHub', href: `${GITHUB}/Coach-app` }],
  },
  {
    title: 'WordPress Theme',
    year: 2025,
    description: 'A complete custom WordPress theme — front page, archive, page and 404 templates, comments, header and footer.',
    tags: ['WordPress', 'PHP', 'CSS'],
    links: [{ label: 'GitHub', href: `${GITHUB}/theme-wordpress` }],
  },
  {
    title: 'TrashToGo',
    year: 2020,
    description: 'Android app that helps people sort waste and find nearby recycling factories on a map, plus a web admin panel for managing factories, waste types and pickup requests.',
    tags: ['Android', 'Java', 'Firebase', 'Google Maps'],
    links: [{ label: 'GitHub', href: `${GITHUB}/TrashToGo` }],
  },
  {
    title: 'Airfighters',
    year: 2021,
    description: '2D Android shooter game written from scratch in Java — steer the plane by tilting the phone (accelerometer & gyroscope) and shoot down the birds.',
    tags: ['Android', 'Java', 'Game'],
    links: [{ label: 'GitHub', href: `${GITHUB}/Airfighters` }],
  },
];

function SectionTitle({ children }: { children: string }) {
  return <h2 className="mb-8 text-sm font-semibold tracking-[0.15em] text-brand uppercase">{children}</h2>;
}

function ProjectCard({ p }: { p: Project }) {
  return (
    <Card className="transition-colors hover:border-brand/60">
      <CardHeader>
        <div className="flex items-baseline justify-between gap-3">
          <CardTitle className="text-lg">{p.title}</CardTitle>
          <span className="text-sm text-muted-foreground tabular-nums">{p.year}</span>
        </div>
        <CardDescription className="leading-relaxed">{p.description}</CardDescription>
      </CardHeader>
      <CardContent className="mt-auto flex flex-wrap gap-1.5">
        {p.tags.map((t) => <Badge key={t} variant="outline" className="font-normal text-muted-foreground">{t}</Badge>)}
      </CardContent>
      <CardFooter className="flex flex-wrap gap-x-4 gap-y-1">
        {p.private ? (
          <span className="flex items-center gap-1.5 text-sm text-muted-foreground"><Lock className="size-3.5" /> Private project</span>
        ) : (
          p.links.map((l) => (
            <a key={l.href} href={l.href} target="_blank" rel="noopener" className="group flex items-center gap-1 text-sm font-medium text-brand">
              {l.label}
              <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          ))
        )}
      </CardFooter>
    </Card>
  );
}

export default function App() {
  return (
    <>
      <header className="sticky top-0 z-10 border-b border-transparent bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex h-16 max-w-5xl items-center gap-6 px-4 sm:px-6">
          <a href="#top" className="text-lg font-bold tracking-tight">sorawich<span className="text-brand">.</span></a>
          <nav className="ml-auto hidden gap-1 sm:flex">
            {['About', 'Projects', 'Contact'].map((s) => (
              <Button key={s} variant="ghost" size="sm" asChild><a href={`#${s.toLowerCase()}`}>{s}</a></Button>
            ))}
          </nav>
          <div className="ml-auto sm:ml-0"><ThemeToggle /></div>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-5xl px-4 sm:px-6">
        <section className="py-20 sm:py-28">
          <p className="mb-3 font-medium text-brand">สวัสดีครับ 👋 Hello, I'm</p>
          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">Sorawich</h1>
          <p className="mt-3 text-xl text-muted-foreground sm:text-2xl">Web Developer · Thailand</p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            I build web apps and the tools that keep websites healthy — from domain &amp; SSL monitoring
            dashboards to React front-ends and WordPress themes.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" asChild><a href="#projects">View my work <ArrowRight /></a></Button>
            <Button size="lg" variant="outline" asChild><a href={GITHUB} target="_blank" rel="noopener"><GithubIcon /> GitHub</a></Button>
          </div>
        </section>

        <Separator />

        <section id="about" className="py-16 sm:py-20">
          <SectionTitle>About</SectionTitle>
          <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
            <p className="text-lg leading-relaxed">
              I&apos;ve been writing code on GitHub since 2016 — starting with university projects in Java, Python and deep
              learning, and moving on to full-stack JavaScript. Today I mostly work with React, Next.js and Node.js, and I
              enjoy building practical tools that solve real day-to-day problems.
            </p>
            <ul className="flex flex-wrap content-start gap-2">
              {SKILLS.map((s) => <li key={s}><Badge variant="secondary" className="px-3 py-1 text-sm font-normal">{s}</Badge></li>)}
            </ul>
          </div>
        </section>

        <Separator />

        <section id="projects" className="py-16 sm:py-20">
          <SectionTitle>Projects</SectionTitle>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((p) => <ProjectCard key={p.title} p={p} />)}
          </div>
        </section>

        <Separator />

        <section id="contact" className="py-16 sm:py-20">
          <SectionTitle>Contact</SectionTitle>
          <p className="max-w-xl text-lg text-muted-foreground">Open to collaborations and new opportunities — feel free to reach out.</p>
          <Button size="lg" className="mt-6" asChild><a href={GITHUB} target="_blank" rel="noopener"><GithubIcon /> GitHub</a></Button>
        </section>
      </main>

      <footer className="border-t py-10 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Sorawich · Built with React &amp; shadcn/ui · Hosted on Cloudflare
      </footer>
    </>
  );
}
