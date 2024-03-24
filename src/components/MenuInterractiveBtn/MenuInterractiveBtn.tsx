interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    gradient?: boolean,
    text: string
}
export const MenuInterractiveBtn = ({ gradient, text, ...props }: Props) => {

    return <button className={`${gradient ? " pinkGradient shadow-generalPink" : " bg-blue shadow-generalShadow"} uppercase px-[64px] py-3 w-fit rounded-[40px] text-white text-base leading-120 tracking-widest `} {...props}>{text}</button>

}