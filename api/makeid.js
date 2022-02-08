export let makeid = (length) => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  let output = ""
  for(let i = 0; i <= length; i++){
    output += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return output
}