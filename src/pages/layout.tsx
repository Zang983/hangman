import { ReactElement } from "react"

function Layout({ children }: { children: ReactElement }) {
    return (
        <div className="w-full h-full linearBg  tracking-widest
        pl-[25px] pr-[26px]
        tablet:pl-[40px] tablet:pr-[48px] 
        desktop:px-[112px] 
        ">
            {children}
        </div>
    )
}

export default Layout
