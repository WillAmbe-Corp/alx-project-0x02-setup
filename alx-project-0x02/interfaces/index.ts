export interface CardProps{
    title: string,
    content: string
}
export interface PostModalProps{
    onClose: () => void,
    onSubmit: (post: CardProps) => void
}
export type Shape = 'rounded-sm' | 'rounded-md' | 'rounded-full';
export type Size = 'small' | 'medium' | 'large'
export interface ButtonProps{
    title:  string;
    shape?: Shape;
    size?: Size;
    className?: string;
}
export interface PostProps{
    title: string;
    content: string;
    userId: number;
}
export interface UserProps{
    name:    string;
    email:   string;
    address: string
}