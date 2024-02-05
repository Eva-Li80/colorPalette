export type HeadProps = {
    title: string;
    subtitle? : string
}

export type SearchColorProps = {
    colors: string[];
  }


export type FootProps = {
    title: string;
}

export type ButtonProps = {
    text: string;
    onClick?: () => void | boolean;
}

export type ButtonPropsAdmin = {
    text?: string;
    onClick: () => void;
    children?: React.ReactNode;
}

export type TextCardProps = {
    title: string;
    text: string;
}
