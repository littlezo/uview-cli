export function password(value) {
    let pattern = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]+\S{7,31}$/;
    if (!pattern.exec(value)) {
        return false;
    }
    return true;
}
export function isQQ(value) {
    let pattern = /^[1-9]\d{4,10}$/;
    return pattern.test(value) ? true : false;
}
