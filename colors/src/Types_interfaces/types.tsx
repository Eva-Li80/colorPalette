export type HeadProps = {
    title: string;
    subtitle? : string
}

export type ButtonProps = {
    text: string;
    onClick?: () => void | boolean;
}

export type TextCardProps = {
    title: string;
    text: string;
    style?: React.CSSProperties;
}
