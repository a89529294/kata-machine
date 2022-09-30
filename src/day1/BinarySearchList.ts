export default function bs_list(haystack: number[], needle: number): boolean {
    let l = 0;
    let h = haystack.length;
    do {
        const m = Math.floor(l + (h - l) / 2);
        if (haystack[m] === needle) return true;
        else if (haystack[m] < needle) l = m + 1;
        else h = m;
    } while (l < h);
    return false;
}
