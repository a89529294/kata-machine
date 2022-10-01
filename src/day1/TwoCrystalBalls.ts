export default function two_crystal_balls(breaks: boolean[]): number {
    const l = breaks.length;
    const d = Math.floor(Math.sqrt(l));
    for (let i = d - 1; i < l; i += d) {
        if (breaks[i]) {
            for (let j = i - d + 1; j < i + 1; j++) {
                if (breaks[j]) return j;
            }
        }
    }
    return -1;
}

// export default function two_crystal_balls(breaks: boolean[]): number {
//     const jmpAmount = Math.floor(Math.sqrt(breaks.length));

//     let i = jmpAmount;
//     for (; i < breaks.length; i += jmpAmount) {
//         if (breaks[i]) break;
//     }

//     i -= jmpAmount;
//     for (let j = 0; j < jmpAmount + 1 && i < breaks.length; i++, j++) {
//         if (breaks[i]) return i;
//     }
//     return -1;
// }
