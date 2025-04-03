export function submission(config: any): (state: {
    formId: string;
    id: string;
    isActive: boolean;
    lastUpdated: number;
    submission: {};
    url: string;
    error: string;
} | undefined, action: any) => {
    formId: any;
    id: any;
    url: any;
    submission: {};
    isActive: boolean;
    lastUpdated: number;
    error: string;
} | {
    id: any;
    submission: any;
    isActive: boolean;
    error: string;
    formId: string;
    lastUpdated: number;
    url: string;
} | {
    isActive: boolean;
    isInvalid: boolean;
    error: any;
    formId: string;
    id: string;
    lastUpdated: number;
    submission: {};
    url: string;
};
//# sourceMappingURL=reducers.d.ts.map