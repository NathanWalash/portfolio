export type SocialLink = {
  label: "GitHub" | "LinkedIn" | "Email"
  href: string
  external?: boolean
}

export const profile = {
  name: "Nathan Walsh",
  initials: "NW",
  title: "Frontend Developer",
  location: "United Kingdom",
  summary:
    "I build clean, fast, user-focused web apps with React, TypeScript, and practical UI systems.",
  email: "",
  profileImage: {
    src: "",
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
      href: "",
    },
  },
} satisfies {
  name: string
  initials: string
  title: string
  location: string
  summary: string
  email: string
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
