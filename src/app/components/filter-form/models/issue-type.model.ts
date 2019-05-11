
export enum IssueType {
    OPEN = 'OPEN',
    IN_PROGRESS = 'IN_PROGRESS',
    CLOSED = 'CLOSED'
}

export interface IssueTypeModel {
    readonly type: IssueType;
    readonly title: string;
}

export enum IssueTypeNameMapping {
    OPEN = 'Open',
    IN_PROGRESS = 'In Progress',
    CLOSED = 'Closed'
}

export const allIssueType: IssueTypeModel[] = [
    {
        type: IssueType.OPEN,
        title: IssueTypeNameMapping[IssueType.OPEN]
    },
    {
        type: IssueType.IN_PROGRESS,
        title: IssueTypeNameMapping[IssueType.IN_PROGRESS]
    },
    {
        type: IssueType.CLOSED,
        title: IssueTypeNameMapping[IssueType.CLOSED]
    },
];