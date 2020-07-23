import { ActorValueInfo, Actor } from "skyrimPlatform";

export interface AValue{
    name:string;
    permanentModifier:number;
    temporaryModifier:number;
    damageModifier:number;
    baseValue:number;
};

export interface ActorValues {
    health:AValue;
    stamina:AValue;
    magicka:AValue;
};

export let calculateValue = (value:AValue) : number =>{
    return value.baseValue + value.permanentModifier + value.temporaryModifier + value.damageModifier;
};

export let isAValueEqual = (first:AValue, second:AValue): boolean =>{
    return calculateValue(first) === calculateValue(second);
};

export let getValue  = (actor:Actor, name:string): AValue => {
    let av:ActorValueInfo = ActorValueInfo.getActorValueInfoByName(name);
    let result: AValue;

    if(!actor)
    throw new Error("getValue: actor == nullptr");

    result.name = av.getName();
    result.damageModifier = 0;
    result.permanentModifier = 0;
    result.temporaryModifier = 0;
    result.baseValue = av.getBaseValue(actor);

    return result;
};

export let setActorValue = (actor:Actor, value:AValue): void => {
    if(!actor)
    throw new Error("setActorValue: actor == nullptr");

    actor.setActorValue(value.name, calculateValue(value));
};

export let getActorValues = (actor:Actor): ActorValues =>  {
    let result:ActorValues;

    if(!actor)
    throw new Error("getActorValues: actor == nullptr");
    
    result.health = getValue(actor, "Health");
    result.stamina = getValue(actor, "Stamina");
    result.magicka = getValue(actor, "Magicka");

    return result;
};

