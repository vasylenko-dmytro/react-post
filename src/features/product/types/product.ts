export interface Product {
  _id: string;
  name: string;
  description: string;
  sku: number;
  meta: {
    denomination: string;
    series: string | null;
    designer: string | null;
    perforation: boolean;
    stampsPerPane: number | null;
    themes: string | null;
    europa: boolean
  },
  release: {
    year: number;
    date: string;
    printQuantity: number;
    isMassIssue: boolean;
    isAvailable: boolean;
  },
  images: {
    original: string;
    small: string;
    pane: string | null;
  }
}

