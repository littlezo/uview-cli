export function color(color) {
    if (color.split('#').length == 2) {
        return { color: color };
    } else {
        return { color: color };
    }
}
export function bgColor(color) {
    if (color.split('#').length == 2) {
        return { backgroundColor: color };
    } else {
        return { backgroundColor: color };
    }
}
