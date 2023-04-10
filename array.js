const returnArray = (data1, data2) => {
    return [data1, data2];
}


const [userName, id] = returnArray("Enrique", 4815162342);

console.log(userName, id);