export const CONTACT = {
  name: "Muhammad Waris",
  role: "Senior UI/UX Designer",
  email: "sameeralikhooharo@gmail.com",
  whatsapp: "https://wa.me/923407921680",
  socials: [
    { label: "Behance", href: "https://www.behance.net/sameerkhooharo" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/muhammad-waris-6a408a21b" },
    { label: "Upwork", href: "https://www.upwork.com/freelancers/~0189221b87188189fc" },
    { label: "GitHub", href: "https://github.com/sameeralikhooharo-gif" },
    { label: "WhatsApp", href: "https://wa.me/923407921680" },
  ] as const,
} as const;

export type SocialLink = (typeof CONTACT.socials)[number];