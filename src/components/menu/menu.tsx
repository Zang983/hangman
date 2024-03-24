export const Menu = ({ children,mainScreen }: { children: React.ReactNode,mainScreen?:boolean }) => {
    return <div className={`relative shadow-modale modaleGradient items-center flex flex-col
    w-[324px] 
    ${mainScreen ? "h-[500px]":"h-[445px]"} rounded-[48px]
    tablet:w-[592px] 
    desktop:rounded-[72px]
`}>
        {children}

    </div>
}