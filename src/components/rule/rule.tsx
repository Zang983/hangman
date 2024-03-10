interface Props {
    rank: number,
    title: string,
    children: string
}
export const Rule = ({ rank, title, children }: Props) => {
    return (
        // <section className="bg-white rounded-[40px] flex desktop:flex-col flex-wrap items-center desktop:px-12 desktop:py-[60px]">
        //     <h2 className="text-blue float-left text-2xl leading-120 desktop:h-fit ">{rank.toString().padStart(2,"0")}</h2>
        //     <h3 className="text-darkBlue text-xl  leading-120 my-10">{title.toUpperCase()}</h3>
        //     <p className="text-[#887DC0] text-sm tracking-wider leading-120 text-center">{children}</p>
        // </section>
        <section className="bg-white rounded-[40px] p-8 flex flex-wrap gap-4
        tablet:grid tablet:grid-rows-2 tablet:grid-flow-col tablet:px-10 tablet:py-7 tablet:gap-0
        desktop:flex desktop:flex-col desktop:items-center desktop:px-12 desktop:py-[60px]
        ">
            <h2 className="text-blue leading-120 text-[24px]
            tablet:row-span-3 tablet:m-0 tablet:text-2xl tablet:pr-10  tablet:self-center
            desktop:h-fit ">
                {rank.toString().padStart(2, "0")}
            </h2>

            <h3 className="text-darkBlue leading-120 text-[24px]
            tablet:text-[40px] tablet:self-center tablet:tracking-[0.035em] tablet:mb-3
            desktop:my-10 desktop:tracking-wide desktop:text-xl
            ">
                {title.toUpperCase()}
            </h3>


            <p className="text-[#887DC0]  tracking-wider leading-120 text-[16px] translate-y-[-3px]
            tablet:text-left tablet:text-[20px] tablet:tracking-[0.045em]
            desktop:text-center desktop:tracking-[0.058em] desktop:text-sm 
            ">
                {children}</p>
        </section>
    )
}