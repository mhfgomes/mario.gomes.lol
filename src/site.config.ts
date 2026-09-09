/**
 * Site-wide configuration and metadata
 * Customize settings, styling options, and personal information here.
 */

export interface SiteConfig {
  title: string;
  description: string;
  url: string;
  author: string;
  handle?: string;
  avatar?: string;
  theme?: {
    defaultMode?: 'dark' | 'light' | 'system';
    accentColor?: 'indigo' | 'violet' | 'emerald' | 'blue' | 'rose' | 'amber';
  };
  socialMeta?: {
    twitterCard?: string;
    ogImage?: string;
  };
  footer?: {
    showPoweredBy?: boolean;
    customText?: string;
  };
}

export const siteConfig: SiteConfig = {
  // Website metadata
  title: "Mário Gomes — About & Links",
  description: "Personal link-in-bio and about me page. Software engineer, builder, and open-source enthusiast.",
  url: "https://mario.gomes.lol",
  author: "Mário Gomes",
  handle: "@mhfgomes",
  avatar: "/avatar.jpg",

  // Theme settings
  theme: {
    // Choose default theme mode: 'dark', 'light', or 'system'
    defaultMode: 'system',
    // Choose your primary accent hue: 'indigo', 'violet', 'emerald', 'blue', 'rose', 'amber'
    accentColor: 'emerald',
  },

  // Social & SEO preview
  socialMeta: {
    twitterCard: 'summary_large_image',
    ogImage: '/og.png',
  },

  // Footer configuration
  footer: {
    showPoweredBy: false,
    customText: "",
  },
};
