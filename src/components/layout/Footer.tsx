import { Code2, ExternalLink, Mail } from "lucide-react"
import { Link } from "react-router-dom"

import { profile, type SocialLink } from "@/data/profile"

export function Footer() {
  return (
    <footer className="border-t border-border/80 bg-muted/30">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <Link
            to="/"
            className="font-medium text-foreground transition-colors hover:text-muted-foreground"
          >
            {profile.name}
          </Link>
          <p className="mt-2 max-w-md">{profile.summary}</p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <FooterSocial icon="code" social={profile.socials.github} />
          <FooterSocial icon="external" social={profile.socials.linkedin} />
          <FooterSocial icon="mail" social={profile.socials.email} />
        </div>
      </div>
    </footer>
  )
}

function FooterSocial({
  icon,
  social,
}: {
  icon: "code" | "external" | "mail"
  social: SocialLink
}) {
  const Icon = icon === "code" ? Code2 : icon === "mail" ? Mail : ExternalLink
  const className =
    "inline-flex items-center gap-2 rounded-lg px-2 py-1 transition-colors focus-visible:ring-3 focus-visible:ring-ring/50"
  const content = (
    <>
      <Icon className="size-4" aria-hidden="true" />
      {social.label}
    </>
  )

  if (!social.href) {
    return (
      <span aria-disabled="true" className={`${className} text-muted-foreground`}>
        {content}
      </span>
    )
  }

  return (
    <a
      href={social.href}
      target={social.external ? "_blank" : undefined}
      rel={social.external ? "noreferrer" : undefined}
      className={`${className} hover:bg-background hover:text-foreground`}
    >
      {content}
    </a>
  )
}
