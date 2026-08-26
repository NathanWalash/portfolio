import profileImageSrc from "@/assets/pfp.jpg"

export type SocialLink = {
  label: string
  href: string
  external?: boolean
}

export const profile = {
  name: "Nathan Walsh",
  initials: "NW",
  title: "Full-Stack Developer",
  location: "United Kingdom",
  summary:
    "Full-stack developer building practical software across web apps, backend systems, data workflows, and AI-assisted products. Currently a Software Developer at Parallax and a Computer Science with Artificial Intelligence graduate of the University of Leeds.",
  contactNote:
    "Reach me by email, LinkedIn, or GitHub for professional contact.",
  highlights: [
    "Software Developer at Parallax",
    "First Class BSc in Computer Science with AI",
    "Leeds Hackathon winner in 2025 and 2026",
    "React, TypeScript, Node.js, Python, Solidity",
  ],
  profileImage: {
    src: profileImageSrc,
    alt: "Nathan Walsh profile photo",
  },
  socials: {
    github: {
      label: "GitHub",
      href: "https://github.com/NathanWalash",
      external: true,
    },
    linkedin: {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/nathan-walsh1/",
      external: true,
    },
    email: {
      label: "Email",
      href: "mailto:hello@nathanwalsh.me",
    },
  },
} satisfies {
  name: string
  initials: string
  title: string
  location: string
  summary: string
  contactNote: string
  highlights: string[]
  profileImage: {
    src: string
    alt: string
  }
  socials: {
    github: SocialLink
    linkedin: SocialLink
    email: SocialLink
  }
}
