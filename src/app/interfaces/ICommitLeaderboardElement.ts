import { ICommit } from './ICommit';
import { ITableRow } from './ITableRow';

export interface ICommitLeaderboardElement {
    currentCommit: ICommit;
    previousCommit: ICommit;
    totalPoints: number;
    tableRows: ITableRow[];
}
