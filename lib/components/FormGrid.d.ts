import { Form as FormType } from '@formio/core';
import { JSON } from './Form';
import { ReactNode } from 'react';
export type Action = {
    name: string;
    fn: (id: string) => void;
};
type SomeRequired<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;
type FormFromServer = SomeRequired<FormType, '_id'>;
export type ComponentProp<T = object> = (props: T) => JSX.Element;
export type FormGridProps = {
    actions?: Action[];
    forms?: FormFromServer[];
    components?: {
        Container?: ComponentProp<{
            children: ReactNode;
        }>;
        FormContainer?: ComponentProp<{
            children: ReactNode;
        }>;
        FormNameContainer?: ComponentProp<{
            children: ReactNode;
            onClick?: () => void;
        }>;
        FormActionsContainer?: ComponentProp<{
            children: ReactNode;
        }>;
        FormActionButton?: ComponentProp<{
            action: Action;
            onClick: () => void;
        }>;
        PaginationContainer?: ComponentProp<{
            children: ReactNode;
        }>;
        PaginationButton?: ComponentProp<{
            children: ReactNode;
            isActive?: boolean;
            disabled?: boolean;
            onClick: () => void;
        }>;
    };
    onFormClick?: (id: string) => void;
    formQuery?: {
        [key: string]: JSON;
    };
    limit?: number;
};
export declare const DEFAULT_COMPONENTS: {};
export declare const FormGrid: ({ actions, components, onFormClick, forms, formQuery, limit, }: FormGridProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=FormGrid.d.ts.map