export const projects = [
  {
    title: "DocMind",
    description:
      "An AI study assistant built on a RAG pipeline that lets you chat with your PDFs and turn them into question banks. Answers stream in with page-level citations using gte-small embeddings and pgvector similarity search, while a map-reduce Q&A generator creates 10–30 MCQ, short-answer and true/false questions by difficulty, downloadable as a PDF. Each user's documents are secured with Row Level Security.",
    tech: ["React", "TypeScript", "LangChain.js", "Supabase", "pgvector", "Groq"],
    link: "https://doc-mind-tan.vercel.app/",
    github: "https://github.com/Virus2hell/DocMind",
    image: "/images/projects/docmind.png",
    imageAlt: "DocMind chat with PDF and Q&A generator interface"
  },
  {
    title: "RideRated",
    description:
      "A full-stack road-review platform for bikers with multi-category ratings, photos, tags and an interactive map. Features PostGIS \"roads near me\" search, India-wide road/PIN-code lookup via OpenStreetMap, cursor-paginated infinite scroll, plus follows, likes, threaded replies and photo posts secured with JWT cookie auth.",
    tech: ["React", "Express.js", "PostgreSQL", "PostGIS", "Supabase", "OpenStreetMap"],
    link: "riderated.vercel.app",
    github: "https://github.com/Virus2hell/RideRated",
    image: "/images/projects/ride-rated.png",
    imageAlt: "RideRated road-review platform interface"
  },
  {
    title: "DSA Socio",
    description:
      "A collaborative full-stack platform for structured DSA preparation with smart partner matching and shared workspaces, used by 150+ users. Includes real-time chat, shared DSA sheets to add problems, links and difficulty levels, and private/shared workspaces with full CRUD support for collaborating with multiple partners.",
    tech: ["TypeScript", "React", "Node.js", "Express.js", "Supabase", "Pusher"],
    link: "dsa-socio.vercel.app",
    github: "https://github.com/Virus2hell/DSA-Buddy",
    image: "/images/projects/dsa-socio.png",
    imageAlt: "DSA Socio collaborative platform interface"
  },
  {
    title: "KeyWorded",
    description:
      "An AI-powered platform that analyzes resumes against job descriptions to generate ATS scores and actionable improvement suggestions. Provides skill gap analysis, grammar improvements, personalized cover letters, interview Q&A and role-specific learning roadmaps, with 50+ active users.",
    tech: ["TypeScript", "React", "Node.js", "Supabase", "AI"],
    link: "keyworded.in",
    github: "https://github.com/Virus2hell/AI-Resume-Analyzer",
    image: "/images/projects/keyworded.png",
    imageAlt: "KeyWorded resume analyzer interface"
  },
];