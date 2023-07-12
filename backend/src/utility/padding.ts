export const evenPad = (input: string, fillLength: number, location: "start" | "end") => {
    if(location == "end"){
        return input.padEnd(fillLength, " ")
    }else{
        return input.padStart(fillLength, " ")
    }
}