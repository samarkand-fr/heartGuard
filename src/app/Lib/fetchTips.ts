import tipsData from "@/data/tips.json";
import { Tip } from "@/types/tip"; // Import Tip type

export const fetchTips = (): Tip[] => {
  return tipsData as Tip[];
};
