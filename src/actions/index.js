import { NAME } from './types';

export function name(name) {
    return {
        type: NAME,
        payload: name
    };
}