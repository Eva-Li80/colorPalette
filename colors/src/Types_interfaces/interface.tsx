import React from "react";

export interface ColorData {
  id: number;
  albumId: number;
  title: string;
  url: string;
  thumbnailUrl: string;
  colorCode?: string;
}

export interface FetchColorsProps {
  onColorsFetched: (colors: ColorData[]) => void;
}

export interface Colors {
  handleColors: (ColorData: ColorData) => void;
}

export interface AddColors {
  newColor: string;
  setColors: React.Dispatch<React.SetStateAction<ColorData[]>>;
  colors: ColorData[];
  newColorCode: string;
}

export interface RemoveColor {
  id: number;
  setColors: React.Dispatch<React.SetStateAction<ColorData[]>>;
  colors: ColorData[];
}

export interface SearchColorProps  {
  colors: ColorData[];
  
}