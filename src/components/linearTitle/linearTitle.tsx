interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
    children: string,
}
export const LinearTitle = ({ children, ...props }: Props) => {
    return (
        <h1 {...props} className={`
        relative bg-gradient-to-b from-[#67B6FF] to-white text-transparent bg-clip-text text-shadow-example
        text-xl
        tablet:text-[104px] tablet:tracking-tighter
        desktop:text-3xm 
        `}
            data-content={children}
        >
            {children}
        </h1>

    )
}