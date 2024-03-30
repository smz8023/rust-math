/* tslint:disable */
/* eslint-disable */
/**
* @param {string} a
* @param {string} b
* @returns {string}
*/
export function add(a: string, b: string): string;
/**
* @param {string} a
* @param {string} b
* @returns {string}
*/
export function subtract(a: string, b: string): string;
/**
* @param {string} a
* @param {string} b
* @returns {string}
*/
export function multiply(a: string, b: string): string;
/**
* @param {string} a
* @param {string} b
* @param {number} decimal_places
* @returns {string | undefined}
*/
export function divide(a: string, b: string, decimal_places: number): string | undefined;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly add: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly subtract: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly multiply: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly divide: (a: number, b: number, c: number, d: number, e: number, f: number) => void;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {SyncInitInput} module
*
* @returns {InitOutput}
*/
export function initSync(module: SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
