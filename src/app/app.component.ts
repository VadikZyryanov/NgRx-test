import { Component } from '@angular/core';
import { Store } from "@ngrx/store";
import {clear, countSelector, decrease, increase, updatedAtSelector} from "./reducers/counter";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public count$: Observable<number> = this.store.select(countSelector);
  public updatedAt$: Observable<number | undefined> = this.store.select(updatedAtSelector);
  public cannotDecrease$: Observable<boolean>;

  constructor(private store: Store) {
    this.cannotDecrease$ = this.count$.pipe(
      map(count => count <= 0)
    )
  }

  public increase(): void {
    this.store.dispatch(increase());
  }

  public decrease(): void {
    this.store.dispatch(decrease());
  }

  public clear(): void {
    this.store.dispatch(clear());
  }
}
