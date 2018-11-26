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
import { SetupService } from './setup.service';
import { IAvailableMetricsGetResponse } from '../interfaces/IAvailableMetricsGetResponse';

@Injectable()
export class MetricService {

    constructor(private http: HttpClient, private setupService: SetupService) {
    }

    loadAvailableMetrics(): Observable<IMetric[]> {
      return this.http.get<IAvailableMetricsGetResponse>(`${AppConfig.BASE_URL}/projects/8/metrics`)
        .pipe(map((result: IAvailableMetricsGetResponse) => result._embedded.metricResourceList.map(metric => AppConfig.getShortNameByMetricName(metric.metricName))));
    }

    loadDeltaTree(accessToken: string, currentCommit: ICommit, previousCommit: ICommit, metricNames: string[]): Observable<INode> {
        //console.log("--------LOADING-DELTATREE---------");
        //console.log(accessToken);

        const body = {
            'commit1': currentCommit.name,
            'commit2': previousCommit.name,
            'metrics': metricNames
        };

        return this.http.post<INode>(
          `${AppConfig.BASE_URL}/projects/8/metricvalues/deltaTree`,
          body,
          {headers: {'Authorization': accessToken}}
        );
    }
}
