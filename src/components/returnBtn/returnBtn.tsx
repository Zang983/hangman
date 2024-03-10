import { Link } from "react-router-dom"

export const ReturnButton = () => {
    return (
        <Link to="/" className=" hover:brightness-125 shadow-returnBtn bg-gradient-to-b from-[#FE71FE] to-[#7199FF] w-[40px] h-[40px] aspect-square left-0 rounded-full flex items-center justify-center 
        tablet:shadow-returnBtnTablet tablet:w-[64px] tablet:h-[64px] tablet:absolute
        desktop:w-[94px] desktop:h-[94px] ">
            <svg
                className="w-[18px] h-[16px] tablet:w-[28px] tablet:h-[26px] desktop:w-[41px] desktop:h-[39px] -translate-y-[2px] tablet:-translate-y-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 41 39">
                <path fill="#fff" d="M0 19.5 19.02.5v12.244C26.348 12.744 41 17.896 41 38.5c0-11.147-14.653-13.37-21.98-13.089V38.5L0 19.5Z" />
            </svg>

        </Link>
    )
}