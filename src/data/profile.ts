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
    "Full-stack developer and final-year Computer Science with Artificial Intelligence student building practical software across web apps, backend systems, data workflows, and AI-assisted products.",
  contactNote:
    "Reach me by email, LinkedIn, or GitHub for professional contact.",
  highlights: [
    "BSc Computer Science with Artificial Intelligence at the University of Leeds",
    "Predicted First Class",
    "Leeds Hackathon winner in 2025 and 2026",
    "Junior Software Developer experience across React, Node.js, Solidity, Laravel, and databases",
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
