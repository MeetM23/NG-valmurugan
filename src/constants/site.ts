import type { Download, NavItem } from "@/types";

export const SITE = {
  name: "Velmurugan Fertiliser Company",
  copyrightYear: 2025,
  tagline: "Nourishing Agriculture. Enriching Tomorrow.",
  phones: ["+91 4582 235 666", "+91 4582 235 777"],
  exportEmail: "export@velmuruganfertiliser.com",
  infoEmail: "info@velmuruganfertiliser.com",
  address: [
    "RS No. 193/862, Arasur Village,",
    "Thiruvennainallur Taluk, Villupuram District – 607 107,",
    "Tamil Nadu, India.",
  ],
  addressOneLine:
    "RS No. 193/862, Arasur Village, Thiruvennainallur Taluk, Villupuram District – 607 107, Tamil Nadu, India",
  mapQuery: "Arasur, Thiruvennainallur, Villupuram, Tamil Nadu 607107",
  social: {
    linkedin: "https://www.linkedin.com/",
    youtube: "https://www.youtube.com/",
    facebook: "https://www.facebook.com/",
  },
} as const;

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Manufacturing", href: "/manufacturing" },
  { label: "Products", href: "/products" },
  { label: "International Business", href: "/international-business" },
  { label: "Quality", href: "/quality" },
  { label: "Infrastructure", href: "/infrastructure" },
  { label: "Markets", href: "/markets" },
  { label: "Downloads", href: "/downloads" },
  { label: "Contact Us", href: "/contact" },
];

export const FOOTER_PRODUCTS: NavItem[] = [
  { label: "Granulated Fertilizers", href: "/products#granulated" },
  { label: "Water-Soluble Fertilizers", href: "/products#water-soluble" },
  { label: "Specialty Liquid Fertilizers", href: "/products#liquids" },
  { label: "Organic & Soil Conditioners", href: "/products#organic" },
  { label: "Micronutrient Products", href: "/products#liquids" },
  { label: "Bio-Stimulants", href: "/products#bio-stimulants" },
  { label: "Custom Formulations", href: "/products#custom" },
];

/**
 * Drop the real PDFs into /public/downloads and flip `available` to true.
 * Until then the buttons route visitors to the enquiry form instead of a 404.
 */
export const DOWNLOADS: Download[] = [
  { title: "Company Profile", description: "Learn about our journey, vision and capabilities.", category: "Company Information", file: "/downloads/company-profile.pdf", available: false, tone: "green" },
  { title: "Product Brochure", description: "Complete range of fertilisers and specialty products.", category: "Product Brochures", file: "/downloads/product-brochure.pdf", available: false, tone: "blue" },
  { title: "Technical Data Sheets", description: "Detailed product specifications and application guidelines.", category: "Technical Documents", file: "/downloads/technical-data-sheets.pdf", available: false, tone: "green" },
  { title: "Certifications", description: "Our quality, safety and compliance certificates.", category: "Certifications", file: "/downloads/certifications.pdf", available: false, tone: "red" },
  { title: "Other Resources", description: "Additional documents, presentations and updates.", category: "Other Resources", file: "/downloads/other-resources.pdf", available: false, tone: "orange" },
];

export function downloadHref(doc: Pick<Download, "file" | "available">): string {
  return doc.available ? doc.file : "/contact#enquiry";
}
