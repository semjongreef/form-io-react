export function form(config: any): (state: {
    id: string;
    isActive: boolean;
    lastUpdated: number;
    form: {};
    url: string;
    error: string;
} | undefined, action: any) => {
    isActive: boolean;
    id: any;
    form: any;
    url: any;
    error: string;
    lastUpdated: number;
} | {
    isActive: boolean;
    isInvalid: boolean;
    error: any;
    id: string;
    lastUpdated: number;
    form: {};
    url: string;
};
//# sourceMappingURL=reducers.d.ts.map