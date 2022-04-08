export abstract class Vehicules
{
    protected _marque: string;
    //getter/setter
    get marque(): string { return this._marque; }
    set marque(value: string) { this._marque = value;}
    constructor(marque: string)
    {
        this._marque =marque;
    }
    avancer(){}
    reculer(){}
    freiner(){}
    afficherVehicule(){}
}