import { IUserElement } from './IUserElement';

export interface IUserLeaderboardElement {
    userData: IUserElement;
    totalUserPoints: number;
    averageUserPoints: number;
    commitCount: number;
    bestCommitName: string;
    bestCommitDate: string;
    bestCommitPoints: number;
}
