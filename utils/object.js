export function isEmptyObject(obj) {
    return Object.entries(obj).length === 0 && obj.constructor === Object;
}

