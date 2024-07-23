export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Kantaoui Center",
  description: "Kantaoui Center is a hotel located in Sousse, Tunisia. It is a 4-star hotel that offers a variety of services and amenities to its guests. The hotel is located in the heart of the city, close to the beach and other attractions. It is the perfect place to stay for business travelers, families, and couples looking for a relaxing getaway.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "services",
      href: "/services",
    },
    {
      label: "About us",
      href: "/about",
    },
    {
      label: "Rooms",
      href: "/rooms",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About us",
      href: "/about",
    },
    {
      label: "Rooms",
      href: "/rooms",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
