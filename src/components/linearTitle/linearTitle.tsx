interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
    children: string,
    modale?: boolean,
    mainTitle?:boolean

    Container?:keyof JSX.IntrinsicElements
}
export const LinearTitle = ({ children, modale,mainTitle,Container="h1" }: Props) => {
    return (
        <Container className={`
        relative bg-gradient-to-b from-[#67B6FF] to-white text-transparent bg-clip-text linearTitle
        ${mainTitle && "linearMainTitle"}
        ${modale ? " -tracking-wide text-[134px] " : mainTitle ?"text-2xl tablet:text-[136px]" :"tablet:tracking-tighter text-xl tablet:text-[104px] desktop:text-3xm"}
        `}

            data-content={children}
        >
            {children}
        </Container>

    )
}