import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-binding-example',
  templateUrl: './binding-example.component.html',
  styleUrls: ['./binding-example.component.css']
})
export class BindingExampleComponent implements OnInit {

  private counterVal = 0;

  /*
    One-way binding by @Input decorator
    To set this property in component you should use next syntax ['any input name'] on component tag in template
    Like this <app-binding-example [counterTitle]="any value here(static or variable)"></app-binding-example>
  */
  @Input()
  counterTitle = 'Title';

  /*
    Two-way binding example
    To create the two-way binding for the component field:
      First: you should create @Output
      Secondly: you should create the 'get' and 'set' method for field
      Thirdly: you should add an @Input decorator to 'get' method
      Fourthly: you should emit event in created @Output in  'set' method
    To bind fields by two way binding you should use next syntax [(any two-way binding field name)]
    Like this <app-binding-example [(counter)]="any field of component in which template it use"></app-binding-example>
  */
  @Output()
  counterChange = new EventEmitter<number>();

  set counter(counter: number) {
    this.counterVal = counter;
    this.counterChange.emit(this.counterVal);
  }

  @Input()
  get counter() {
    return this.counterVal;
  }

  /*
    One-way binding by @Output decorator
    Use this to emit your own events by component
    To set the type of emitted value you should pass type in <> when creating EventEmitter class
    To fire event, you should call emit() method of EventEmitter class, with a parameter which you want to send
    To listen this event in component you should use next syntax (any-output-name) on component tag in template
    Like this <app-binding-example (operation)="any public method of component in which template it use" ></app-binding-example>
    To pass emitted value to listener you should pass on it the `$event` parameter
  */
  @Output()
  operation = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onButtonClick(event: MouseEvent, operationType: string) {
    switch (operationType) {
      case 'plus': {
        this.counter++;
        break;
      }
      case 'minus': {
        this.counter--;
        break;
      }
    }
    this.operation.emit(operationType);
  }

}
