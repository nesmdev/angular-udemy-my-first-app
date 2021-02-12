import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MissionService } from '../mission.service';

@Component({
  selector: 'app-astronaut',
  template: `
    <p>
      {{ astronaut }}: <strong>{{ mission }}</strong>
      <button (click)="confirm()" [disabled]="!announced || confirmed">
        Confirm
      </button>
    </p>
  `,
  styles: [],
})
export class AstronautComponent implements OnInit, OnDestroy {
  @Input() astronaut: string;

  mission = '<no mission announced>';
  announced = false;
  confirmed = false;

  subscription: Subscription;

  constructor(private missionSrv: MissionService) {
    this.subscription = missionSrv.missionAnnonunced$.subscribe(
      (mission) => {
        this.mission = mission;
        this.announced = true;
        this.confirmed = false;
        console.log('mission...', mission);
      },
      (e) => console.log('error', e),
      () => console.log('Complete!!')
    );
  }

  ngOnInit(): void {
    console.log('astronaut', this.astronaut);
  }

  confirm() {
    this.confirmed = true;
    this.missionSrv.confirmMission(this.astronaut);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
