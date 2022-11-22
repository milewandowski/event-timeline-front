import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Event } from '../model/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {


  private apiEventUrl = `${environment.apiUrl}/event`;

  constructor(private httpClient: HttpClient) {
  }

  public getEvent(id: number): Observable<Event> {
    return this.httpClient.get<Event>(`${this.apiEventUrl}/${id}`);
  }

  public getEvents(sortDirection: string, pageIndex: number, pageSize: number): Observable<any> {
    return this.httpClient.get<any>(this.apiEventUrl, {
      params: new HttpParams()
        .set('sort', sortDirection)
        .set('page', pageIndex.toString())
        .set('size', pageSize.toString())
    });
  }

  public getEventsManagement(fromStartDate: string, fromEndDate: string, 
    sortDirection: string, pageIndex: number, pageSize: number): Observable<any> {
    var params = new HttpParams()
      .set('sort', sortDirection)
      .set('page', pageIndex.toString())
      .set('size', pageSize.toString());

      if (fromStartDate !== null) {
        params = params.set('fromStartDate', fromStartDate);
      }

      if (fromEndDate !== null) {
        params = params.set('fromEndDate', fromEndDate);
      }

    return this.httpClient.get<any>(`${this.apiEventUrl}`, {params});
  }
}
