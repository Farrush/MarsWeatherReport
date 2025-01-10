export function FtoC(temp){
    

    return (temp - 32)*(5/9)
}
export function FtoK(temp){
    const c = FtoC(temp)

    return c + 273.15
}
export function dateFormatter(date){
    const d = new Date(date)

    //return d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear()
    return d.toDateString().slice(4, 100)
}