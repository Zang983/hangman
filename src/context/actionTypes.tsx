interface getDataAction {
    type: "getData",
    payload: {
        name: string,
        entries: { name: string, selected: boolean }[],
        wordFinded: number
    }[]
}
interface changeCategoryAction {
    type: "changeCategory",
    payload: string
}
interface changeWordToFindAction {
    type: "changeWordToFind"
}
interface setWordFindedAction {
    type: "setWordFinded"
}
interface setInputUserAction {
    type: "setInputUser",
    payload: string
}
interface setGameStatusAction {
    type: "setGameStatus",
    payload: string,
}
interface setLifeAction {
    type: "setLife",
    payload: number
}
interface resetGameAction {
    type: "resetGame"
}

export type Action = getDataAction | changeCategoryAction | changeWordToFindAction | setWordFindedAction | setInputUserAction | setGameStatusAction | setLifeAction | resetGameAction