import { ReactElement } from "react"

function Layout({ children }: { children: ReactElement }) {
    return (

        <main className="bg-bgDesktop bg-no-repeat bg-cover h-[100vh] w-full">
            {children}
        </main>
    )
}

export default Layout
