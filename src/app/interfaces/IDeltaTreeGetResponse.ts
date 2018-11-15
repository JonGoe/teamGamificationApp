import {INode} from './INode';

export interface IDeltaTreeGetResponse {
    _embedded: {
      rootNode: INode
    };
}
