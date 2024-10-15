export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Kantaoui Center",
  description: "Kantaoui Center is a hotel located in Sousse, Tunisia. It is a 4-star hotel that offers a variety of services and amenities to its guests. The hotel is located in the heart of the city, close to the beach and other attractions. It is the perfect place to stay for business travelers, families, and couples looking for a relaxing getaway.",
  navItems: [
    {
      label: {
        "en": "Home",
        "de": "Startseite",
        "fr": "Accueil",
      },
      href: "/",
    },
    {
      label: {
        "en": "Facilities",
        "de": "Einrichtungen",
        "fr": "Facilités",
      },
      href: "/facilities",
    },
    {
      label:{
        "en": "About us",
        "de": "Über uns",
        "fr": "À propos de nous",
      },
      href: "/#about",
    },
    {
      label: {
        "en": "Contact",
        "de": "Kontakt",
        "fr": "Contact",
      },
      href: "/contact",
    },
  ],
  navMenuItems: [
    {
      label: {
        "en": "Home",
        "de": "Startseite",
        "fr": "Accueil",
      },
      href: "/",
    },
    {
      label: {
        "en": "Facilities",
        "de": "Einrichtungen",
        "fr": "Facilités",
      },
      href: "/facilities",
    },
    {
      label:{
        "en": "About us",
        "de": "Über uns",
        "fr": "À propos de nous",
      },
      href: "/#about",
    },
    {
      label: {
        "en": "Contact",
        "de": "Kontakt",
        "fr": "Contact",
      },
      href: "/contact",
    },
  ],
};
