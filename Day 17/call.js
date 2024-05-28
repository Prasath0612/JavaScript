const m={
    shirt:"available",
    pant:"available",
    tshirt:"unavailable"
}

const l={
    shirt:"unavailable",
    pant:"available",
    tshirt:"available"
}

function stock() {
    console.log(`${this.shirt} ${this.pant} ${this.tshirt}`)
}

stock.call(l);
stock.call(m);