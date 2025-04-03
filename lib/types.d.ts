export const AllItemsPerPage: "all";
export type Column = {
    key: string;
    sort: (boolean | string | Function);
    title: string;
    value: Function;
    width: number;
};
/**
 * @typedef Column
 * @type {object}
 * @property {string} key
 * @property {(boolean|string|Function)} sort
 * @property {string} title
 * @property {Function} value
 * @property {number} width
 */
/**
 * @constant
 * @type {Column}
 */
export const Column: Column;
/**
 * @constant
 * @type {Column[]}
 */
export const Columns: Column[];
export type Operation = {
    action?: string | undefined;
    buttonType?: string | undefined;
    icon?: string | undefined;
    permissionsResolver?: Function | undefined;
    title?: string | undefined;
};
/**
 * @typedef Operation
 * @type {object}
 * @property {string} [action]
 * @property {string} [buttonType]
 * @property {string} [icon]
 * @property {Function} [permissionsResolver]
 * @property {string} [title]
 */
/**
 * @constant
 * @type {Operation}
 */
export const Operation: Operation;
/**
 * @constant
 * @type {Operation[]}
 */
export const Operations: Operation[];
/**
 * @typedef LabelValue
 * @type {object}
 * @property {string} label
 * @property {number} value
 */
/**
 * @constant
 * @type {(number|LabelValue)}
 */
export const PageSize: (number | LabelValue);
/**
 * @constant
 * @type {PageSize[]}
 */
export const PageSizes: (number | LabelValue)[];
export type LabelValue = {
    label: string;
    value: number;
};
//# sourceMappingURL=types.d.ts.map