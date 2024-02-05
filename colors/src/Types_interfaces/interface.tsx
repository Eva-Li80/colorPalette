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
