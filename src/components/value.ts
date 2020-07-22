import { Game, ActorValueInfo } from "skyrimPlatform";

export class Value {
    constructor(private name:string, private permanentModifier:number,
                private temporaryModifier:number, private damageModifier:number,
                private baseValue:number){};

    public getName() : string { return this.name; };
    public getBaseValue() : number { return this.baseValue; };
    public getValue() : number { return this.baseValue + this.permanentModifier + this.temporaryModifier + this.damageModifier ; };
};

export let getPlayerValues = (): Array<Value> =>  {
    let health = new Value("Health", 0, 0,0, 0);
    let stamina = new Value("Stamina", 0, 0,0, 0);
    let magicka = new Value("Magicka", 0, 0,0, 0);
    return [health, stamina, magicka];
};

export let getValue  = (name:string): Value => {
    let res:ActorValueInfo = ActorValueInfo.getActorValueInfoByName(name);
    return new Value(res.getName(),0,0, 0, res.getBaseValue(Game.getPlayer()));
};