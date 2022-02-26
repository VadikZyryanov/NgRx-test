import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public counter: number = 0;
  public updateAt?: number;

  public get checkDisabled(): boolean {
    return this.counter <= 0;
  }

  public increase(): void {
    this.updateAt = Date.now();
    this.counter++;
  }

  public decrease(): void {
    this.updateAt = Date.now();
    this.counter--;
  }

  public clear(): void {
    this.updateAt = Date.now();
    this.counter = 0;
  }
}
