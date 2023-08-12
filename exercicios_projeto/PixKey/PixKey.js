class PixKey{
    #key;
    constructor(key, client, bank){
        this.#key = key;
        this.client = client;
        this.bank = bank; 
    }
    get key(){
        return this.#key;
    }
}
module.exports = { PixKey };