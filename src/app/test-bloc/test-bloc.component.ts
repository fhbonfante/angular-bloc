import { Component, OnInit } from '@angular/core';
import { Bloc, BlocEvent, BlocState } from '../Bloc/bloc';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-test-bloc',
  templateUrl: './test-bloc.component.html',
  styleUrls: ['./test-bloc.component.scss']
})
export class TestBlocComponent extends Bloc implements OnInit {

  constructor() { 
    super();
  }

  ngOnInit() {
  }

  mapStateFromEvent($event: BlocEvent): Observable<BlocState> {
    return null;
  }
  
  initialize() {}

  dispose() {}
}