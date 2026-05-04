export const projectCategories = [
  "Backend/API",
  "Algorithms",
  "ML Product",
  "Blockchain",
] as const

export type ProjectCategory = (typeof projectCategories)[number]

export type Project = {
  title: string
  slug: string
  description: string
  category: ProjectCategory
  stack: string[]
  image: {
    src: string
    alt: string
  }
  github?: string
  live?: string
  featured?: boolean
  overview: string
  problem: string
  solution: string
  features: string[]
  challenges: string[]
  learned: string[]
  futureImprovements: string[]
}

export const projects: Project[] = [
  {
    title: "Research Assistant API",
    slug: "research-assistant-api",
    description:
      "A production-style scholarly discovery backend combining FastAPI, PostgreSQL, pgvector, citation traversal, auth, and deployment-grade CI/CD.",
    category: "Backend/API",
    stack: ["Python", "FastAPI", "PostgreSQL", "pgvector", "SQLAlchemy", "Alembic", "React", "Docker", "Railway"],
    image: {
      src: "",
      alt: "Research Assistant API project visual",
    },
    github: "https://github.com/NathanWalash/research-assistant-api",
    featured: true,
    overview:
      "A FastAPI platform for paper discovery and research workflow management over an OpenAlex-derived Leeds corpus.",
    problem:
      "Research workflows need more than simple keyword search: users need metadata filtering, semantic similarity, citation context, saved projects, and repeatable recommendations.",
    solution:
      "Designed a relational API with PostgreSQL, pgvector embeddings, citation graph traversal, JWT auth, project workspaces, reading lists, annotations, Docker runtime, and Railway deployment documentation.",
    features: [
      "Paper, author, topic, and analytics endpoints",
      "Vector-based similar-paper retrieval with pgvector",
      "Citation neighbourhood and shortest-path traversal",
      "JWT authentication with protected project, reading-list, and annotation workflows",
      "MCP read-only tools for public discovery and analytics",
      "Dockerized runtime and GitHub Actions quality gates",
    ],
    challenges: [
      "Combining relational search with vector similarity without introducing unnecessary infrastructure",
      "Keeping graph traversal useful while documenting dataset constraints honestly",
      "Maintaining migration, test, and deployment parity across local and cloud environments",
    ],
    learned: [
      "Designing API surfaces around real domain workflows",
      "Using pgvector alongside relational metadata",
      "Documenting operational constraints, deployment steps, and endpoint test coverage",
    ],
    futureImprovements: [
      "Add a hosted demo with a safe sample dataset",
      "Improve frontend visualisation for citation paths and recommendations",
      "Add monitoring and seeded demo accounts for reviewers",
    ],
  },
  {
    title: "Search Engine Pipeline",
    slug: "search-engine-pipeline",
    description:
      "A Python command-line search engine with polite BFS crawling, an inverted index, TF-IDF/BM25 ranking, phrase search, and incremental reindexing.",
    category: "Algorithms",
    stack: ["Python", "requests", "BeautifulSoup", "pytest", "mypy", "ruff", "TF-IDF", "BM25"],
    image: {
      src: "",
      alt: "Search Engine Pipeline project visual",
    },
    github: "https://github.com/NathanWalash/search-engine-pipeline",
    featured: true,
    overview:
      "A command-line information retrieval project that crawls a target site, builds a positional inverted index, persists it, and exposes a query shell.",
    problem:
      "A useful search tool needs reliable crawling, tokenisation, storage, ranking, phrase matching, suggestions, and test coverage rather than just string matching.",
    solution:
      "Built a modular Python pipeline covering crawling, parsing, indexing, ranking, benchmarking, CLI command handling, and strict validation through tests and type checks.",
    features: [
      "Polite BFS crawler with configurable delay",
      "Document frequency, term frequency, and positional index storage",
      "TF-IDF and BM25 ranking modes",
      "Quoted phrase search and proximity scoring",
      "Query suggestions and result snippets",
      "Benchmarking plus 186 tests and high coverage",
    ],
    challenges: [
      "Designing tokenisation rules that handle punctuation, apostrophes, and hyphenated terms",
      "Keeping incremental reindexing correct without rebuilding unchanged documents",
      "Balancing coursework constraints with a clean, testable architecture",
    ],
    learned: [
      "Information retrieval ranking tradeoffs",
      "Designing data structures around query performance",
      "Using strict tests, mypy, and linting to keep algorithm-heavy code maintainable",
    ],
    futureImprovements: [
      "Generalise the crawler to multiple sites",
      "Add a small web UI for searching saved indexes",
      "Persist richer crawl metadata for diagnostics",
    ],
  },
  {
    title: "PredictPal ML Pipeline",
    slug: "predictpal-ml-pipeline",
    description:
      "A guided forecasting product that takes users from uploaded time-series data to trained forecasts and shareable story-style outputs.",
    category: "ML Product",
    stack: ["Next.js", "React", "TypeScript", "FastAPI", "pandas", "scikit-learn", "skforecast", "Recharts", "Zustand"],
    image: {
      src: "",
      alt: "PredictPal ML Pipeline project visual",
    },
    github: "https://github.com/NathanWalash/predictpal-ml-pipeline",
    featured: true,
    overview:
      "A hackathon-built time-series forecasting app with a full-stack flow for uploading data, training models, reviewing results, and publishing notebook-style stories.",
    problem:
      "Forecasting demos often fail when users cannot move smoothly from raw data to model outputs, interpretation, and a shareable narrative.",
    solution:
      "Built a five-step product flow with a Next.js frontend, FastAPI backend, model training pipeline, visual analysis stage, and local/demo story persistence.",
    features: [
      "Target and optional driver dataset upload",
      "Guided preprocessing and modelling setup",
      "Baseline and multivariate forecast generation",
      "Visual model-quality and forecast review",
      "Story publishing with explore/search/category filters",
      "Local persistence for resilient demos",
    ],
    challenges: [
      "Keeping an ML workflow understandable inside a time-boxed product demo",
      "Making frontend state resilient when backend demo data resets",
      "Presenting forecast outputs clearly enough for non-technical users",
    ],
    learned: [
      "Coordinating model training APIs with a guided frontend flow",
      "Designing demo-safe persistence and debug controls",
      "Turning technical forecast outputs into user-facing decisions",
    ],
    futureImprovements: [
      "Move demo persistence to a production database",
      "Add richer model comparison and explainability",
      "Add a deployed sample workspace with prepared datasets",
    ],
  },
  {
    title: "Modular DAO Factory",
    slug: "modular-dao-factory",
    description:
      "A Solidity DAO factory using minimal proxies, Diamond-inspired module routing, isolated storage, and off-chain JSON templates.",
    category: "Blockchain",
    stack: ["Solidity", "Hardhat", "JavaScript", "EIP-2535", "Minimal Proxies", "Diamond Storage"],
    image: {
      src: "",
      alt: "Modular DAO Factory project visual",
    },
    github: "https://github.com/NathanWalash/ModularDAOFactory",
    featured: true,
    overview:
      "A modular smart-contract architecture for creating DAO instances with different combinations of membership, greeting, counter, voting-style, or future modules.",
    problem:
      "DAO creation becomes rigid when every new organisation requires a bespoke contract or a fixed feature set.",
    solution:
      "Built a factory/kernel/module system where DAOs are deployed as efficient proxies and route function selectors to pluggable modules with isolated storage.",
    features: [
      "DaoFactory for deployment, metadata, and registry tracking",
      "DaoKernel selector routing inspired by the Diamond pattern",
      "Module contracts with `getSelectors()` and `init(bytes)`",
      "Diamond storage slots to avoid module storage collisions",
      "JSON templates for reusable off-chain DAO configurations",
      "Hardhat tests for template-driven creation and module behaviour",
    ],
    challenges: [
      "Keeping module storage isolated across delegate calls",
      "Separating reusable templates from instance-specific user input",
      "Designing an architecture that can add modules without rewriting the factory or kernel",
    ],
    learned: [
      "Applying proxy and Diamond-inspired patterns in Solidity",
      "Designing smart contracts around upgradeability and extensibility tradeoffs",
      "Testing modular on-chain behaviour through template-driven scenarios",
    ],
    futureImprovements: [
      "Add a small frontend for selecting templates and creating DAOs",
      "Expand the module set with richer voting and treasury examples",
      "Document gas costs and deployment tradeoffs",
    ],
  },
]

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured)
}

export function getProjectBySlug(slug: string | undefined) {
  return projects.find((project) => project.slug === slug)
}
