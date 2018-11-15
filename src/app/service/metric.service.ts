import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject, Observable} from 'rxjs';
import {IDeltaTreeGetResponse} from '../interfaces/IDeltaTreeGetResponse';
import {ICommit} from '../interfaces/ICommit';
import {INode} from '../interfaces/INode';
import {IMetricMapping} from '../interfaces/IMetricMapping';
import {IMetric} from '../interfaces/IMetric';
import {AppConfig} from '../AppConfig';
import {delay, map, mergeMap} from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { IAvailableMetricsGetResponse } from '../interfaces/IAvailableMetricsGetResponse';

@Injectable()
export class MetricService {

    constructor(private http: HttpClient) {
    }

    loadAvailableMetrics(): Observable<IMetric[]> {
      return this.http.get<IAvailableMetricsGetResponse>(`${AppConfig.BASE_URL}/projects/1/metrics`)
        .pipe(map((result: IAvailableMetricsGetResponse) => result._embedded.metricResourceList.map(metric => AppConfig.getShortNameByMetricName(metric.metricName))));
    }

    loadDeltaTree(currentCommit: ICommit, previousCommit: ICommit, metricNames: string[]): Observable<INode> {
        const body = {
            'commit1': currentCommit.name,
            'commit2': previousCommit.name,
            'metrics': metricNames
        };

        //console.log(currentCommit.name);
        //console.log(this.http.post<INode>(`${AppConfig.BASE_URL}/projects/1/metricvalues/deltaTree`, body));

        return this.http.post<INode>(`${AppConfig.BASE_URL}/projects/1/metricvalues/deltaTree`, body);
    }

}
