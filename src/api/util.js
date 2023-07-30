/// Util工具文件

export function minifyBts (bts) {
    const buf = new ArrayBuffer(bts.length);
    const uint8Arr = new Uint8Array(buf);
    uint8Arr.set(bts, 0);

    return uint8Arr;
}
