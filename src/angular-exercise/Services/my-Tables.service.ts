import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

//import { CHARACTERS } from './mock-data';

@Injectable()
export class MyTableService {

  constructor() { }

 // getCharacters(): Observable<any[]>{
   // return Observable.of(CHARACTERS).delay(100);
  //}

  getColumns(): string[]{
    return ["SNo", "Problem Statement", "Examples"]
  }

  getNames():string[]{
    return ["Karthick","Laxman","Angular","Virtusa"]
  }

  getAccountNos():number[]{
    return [1,2,3,4]
  }

  getAnimals():string[]{
    return ["Elepant","Tiger","Lion"]
  }


}