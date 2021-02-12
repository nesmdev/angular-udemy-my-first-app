import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MissionService {
  private missionAnnouncedSrc = new Subject<string>();
  private missionConfirmedSrc = new Subject<string>();

  missionAnnonunced$ = this.missionAnnouncedSrc.asObservable();
  missionConfirmed$ = this.missionConfirmedSrc.asObservable();

  constructor() {}

  announceMission(mission: string) {
    this.missionAnnouncedSrc.next(mission);
    console.log('Mission announced!!', mission);
  }
  confirmMission(astronaut: string) {
    this.missionConfirmedSrc.next(astronaut);
    console.log('Mission confirmed!!', astronaut);
  }
}
