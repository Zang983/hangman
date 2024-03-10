import { Rule } from "../components/rule/rule"
import { LinearTitle } from "../components/linearTitle/linearTitle"
import { ReturnButton } from "../components/returnBtn/returnBtn"

function Rules() {
    const rules = [
        {
            title: "choose a category",
            description: "First, choose a word category, like animals or movies. The computer then randomly selects a secret word from that topic and shows you blanks for each letter of the word."
        },
        {
            title: "guess letters",
            description: "Take turns guessing letters. The computer fills in the relevant blank spaces if your guess is correct. If it’s wrong, you lose some health, which empties after eight incorrect guesses."
        },
        {
            title: "win or lose",
            description: "You win by guessing all the letters in the word before your health runs out. If the health bar empties before you guess the word, you lose."
        }
    ]
    return (
        <>
            <header className="flex relative
            pt-8 pb-[79px] justify-between items-center
            tablet:items-center tablet:justify-center tablet:pb-0
            desktop:pt-20 dekstop:pb-16  ">
                {/* <Link to="/" className="">Accueil</Link> */}
                <ReturnButton />
                <LinearTitle >How to Play</LinearTitle>
            </header>
            <main className="
            flex flex-col gap-6
            tablet:gap-8   tablet:mt-[100px]
            desktop:grid desktop:grid-cols-3 desktop:w-full">
                {
                    rules.map((rule, index) => <Rule rank={index + 1} title={rule.title}>{rule.description}</Rule>)
                }
            </main>
        </>
    )
}

export default Rules