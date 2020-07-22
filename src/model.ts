import { Movement } from './components/movement';
import { Animation } from './components/animation';
import { Look } from './components/look';
import { Value } from './components/value';

export interface FormModel {
    baseId?: number;
    movement?: Movement;
    animation?: Animation;
    numMovementChanges?: number;
    look?: Look;
    values?: Array<Value>;
}

export interface WorldModel {
    forms: FormModel[];
    playerCharacterFormIdx: number;
}