export enum FilterType {
    SEARCH_STRING = 'SEARCH_STRING',
    ISSUE_TYPES = 'ISSUE_TYPES',
    ASSIGNEE = 'ASSIGNEE',
    PROJECTS = 'PROJECTS'
}

export enum FilterTypeNameMapping {
    SEARCH_STRING = 'Search string',
    ISSUE_TYPES = 'Issue types',
    PROJECTS = 'Projects',
    ASSIGNEE = 'Assignee'
}

export const allFilterTypeLabled = [
    {
        type: FilterType.SEARCH_STRING,
        title: FilterTypeNameMapping[FilterType.SEARCH_STRING],
        hidden: false,
        key: 'searchString'
    },
    {
        type: FilterType.ISSUE_TYPES,
        title: FilterTypeNameMapping[FilterType.ISSUE_TYPES],
        hidden: false,
        key: 'issueTypes'
    },
    {
        type: FilterType.PROJECTS,
        title: FilterTypeNameMapping[FilterType.PROJECTS],
        hidden: false,
        key: 'projects'
    },
    {
        type: FilterType.ASSIGNEE,
        title: FilterTypeNameMapping[FilterType.ASSIGNEE],
        hidden: false,
        key: 'assignee'
    }
];

export enum FieldType {
    INPUT = 'INPUT',
    SELECT = 'SELECT',
    ASSIGNEE = 'ASSIGNEE',
    PROJECTS = 'PROJECTS'
}

export interface FilterItem<T = any> {
    readonly type: FilterType;
    readonly value: T;
    readonly fieldType: FieldType;
    readonly key: string;
    readonly placeholder?: string;
    readonly title?: string;
}

export interface InputFilterItem extends FilterItem<string> {
}

export interface SelectFilterItem<D = any> extends FilterItem<Array<D>> {
    readonly options: Array<D>;
    readonly multiple: boolean;
    readonly titleKey: string;
    readonly itemValueKey?: string;
}

export interface InputModel {
    readonly type: FilterType;
    readonly key: string;
    readonly value?: any;
}