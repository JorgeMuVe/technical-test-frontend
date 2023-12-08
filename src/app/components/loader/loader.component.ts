import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { LOADER_DATA_CONFIG_1, LOADER_DATA_CONFIG_2 } from 'src/app/data/loader.const';
import { ILoader } from 'src/app/models/Loader';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit, OnDestroy {

  @Input() timeChange: number = 2;
  @Input() typeConfig: number = 1;
  @Input() showButtons: boolean = true;
  @Input() showSteps: boolean = true;

  public currentPosition: number = 0;
  public items: ILoader[] = [];

  interval: any;

  constructor() { }

  ngOnInit(): void {
    switch (this.typeConfig) {
      case 1:
        this.items = LOADER_DATA_CONFIG_1;
        break;
      case 2:
        this.items = LOADER_DATA_CONFIG_2;
        break;
      default:
        this.items = LOADER_DATA_CONFIG_1;
        break;
    }
    this.items.map((i, index) => {
      i.id = index;
      i.marginLeft = 0;
    })
    this.interval = setInterval(() => {
      this.setNextPosition();
    }, this.timeChange * 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  setCurrentPosition(position: number) {
    this.currentPosition = position;
    this.items.find((i) => i.id === 0)!.marginLeft = -100 * position;
  }

  setNextPosition() {
    let finalPercentage = 0;
    let nextPosition = this.currentPosition + 1;
    if (nextPosition <= this.items.length - 1) {
      finalPercentage = -100 * nextPosition
    } else {
      nextPosition = 0
    }
    this.items.find((i) => i.id === 0)!.marginLeft = finalPercentage;
    this.currentPosition = nextPosition;
  }

  setBackPosition() {
    let finalPercentage = 0;
    let backPosition = this.currentPosition - 1;
    if (backPosition >= 0) {
      finalPercentage = -100 * backPosition
    } else {
      backPosition = this.items.length - 1
      finalPercentage = -100 * backPosition
    }
    this.items.find(i => i.id === 0)!.marginLeft = finalPercentage;
    this.currentPosition = backPosition
  }

}
