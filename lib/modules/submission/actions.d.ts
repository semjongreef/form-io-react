export function clearSubmissionError(name: any): {
    type: string;
    name: any;
};
export function resetSubmission(name: any): {
    type: string;
    name: any;
};
export function getSubmission(name: any, id: any, formId: any, done?: () => void): (dispatch: any, getState: any) => void;
export function saveSubmission(name: any, data: any, formId: any, done?: () => void): (dispatch: any) => void;
export function deleteSubmission(name: any, id: any, formId: any, done?: () => void): (dispatch: any) => any;
//# sourceMappingURL=actions.d.ts.map