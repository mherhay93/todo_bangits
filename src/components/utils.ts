export function addWrap(str:string, count:number = 194) {
    if(str.includes(' ') || str.length < count) {
        return str
    }
    if(str.length > count) {
      return str.slice(0, count) + '\n' + str.slice(0, count)
    }
}