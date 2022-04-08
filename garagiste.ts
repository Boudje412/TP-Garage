import{Personne} from "./personne"

export class Garagiste extends Personne
{
    conduire():void
    {
        console.log("je conduis")
    }
    presenterGarage(garage:Garage):void
    {
        
    }
    faireLePleinDeToutesLesVoitures():void
    {
        console.log("faireLePleinDeToutesLesVo")
    }
}