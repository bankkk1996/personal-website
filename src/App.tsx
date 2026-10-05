import { ArrowRight, ArrowUpRight, Lock } from 'lucide-react';
import { GithubIcon } from '@/components/github-icon';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ThemeToggle } from '@/components/theme-toggle';
import content from '@/content/site.json';

// All copy lives in src/content/site.json, edited through the CMS at /admin (Sveltia CMS).
const { hero, about, projects, contact } = content as SiteContent;

interface Link { label: string; url: string }
interface Project { title: string; year: number; description: string; tags: string[]; links: Link[]; private?: boolean }
interface SiteContent {
  hero: { greeting: string; name: string; tagline: string; intro: string; github: string };
  about: { text: string; skills: string[] };
  projects: Project[];
  contact: { text: string; links: Link[] };
}

const isExternal = (url: string) => /^https?:\/\//.test(url);

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
            <a key={l.url} href={l.url} target={isExternal(l.url) ? '_blank' : undefined} rel="noopener" className="group flex items-center gap-1 text-sm font-medium text-brand">
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
          <p className="mb-3 font-medium text-brand">{hero.greeting}</p>
          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">{hero.name}</h1>
          <p className="mt-3 text-xl text-muted-foreground sm:text-2xl">{hero.tagline}</p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{hero.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" asChild><a href="#projects">View my work <ArrowRight /></a></Button>
            <Button size="lg" variant="outline" asChild><a href={hero.github} target="_blank" rel="noopener"><GithubIcon /> GitHub</a></Button>
          </div>
        </section>

        <Separator />

        <section id="about" className="py-16 sm:py-20">
          <SectionTitle>About</SectionTitle>
          <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
            <p className="text-lg leading-relaxed whitespace-pre-line">{about.text}</p>
            <ul className="flex flex-wrap content-start gap-2">
              {about.skills.map((s) => <li key={s}><Badge variant="secondary" className="px-3 py-1 text-sm font-normal">{s}</Badge></li>)}
            </ul>
          </div>
        </section>

        <Separator />

        <section id="projects" className="py-16 sm:py-20">
          <SectionTitle>Projects</SectionTitle>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => <ProjectCard key={p.title} p={p} />)}
          </div>
        </section>

        <Separator />

        <section id="contact" className="py-16 sm:py-20">
          <SectionTitle>Contact</SectionTitle>
          <p className="max-w-xl text-lg text-muted-foreground">{contact.text}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {contact.links.map((l, i) => (
              <Button key={l.url} size="lg" variant={i === 0 ? 'default' : 'outline'} asChild>
                <a href={l.url} target={isExternal(l.url) ? '_blank' : undefined} rel="noopener">
                  {l.url.includes('github.com') && <GithubIcon />} {l.label}
                </a>
              </Button>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t py-10 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} {hero.name} · Built with React &amp; shadcn/ui · Hosted on Cloudflare
      </footer>
    </>
  );
}
