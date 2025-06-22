"use client"

import { ArrowUpRight, Github, Linkedin, Mail, Menu, X, Sun, Moon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useMobile } from "@/hooks/use-mobile"
import { useTheme } from "next-themes"
import { useRouter } from "next/navigation"

// Helper function to get the correct image path
const getImagePath = (path: string) => {
  // Check if we're in production (GitHub Pages)
  if (typeof window !== 'undefined' && window.location.hostname.includes('github.io')) {
    return `/portfolio-website${path}`;
  }
  return path;
};

export default function Portfolio() {
  const isMobile = useMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => { setMounted(true) }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container px-4 flex h-16 items-center justify-between mx-auto">
          <Link href="#top" className="font-bold text-xl">
            Andrew Ottaviano
          </Link>

          {isMobile ? (
            <>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
                  {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Toggle theme"
                  onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                  disabled={!mounted}
                >
                  {mounted && (resolvedTheme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />)}
                </Button>
              </div>

              {isMenuOpen && (
                <div className="fixed left-0 right-0 top-16 bottom-0 w-full h-[calc(100vh-4rem)] z-50 bg-background/99 backdrop-blur supports-[backdrop-filter]:bg-background/80 p-4 flex flex-col">
                  <nav className="flex flex-col space-y-4">
                    <Link href="#about" onClick={closeMenu} className="text-lg font-medium py-2 hover:text-primary">
                      About
                    </Link>
                    <Link href="#skills" onClick={closeMenu} className="text-lg font-medium py-2 hover:text-primary">
                      Skills
                    </Link>
                    <Link href="#projects" onClick={closeMenu} className="text-lg font-medium py-2 hover:text-primary">
                      Projects
                    </Link>
                    {/* <Link href="#contact" onClick={closeMenu} className="text-lg font-medium py-2 hover:text-primary">
                      Contact
                    </Link> */}
                  </nav>
                </div>
              )}
            </>
          ) : (
            <nav className="flex items-center gap-6">
              <Link href="#about" className="text-sm font-medium hover:text-primary">
                About
              </Link>
              <Link href="#skills" className="text-sm font-medium hover:text-primary">
                Skills
              </Link>
              <Link href="#projects" className="text-sm font-medium hover:text-primary">
                Projects
              </Link>
              <Button
                size="icon"
                variant="ghost"
                aria-label="Toggle theme"
                onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                disabled={!mounted}
              >
                {mounted && (resolvedTheme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />)}
              </Button>
            </nav>
          )}
        </div>
      </header>

      <main className="flex-1 w-full">
        <div className="container px-4 mx-auto">
          <section id="top" className="py-24 md:py-32 scroll-mt-16">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Hi, I'm Andrew Ottaviano</h1>
                <p className="text-xl text-muted-foreground">
                  Software Engineer with over 7 years of experience developing quality software with React and .Net. I am passionate about building performant, scalable applications that meet user needs and provide a pleasant experience.
                </p>
                <div className="flex gap-4">
                  <Button asChild>
                    <Link href="#contact">Get in touch</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="#projects">View my work</Link>
                  </Button>
                </div>
                <div className="flex gap-4 pt-4">
                  <Link href="https://github.com/AndrewOt" target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon" aria-label="GitHub">
                      <Github className="h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="https://linkedin.com/in/andrewottaviano" target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon" aria-label="LinkedIn">
                      <Linkedin className="h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="mailto:andrew.ottaviano@protonmail.com">
                    <Button variant="ghost" size="icon" aria-label="Email">
                      <Mail className="h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative aspect-square overflow-hidden rounded-full md:order-last">
                <Image
                  src={getImagePath("/Andrew-headshot.jpg")}
                  alt="Andrew Ottaviano headshot"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </section>
        </div>

        <section id="about" className="bg-muted/50 w-full py-24 scroll-mt-16">
          <div className="max-w-screen-lg mx-auto px-4">
            <h2 className="text-3xl font-bold tracking-tight mb-8">About Me</h2>
            <div className="grid gap-8 md:grid-cols-2 md:gap-12">
              <div className="space-y-4">
                <p>
                  I'm a passionate Software Engineer and and am focused on building solutions for the customer, not matter the tech.
                  I am energized by building performant, quality solutions that users enjoy.
                </p>
                <p>
                  I love technology and I'm always looking for ways to grow and learn. Currently, I have over 7 years developing quality
                  web applications with React, .Net, and SQL. I have also pushed myself to learn technologies that are new to me lke
                  CosmosDb graph databases and Gremlin, the Rust and C programming languages, and AI assistant tools.
                </p>
                <p>
                  I enjoy coding for fun and as my day job.When I'm not coding, you can find me spending time with friends and family,
                  outdoors, behind a camera, reading, or playing video games.
                </p>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-muted-foreground">Lenexa, KS</p>
                  </div>
                  <div>
                    <h3 className="font-medium">Experience</h3>
                    <p className="text-muted-foreground">7+ Years</p>
                  </div>
                  <div>
                    <h3 className="font-medium">Education</h3>
                    <p className="text-muted-foreground">B.S. Computer Science and Mathematics</p>
                  </div>
                  <div>
                    <h3 className="font-medium">Languages</h3>
                    <p className="text-muted-foreground">English</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container px-4 mx-auto">
          <section id="skills" className="py-24 scroll-mt-16">
            <h2 className="text-3xl font-bold tracking-tight mb-8">Skills</h2>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {[
                { name: ".NET 8" },
                { name: "C#" },
                { name: "JavaScript" },
                { name: "React" },
                { name: "Next.js" },
                { name: "TypeScript" },
                { name: "Node.js" },
                { name: "HTML/CSS" },
                { name: "Tailwind CSS" },
                { name: "npm" },
                { name: "Git" },
                { name: "REST APIs" },
                { name: "SQL" },
                { name: "CI/CD Yaml pipelines" },
              ].map((skill) => (
                <Card key={skill.name} className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-medium">{skill.name}</h3>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>

        <section id="projects" className="bg-muted/50 w-full py-24 scroll-mt-16">
          <div className="max-w-screen-lg mx-auto px-4">
            <h2 className="text-3xl font-bold tracking-tight mb-8">Projects</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "a-first-date",
                  description: "A library to manage dates in Rust. I developed it to learn about how computers store and manipulate dates as well as Rust.",
                  tags: ["Rust"],
                  image: "/a-first-date.png",
                  url: "https://github.com/AndrewOt/a-first-date"
                },
                {
                  title: "apt-wrapper",
                  description: "Simple wrapper around the `apt` debian package manager.",
                  tags: ["Rust", "Linux"],
                  image: "/apt-wrapper.png",
                  url: "https://github.com/AndrewOt/apt-wrapper"
                },
              ].map((project, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="aspect-video relative">
                    <Image
                      src={getImagePath(project.image || "/placeholder.svg")}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {project.url ?
                    <Button variant="outline" size="sm" className="w-full group" onClick={() => router.push(project.url)}>
                      View Project
                      <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Button>
                    : null}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 w-full">
        <div className="container px-4 flex flex-col items-center justify-between gap-4 md:flex-row mx-auto">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Andrew Ottaviano. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="https://github.com/AndrewOt" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="https://linkedin.com/in/andrewottaviano" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="mailto:andrew.ottaviano@protonmail.com">
              <Button variant="ghost" size="icon" aria-label="Email">
                <Mail className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
