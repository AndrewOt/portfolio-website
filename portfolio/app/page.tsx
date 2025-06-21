"use client"

import { ArrowUpRight, Github, Linkedin, Mail, Menu, X, Sun, Moon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useMobile } from "@/hooks/use-mobile"
import { useTheme } from "next-themes"

export default function Portfolio() {
  const isMobile = useMobile()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

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
                >
                  {resolvedTheme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
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
                    <Link href="#contact" onClick={closeMenu} className="text-lg font-medium py-2 hover:text-primary">
                      Contact
                    </Link>
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
              <Link href="#contact" className="text-sm font-medium hover:text-primary">
                Contact
              </Link>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Toggle theme"
                onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              >
                {resolvedTheme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
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
                  Full Stack Developer specializing in creating beautiful, functional web experiences.
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
                  src="/Andrew-headshot.jpg"
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
                  I'm a passionate Full Stack Developer with 7+ years of experience building modern web applications. I
                  specialize in React, Next.js, Node.js, and creating responsive, user-friendly interfaces.
                </p>
                <p>
                  My approach combines technical expertise with a strong focus on user experience. I believe in clean
                  code, thoughtful architecture, and continuous learning.
                </p>
                <p>
                  When I'm not coding, you can find me hiking, reading sci-fi novels, or experimenting with new
                  technologies.
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
                  title: "E-commerce Platform",
                  description: "A full-featured online store with cart, checkout, and payment integration.",
                  tags: ["Next.js", "Stripe", "Tailwind"],
                  image: "/placeholder.svg?height=400&width=600&text=E-commerce",
                },
                {
                  title: "Task Management App",
                  description: "Collaborative task manager with real-time updates and team features.",
                  tags: ["React", "Firebase", "Material UI"],
                  image: "/placeholder.svg?height=400&width=600&text=Task+App",
                },
                {
                  title: "Portfolio Website",
                  description: "Custom portfolio site for a digital artist with gallery features.",
                  tags: ["Next.js", "Framer Motion", "Sanity CMS"],
                  image: "/placeholder.svg?height=400&width=600&text=Portfolio",
                },
                {
                  title: "Fitness Tracker",
                  description: "Mobile-first application for tracking workouts and nutrition goals.",
                  tags: ["React Native", "GraphQL", "MongoDB"],
                  image: "/placeholder.svg?height=400&width=600&text=Fitness+App",
                },
                {
                  title: "Weather Dashboard",
                  description: "Real-time weather information with location-based forecasts.",
                  tags: ["JavaScript", "Weather API", "Chart.js"],
                  image: "/placeholder.svg?height=400&width=600&text=Weather+App",
                },
                {
                  title: "Recipe Finder",
                  description: "Search and save recipes with filtering by ingredients and dietary needs.",
                  tags: ["React", "Node.js", "MongoDB"],
                  image: "/placeholder.svg?height=400&width=600&text=Recipe+App",
                },
              ].map((project, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="aspect-video relative">
                    <Image
                      src={project.image || "/placeholder.svg"}
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
                    <Button variant="outline" size="sm" className="w-full group">
                      View Project
                      <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <div className="container px-4 mx-auto">
          <section id="contact" className="py-24 scroll-mt-16">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Get In Touch</h2>
              <p className="text-muted-foreground">
                Have a project in mind or want to discuss potential opportunities? I'd love to hear from you.
              </p>
            </div>
            <div className="mx-auto max-w-md">
              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <input
                    id="subject"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Project inquiry"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </section>
        </div>
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
