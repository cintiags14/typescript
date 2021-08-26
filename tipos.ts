// boolean
let isopen: boolean
isopen = true

// number (int, float, hex, binary)
let total: number
total = 0xff0

//String ('oi', "oi", `oi`)
let message: string
message = `oi ${isopen}`

// array (type[])
let itens: string[]
itens = ["opa", "opa"]

let values: Array<number>
values = [1, 2, 3];

//tuple
let title: [number, string, string];
title = [1,"oi", "oi"];

//enum
enum colors {
    white = '#fff',
    black = '#000'
}

//void (vazio)
function logger(): void{
    console.log("oi")
}

// null / undefined
type oi = string | undefined;

//never 
function error(): never {
    throw new Error("error");
}

//object
let cart: object;

cart = {
    key: "oi"
}
