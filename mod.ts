// mod.ts
/**
 * A module providing a function to greet and show respect to elderly.
 * @module
 *
 * ```ts
 * import { greet } from '@po/lite';
 *
 * greet('Tay!') // 'Mano po, Tay!'
 * ```
 */

/**
 * Greet a person.
 *
 * @param name The name of the person to greet.
 */
export function greet(name: string) {
    console.log(`Mano po, ${name}!`);
}
