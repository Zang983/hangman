import { useEffect, useRef } from "react"

export const LifeBar = ({ life }: { life: number }) => {
    const refLife = useRef<HTMLDivElement>(null)
    const lifeLimit = 8

    useEffect(() => {
        if (refLife !== null) {
            const newWidth = life * (100 / lifeLimit)
            refLife.current!.style.width = `${newWidth <= 100 ? newWidth : 100}%`
            if (life >= lifeLimit - 1)
                refLife.current!.style.backgroundColor = "red"
            else
                refLife.current!.style.backgroundColor = "rgb(36,99,255)"
        }
    }, [life])

    return <div>
        <div className="
        w-[57px] bg-white rounded-[96px] py-1 h-4
        tablet:w-[160px] tablet:px-[11px] tablet:h-[30px] tablet:py-[9px]
        desktop:w-[240px]"
        >
            <div ref={refLife} className="bg-blue h-full rounded-[96px]"></div>
        </div>
    </div>
}