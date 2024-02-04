export interface ColorData {
    id: number;
    albumId: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

export type FetchColorsProps = {
    onColorsFetched: (colors: ColorData[]) => void;
  };