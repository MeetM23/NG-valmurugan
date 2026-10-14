export interface NavItem {
  label: string;
  href: string;
}

export interface Download {
  title: string;
  description: string;
  category: string;
  file: string;
  available: boolean;
  tone: "green" | "blue" | "red" | "orange";
}
