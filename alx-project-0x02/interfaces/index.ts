export interface CardProps{
    title: string,
    content: string
}
export interface PostModalProps{
    onClose: () => void,
    onSubmit: (post: CardProps) => void
}
export interface ButtonProps{
    title:  string;
    className?: string;
}