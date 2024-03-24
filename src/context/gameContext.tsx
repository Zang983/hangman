import { createContext, useEffect, useReducer } from "react";
import { checkLetterInWord, checkWin, displaySigns, getData, getRandomInt } from "../util/functions";

interface State {
    datas: { name: string, entries: { name: string, selected: boolean }[], wordFinded: number }[],
    wordToFind: { letter: string, finded: boolean }[],
    inputs: string[],
    gameStatus: "PENDING" | "PAUSE" | "WIN" | "LOSE",
    category: string,
    life: number,
    stringWord?: string
}

export const GameContext = createContext<State>(null)

/* Création du provider lié au context */


const initialState: State = {
    datas: [],// renvois un tableau d'objet avec les catégories, les objets entrées et le nombre d'entrée trouvées.
    stringWord: "",
    wordToFind: [],
    inputs: [],
    gameStatus: "PENDING",
    category: "",
    life: 0,
}

const reducer = (state: State, action: { type: string, payload?: any }): State => {
    switch (action.type) {
        case "getData":
            return {
                ...state,
                datas: action.payload
            }
        case "changeCategory":
            return { ...state, category: action.payload }
        case "changeWordToFind": {
            let possibilities: { name: string, selected: boolean }[] = []
            state.datas.map(category => {
                if (category.name.toUpperCase() === state.category) {
                    possibilities = category.entries.filter(item => item.selected === false)
                }
            })
            const choice = possibilities.length > 0 ? possibilities[getRandomInt(possibilities.length - 1)].name : ""
            let word = []
            for (const letter of choice.split(''))
                word.push({ letter: letter, finded: false })


            return {
                ...state,
                wordToFind: displaySigns(word),
                stringWord: choice
            }
        }
        case "setWordFinded": {
            const newData = JSON.parse(JSON.stringify(state.datas))
            newData.map((category: { name: string, entries: { name: string, selected: boolean }[], wordFinded: number }) => {
                if (category.name === state.category) {
                    category.entries.map(entry => {
                        if (entry.name.toUpperCase() === state.stringWord.toUpperCase())
                            entry.selected = true
                    })
                    category.wordFinded += 1
                }
            })
            return {
                ...state,
                datas: newData
            }
        }
        case "setInputUser": {
            const input = action.payload.toUpperCase()
            const prevInputs = [...state.inputs]
            if (prevInputs.indexOf(input) !== -1)
                return { ...state }
            
            prevInputs.push(input)
            const { word, finded } = { ...checkLetterInWord(input, state.wordToFind, state.stringWord!) }
            const newLife = finded ? state.life : state.life + 1
            let newGameStatus = newLife >= 8 ? "LOSE" : state.gameStatus
            newGameStatus = checkWin(newGameStatus, word)

            return {
                ...state,
                wordToFind: word,
                inputs: prevInputs,
                life: newLife,
                gameStatus: newGameStatus
            }
        }
        case "setGameStatus":
            return { ...state, gameStatus: action.payload.toUpperCase() }
        case "setLife":
            return { ...state, life: action.payload }
        case "resetGame":
            return { ...state, inputs: [], life: 0, gameStatus: "PENDING" }
        default:
            return state
    }
}

export const GameProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        const fetchData = async () => {
            const data: { name: string, entries: { name: string, selected: boolean }[], wordFinded: number }[] | -1 = await getData()
            if (data !== -1)
                dispatch({ type: "getData", payload: data })
        }
        fetchData()
    }, [])

    const setCategory = (name: string) => {
        dispatch({ type: "changeCategory", payload: name })
    }
    const changeWordToFind = () => {
        dispatch({ type: "changeWordToFind" })
    }
    const setWordFinded = () => {
        dispatch({ type: "setWordFinded" })
    }
    const newGame = () => {
        dispatch({ type: 'changeWordToFind' })
        dispatch({ type: 'resetGame' })
    }
    const incrementLife = () => {
        dispatch({ type: 'setLife', payload: state.life + 1 })
    }
    const setInputUser = (letter: string) => {
        dispatch({ type: "setInputUser", payload: letter })
    }
    const setGameStatus = (status: string) => {
        dispatch({ type: "setGameStatus", payload: status })
    }



    return <GameContext.Provider value={{ state, setCategory, changeWordToFind, setWordFinded, setInputUser, newGame, incrementLife, setGameStatus }}>
        {children}
    </GameContext.Provider>
}
