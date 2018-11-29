import { ICommitElement } from './ICommitElement';

export interface IUserElement {
    user: string;
    commitsPerUser: ICommitElement[];
}
