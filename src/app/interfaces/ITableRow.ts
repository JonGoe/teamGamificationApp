import { ICommit } from './ICommit';

export interface ITableRow {
    metricName: string;
    currentCommitValue: any;
    previousCommitValue: any;
    difference: any;
    points: number;
}
