import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Config} from '../config';
import {Mission, MissionDTO} from '../models/mission';

@Injectable()
export class MissionService {


  constructor(private httpClient: HttpClient) {

  }

  add(mission: MissionDTO) {
    return this.httpClient.post(Config.baseUrl + '/api/mission', mission);
  }

  getAll() {
    return this.httpClient.get(Config.baseUrl + '/api/mission');
  }

  getById(missionId: number) {
    return this.httpClient.get(Config.baseUrl + '/api/mission/' + missionId);
  }

  edit(mission: Mission) {
    return this.httpClient.put(Config.baseUrl + '/api/mission/' + mission.id, mission);
  }

  deleteById(id: number) {
    return this.httpClient.delete(Config.baseUrl + '/api/mission/' + id);
  }
}

