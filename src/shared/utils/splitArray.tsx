function splitArray(array:Array<any>, numChunks:number) {
    const chunkSize = Math.floor(array.length / numChunks);
    const remainder = array.length % numChunks;
    const chunks = [];

    let start = 0;

    for (let i = 0; i < numChunks; i++) {
        const end = start + chunkSize + (i < remainder ? 1 : 0);
        chunks.push(array.slice(start, end));
        start = end;
    }

    return chunks;
}

export default splitArray;
