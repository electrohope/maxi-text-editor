import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CoreModule } from '../../core.module';
import {environment} from '../../../../environments/environment';
import {  Subject, BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: CoreModule
})
export class SynonymService {
  word$ = new Subject();
  loading$ = new BehaviorSubject(false);
  constructor(private http: HttpClient) {}

  isLoading(){
    return this.loading$.asObservable();
  }
  getSynonyms(word) : Observable<any>{
    this.loading$.next(true);
    return this.http.get(environment.SYNONYMS_URL+'?ml='+word).pipe(
      map((result)=>{ 
        this.loading$.next(false)
        return result
      })
    )
  }

  setSynonym(synonym){
    this.word$.next(synonym);
  }
  getSynonym(){
    return this.word$.asObservable();
  }

}
