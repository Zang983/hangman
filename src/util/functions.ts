export const getData = async () =>{
    const datas = await fetch("/data.json")
    if(datas.ok)
        {
            const parsedDatas = await datas.json()
            const result = []
                for(const key of Object.keys(parsedDatas.categories)){
                    const newObj :{name:string,entries:{name:string,selected:boolean}[],wordFinded:0} = {
                        name :key,
                        entries : parsedDatas.categories[key],
                        wordFinded : 0,
                    } 
                    result.push(newObj)
                }
                return result
        }
    else 
        return -1
}

export const checkLetterInWord = (input:string,wordToFind:{ letter: string, finded: boolean }[],stringWord:string)=>{
    const word:{ letter: string, finded: boolean }[] = JSON.parse(JSON.stringify(wordToFind))
    let finded = false
    if(stringWord.toUpperCase().indexOf(input)!==-1){
        word.map(char=>(char.letter.toUpperCase()===input) && (char.finded = true))
        finded=true
    }
    return {word,finded}
}

export const displaySigns = (wordToFind:{ letter: string, finded: boolean }[])=>{
    const word:{ letter: string, finded: boolean }[] = JSON.parse(JSON.stringify(wordToFind))
    word.map(char=>{
        if(char.letter.toUpperCase().charCodeAt(0)<=64 || char.letter.toUpperCase().charCodeAt(0)>=(65+26))
            (char.finded = true)
        })
    return word
}

export const getRandomInt = (max:number) =>{
    return Math.floor(Math.random() * (max + 1));
  }

  export const checkWin = (actualGameStatus:string,word:{ letter: string, finded: boolean }[]) =>{
    return word.filter((letter:{ letter: string, finded: boolean })=>letter.finded===false).length === 0 ? "WIN" : actualGameStatus
  }