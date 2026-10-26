"use client"

import { motion, AnimatePresence, easeInOut } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Github, Linkedin, Mail, ExternalLink, Briefcase, Award, Code2, FolderGit2, File, FileText } from "lucide-react"
import { projects } from "@/lib/projects"
import { skills } from "@/lib/skills"
import Image from "next/image"
import { useState } from "react"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

const expandedTextVariants = {
  initial: {
    opacity: 0,
    height: 0,
    marginTop: 0
  },
  animate: {
    opacity: 1,
    height: "auto",
    marginTop: "1rem",
    transition: {
      duration: 0.5,
      ease: easeInOut,
      opacity: { delay: 0.1, duration: 0.3 }
    }
  },
  exit: {
    opacity: 0,
    height: 0,
    marginTop: 0,
    transition: {
      duration: 0.4,
      ease: easeInOut,
      height: { delay: 0.1 }
    }
  }
}

const buttonVariants = {
  hover: {
    scale: 1.05,
    transition: { duration: 0.2, ease: easeInOut }
  },
  tap: {
    scale: 0.95,
    transition: { duration: 0.1, ease: easeInOut }
  }
}

export default function Portfolio() {
  const [showMore, setShowMore] = useState(false)

  return (
    <div className="min-h-screen bg-background pb-16 sm:pb-0">
      <Navbar />

      <div className="container mx-auto px-4 sm:px-6 lg:px-20 py-8 sm:py-12 max-w-4xl pt-6 sm:pt-32">
        <div id="about" className="absolute top-0"></div>
        <motion.section
          className="text-center mb-16 sm:mb-20"
          initial="initial"
          animate="animate"
        >
          <motion.div variants={fadeInUp} className="mb-6 sm:mb-8">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent leading-tight"
              initial={{ opacity: 0, y: 0.5 }}
              animate={{ opacity: 1, y: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Atharva Narvekar
            </motion.h1>
            <motion.p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 sm:mb-8 px-2" variants={fadeInUp}>
              Full Stack Developer | Open Source Learner
            </motion.p>
            <motion.div
              className="text-base sm:text-lg md:text-xl text-muted-foreground text-justify max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10 px-2"
              variants={fadeInUp}
            >
              <p>
                I’m a Full Stack Developer who enjoys building meaningful web applications that solve real-world problems. I primarily work with the MERN and PERN stacks, along with TypeScript and Next.js, and I focus on writing clean, maintainable code while continuously improving my craft.
              </p>

              <AnimatePresence mode="wait">
                {showMore && (
                  <motion.div
                    variants={expandedTextVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="overflow-hidden"
                  >
                    <p>
                      I’ve worked on developing responsive user interfaces and implementing backend systems using REST APIs and real-time communication. I regularly practice Data Structures and Algorithms to strengthen my problem-solving approach and write more efficient, reliable solutions.
                    </p>
                    <p className="mt-4">
                      I enjoy contributing to open-source projects and learning from the developer community. I’m motivated by environments that encourage growth, collaboration, and the opportunity to build software that makes a positive impact.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.button
                onClick={() => setShowMore(!showMore)}
                className="text-sm sm:text-md lg:text-md opacity-60 cursor-pointer underline underline-offset-4 font-medium mt-4 block transition-all duration-300 hover:opacity-80"
                whileHover="hover"
                whileTap="tap"
                variants={buttonVariants}
              >
                {showMore ? "See less" : "See more"}
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 px-2" variants={fadeInUp}>
            <Button
              variant="outline"
              size="sm"
              title="Email"
              onClick={() => {
                window.open(
                  "https://mail.google.com/mail/?view=cm&fs=1&to=atharvanarvekar269@gmail.com&su=Hello%20Atharva&body=Hi%20Atharva,%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect.%0A%0AThanks!",
                  "_blank"
                )
              }}
              className="flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span className="hidden xs:inline">Email</span>
            </Button>

            <Button variant="outline" size="sm" asChild title="GitHub">
              <a
                href="https://github.com/Virus2hell"
                target="_blank"
                className="flex items-center gap-2"
                rel="noreferrer"
              >
                <Github className="w-4 h-4" />
                <span className="hidden xs:inline">GitHub</span>
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild title="LinkedIn">
              <a
                href="https://www.linkedin.com/in/atharva-narvekar-8535862b1/"
                target="_blank"
                className="flex items-center gap-2"
                rel="noreferrer"
              >
                <Linkedin className="w-4 h-4" />
                <span className="hidden xs:inline">LinkedIn</span>
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild title="Resume">
              <a
                href="https://drive.google.com/file/d/1wggjuzQD8aBNgTGb7kFUWpEBOJNL9gd2/view?usp=drive_link"
                target="_blank"
                className="flex items-center gap-2"
                rel="noreferrer"
              >
                <FileText className="w-4 h-4" />
                <span className="hidden xs:inline">Resume</span>
              </a>
            </Button>
          </motion.div>
        </motion.section>

        <div id="experience" className="relative -top-20 sm:-top-40"></div>
        <motion.section
          className="mb-16 sm:mb-20"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3" variants={fadeInUp}>
            <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
            Experience
          </motion.h2>

          <motion.div className="grid gap-6 sm:gap-8">
            <motion.div variants={fadeInUp}>
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 gap-3 sm:gap-0">
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold">Frontend Developer Intern, AltissAdvance Tech Pvt. Ltd – Mumbai, India</h3>
                      <Badge variant="secondary" className="mt-2 w-fit">
                        <Award className="w-3 h-3 mr-1" />
                        Jul 2026 – Oct 2026
                      </Badge>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
                    <li>
                      • Migrated and modernized Merchant Support and Customer Account Warranty Claim modules from static HTML
                      to React.js, restructuring components and styling to align with the Axentra OS design system while
                      preserving existing functionality.
                    </li>
                    <li>
                      • Developed and integrated Module Reviews, Module Configuration, Alert System, Loyalty Points, and
                      Back-in-Stock workflows by consuming REST APIs, dynamically rendering wizard modules based on backend
                      conditions, implementing CRUD operations, and building responsive forms, tables, dialogs, and settings
                      interfaces.
                    </li>
                    <li>
                      • Enhanced Location and Orders/Returns workflows by integrating GET/POST/PATCH/DELETE endpoints,
                      implementing pagination, status toggling with conditional dialogs, form validations, searchable
                      country-code selection, display-name management, and an activity timeline with date/time-based change
                      tracking.
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 gap-3 sm:gap-0">
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold">Frontend Developer Intern, IBM – India, Remote</h3>
                      <Badge variant="secondary" className="mt-2 w-fit">
                        <Award className="w-3 h-3 mr-1" />
                        Jun 2024 – Aug 2024
                      </Badge>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
                    <li>
                      • Collaborated with a team to develop a website focused on the Zero Hunger theme using HTML, CSS, and
                      JavaScript.
                    </li>
                    <li>
                      • Designed a responsive UI for the Zero Hunger website to present the latest articles and blogs related
                      to global hunger issues.
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.section>

        <div id="projects" className="relative -top-20 sm:-top-40"></div>
        <motion.section
          className="mb-16 sm:mb-20"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3" variants={fadeInUp}>
            <FolderGit2 className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
            Projects
          </motion.h2>

          <motion.div className="grid gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className={`${project.title === "Coders-cafe" ? " p-0 lg:py-10 lg:pl-5" : "p-0 lg:pl-5"} hover:shadow-lg dark:hover:shadow-accent transition-all duration-300 hover:-translate-y-1 overflow-hidden`}>
                  <div className="grid items-center lg:grid-cols-2 gap-0">
                    <div className="relative aspect-video border w-full bg-muted order-1 rounded-md overflow-hidden">
                      <a
                        href={`https://${project.link}`}
                        target="_blank"
                        className="flex items-center gap-1"
                        rel="noreferrer"
                      >
                        <Image
                          src={project.image}
                          alt={project.imageAlt || `${project.title} preview`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                      </a>
                    </div>

                    <CardContent className="p-4 sm:p-6 flex flex-col justify-between order-1 lg:order-2">
                      <div>
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 gap-3 sm:gap-0">
                          <h3 className="text-lg sm:text-xl font-semibold">{project.title}</h3>
                          <div className="flex gap-2 flex-shrink-0">
                            <Button variant="outline" size="sm" asChild>
                              <a
                                href={`https://${project.link}`}
                                target="_blank"
                                className="flex items-center gap-1"
                                rel="noreferrer"
                              >
                                <ExternalLink className="w-3 h-3" />
                                <span className="hidden xs:inline">Live</span>
                              </a>
                            </Button>
                            <Button variant="outline" size="sm" asChild>
                              <a href={project.github} target="_blank" className="flex items-center gap-1" rel="noreferrer">
                                <Github className="w-3 h-3" />
                                <span className="hidden xs:inline">Code</span>
                              </a>
                            </Button>
                          </div>
                        </div>

                        <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto">
                        {project.tech.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
        <div id="skills" className="relative -top-20 sm:-top-40"></div>
        <motion.section
          className="mb-16 sm:mb-20"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3" variants={fadeInUp}>
            <Code2 className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
            Skills
          </motion.h2>

          <motion.div className="grid gap-4 sm:gap-6">
            {Object.entries(skills).map(([category, skillList], index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card>
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">{category}</h3>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {skillList.map((skill, skillIndex) => (
                        <motion.div key={skillIndex} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Badge variant="outline" className="text-xs sm:text-sm">{skill}</Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <div id="contact" className="relative -top-20 sm:-top-40"></div>
        <motion.section
          className="mb-16 sm:mb-20"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3" variants={fadeInUp}>
            <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
            Contact Me
          </motion.h2>

          <motion.div variants={fadeInUp}>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 sm:p-8 text-center">
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Let's Connect!</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 px-2">
                  I'm always open to discussing new opportunities, collaborations, or just having a chat about
                  technology.
                </p>
                <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                  <Button
                    type="button"
                    onClick={() => {
                      window.open(
                        "https://mail.google.com/mail/?view=cm&fs=1&to=atharvanarvekar269@gmail.com&su=Hello%20Atharva&body=Hi%20Atharva,%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect.%0A%0AThanks!",
                        "_blank"
                      )
                    }}
                    className="flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    Send Email
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.section>

        <motion.footer
          className="text-center py-6 sm:py-8 pb-0 border-t text-sm sm:text-base"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          © Atharva Narvekar - 2026
        </motion.footer>
      </div>
    </div>
  )
}