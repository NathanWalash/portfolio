import { profile } from "@/data/profile"

export function ProfilePhoto() {
  return (
    <div className="aspect-square overflow-hidden rounded-lg border border-border bg-muted/50">
      <img
        src={profile.profileImage.src}
        alt={profile.profileImage.alt}
        width={660}
        height={660}
        fetchPriority="high"
        decoding="async"
        className="size-full object-cover object-center"
      />
    </div>
  )
}
