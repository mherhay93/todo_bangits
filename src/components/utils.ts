enum statuses {
    pending = 'red',
    completed = 'green',
    expired = 'gray'
}

export function addWrap(str: string, count: number = 100) {
    if (str.includes(' ') || str.length < count) {
        return str
    }
    if (str.length > count) {
        return str.slice(0, count) + '\n' + str.slice(0, count)
    }
}

export function checkStatus(expired?:boolean, checked?:boolean) {
    if (expired) {
        return statuses.expired
    }
    if (checked && !expired) {
        return statuses.completed
    }
    return statuses.pending
}
