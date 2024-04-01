String.prototype.swapCharacter = function() {
    const upperchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerchars = "abcdefghijklmnopqrstuvwxyz";
    let result = []
    for(i=0; i<this.length; i++) {
        if(upperchars.indexOf(this[i]) !== -1) {
            result.push(this[i].toLowerCase())
        }
        else if(lowerchars.indexOf(this[i]) !== -1) {
            result.push(this[i].toUpperCase())
        }
        else {
            result.push(this[i])
        }
    }
    return result.join("");
}

const op = 'The Quick Brown Fox'.swapCharacter();
console.log(op)