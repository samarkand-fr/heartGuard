import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface Recipe {
    image: string | StaticImport;
    id: string;
    name: string;
    ingredients: string[];
    instructions: string;
  }
  