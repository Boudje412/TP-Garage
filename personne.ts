export abstract class Personne
{
    public _age: number;
    public _nom: string;
    constructor(_age: number, _nom: string)
    {
        this._age = _age;
        this._nom = _nom;
    }
    //getter/setter
    get nom(): string
    {
        return this._nom;
    }
    set nom(val: string)
    {
        this._nom = val;
    }
    get age(): number
    {
        return this._age;
    }
    set age(val: number)
    {
        this._age = val;
    }

    sePresente():void
    {
        console.log("Bonjour, je m'appelle "+this._nom+" et j'ai "+this._age+" ans")
    }
}