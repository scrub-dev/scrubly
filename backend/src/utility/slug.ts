export const generateSlug = (length: number) => {
    let charset = "abcdefghijklmnopqrstuvwxyz"
    let numset  = "0123456789"

    let validChars = [
        ...charset.toUpperCase().split(""),
        ...charset.toLowerCase().split(""),
        ...numset.split("")
    ]

    shuffleArray(validChars)

    let slug = ""
    while(slug.length < length) slug += validChars[Math.floor(Math.random() * validChars.length)]
    return slug

}

export const sanitiseSlug = (slug: string) => {
    let validRegex = /[^a-zA-Z0-9]*/g
    return slug.replaceAll(validRegex, "")
}

export const shuffleArray = (array: Array<any>) => {
    let pLen = array.length
    let idx = undefined;
    while(pLen) {
        idx = Math.floor(Math.random() * pLen--)

        let swap = array[pLen]
        array[pLen] = array[idx]
        array[idx] = swap
    }
    return array
}