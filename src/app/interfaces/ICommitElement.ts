import { ICommit } from './ICommit';
import { ITableRow } from './ITableRow';

export interface ICommitElement {
    currentCommit: ICommit;
    previousCommit: ICommit;
    date: string;
    totalPoints: number;
    tableRows: ITableRow[];
}
