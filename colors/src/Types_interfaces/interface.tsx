import React from "react";

export interface ColorData {
  id: number;
  albumId: number;
  title: string;
  url: string;
  thumbnailUrl: string;

}

export interface FetchColorsProps {
  onColorsFetched: (colors: ColorData[]) => void;
}

export interface Colors {
  handleColors: (ColorData: ColorData) => void;
}

export interface AddColors<T> {
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

export interface UpdateColor {
  id: number;
  editedTitle: string;
  colors: ColorData[];
  setColors: React.Dispatch<React.SetStateAction<ColorData[]>>;
  setEditedColorId: React.Dispatch<React.SetStateAction<number | null>>;
}
