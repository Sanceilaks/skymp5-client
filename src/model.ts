import { Movement } from './components/movement';
import { Animation } from './components/animation';
import { Look } from './components/look';
import { ActorValues } from './components/actorValues';

export interface FormModel {
    baseId?: number;
    movement?: Movement;
    animation?: Animation;
    numMovementChanges?: number;
    look?: Look;
    actorValues?: ActorValues;
}

export interface WorldModel {
    forms: FormModel[];
    playerCharacterFormIdx: number;
}