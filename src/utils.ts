export function getRandomTailwindString(higher_limit:number, lower_limit:number):string {
    const randomNumber = Math.floor(Math.random() * (higher_limit - lower_limit + 1) + lower_limit)
    const ans = randomNumber === 1 ? 'hover:bg-first-color' : randomNumber === 2 ? 'hover:bg-second-color' : randomNumber === 3 ? 'hover:bg-third-color' : randomNumber === 4 ? 'hover:bg-fourth-color' : randomNumber === 5 ? 'hover:bg-fifth-color' : 'hover:bg-sixth-color'
    return ans
}