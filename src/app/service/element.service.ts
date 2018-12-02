import {Injectable} from '@angular/core';
import { Subject } from 'rxjs';
import {IUserElement} from '../interfaces/IUserElement';
import {ICommitElement} from '../interfaces/ICommitElement';

@Injectable()
export class ElementService {
  private userElementsSource = new Subject<IUserElement[]>();
  private commitElementsSource = new Subject<ICommitElement[]>();

  userElements$ = this.userElementsSource.asObservable();
  commitElements$ = this.commitElementsSource.asObservable();

  saveElements(userElements: IUserElement[], commitElements: ICommitElement[]) {
    this.userElementsSource.next(userElements);
    this.commitElementsSource.next(commitElements);
  }
}
