export function FtoC(temp){
    const celcius = (temp - 32)*(5/9)

    return celsius
}
export function FtoK(temp){
    const c = FtoC(temp)

    return c + 273.15
}