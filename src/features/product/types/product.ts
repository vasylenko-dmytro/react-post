export interface Product {
  id: string;
  name: string;
  description: string;
  itemNumber: number;
  denomination: string;
  series: string | null;
  themes: string | null;
  europa: boolean | null;
  designer: string | null;
  issueYear: number;
  issueDate: string;
  availability: boolean;
  perforation: boolean;
  stampsPerPane: number | null;
  printQuantity: string | number;
  imageUrlSmall: string;
  imageUrlOriginal: string;
  imageUrlPane: string | null;
}

