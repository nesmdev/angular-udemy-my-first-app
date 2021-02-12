import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ReversePipe } from 'src/app/shared/pipes/reverse.pipe';
import { MissionService } from '../mission.service';

@Component({
  selector: 'app-mission-control',
  template: `
    <h2>Mission Control</h2>
    <button (click)="announce()">Announce mission</button>
    <div id="astronauts">
      <app-astronaut
        *ngFor="let astronaut of astronauts | reverse"
        [astronaut]="astronaut"
      >
      </app-astronaut>
    </div>

    <h3>History</h3>
    <ul>
      <li *ngFor="let event of history | reverse">{{ event }}</li>
    </ul>
  `,
  styles: [],

  providers: [MissionService, ReversePipe],
})
export class MissionControlComponent implements OnInit {
  astronauts = [
    'Neil Armstrong',
    'William B. Bridgeman',
    'Albert S. Crossfield',
  ];
  history: string[] = [];
  missions = ['Fly to the moon!', 'Fly to mars!', 'Fly to Vegas!'];
  nextMission = 0;
  subscription: Subscription;

  constructor(private missionSrv: MissionService) {
    this.subscription = missionSrv.missionConfirmed$.subscribe((astronaut) => {
      this.history.push(`${astronaut} confirmed the mission`);
    });
  }

  ngOnInit(): void {}

  announce() {
    const mission = this.missions[this.nextMission++];
    this.missionSrv.announceMission(mission);
    this.history.push(`Mission "${mission}" announced`);
    if (this.nextMission >= this.missions.length) {
      this.nextMission = 0;
    }
  }
}
