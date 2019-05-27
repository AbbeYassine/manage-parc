import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Config} from '../config';
import {Maintenance, MaintenanceDTO} from '../models/maintenance';

@Injectable()
export class MaintenanceService {


  constructor(private httpClient: HttpClient) {

  }

  add(maintenance: MaintenanceDTO) {
    return this.httpClient.post(Config.baseUrl + '/api/maintenance', maintenance);
  }

  getAll() {
    return this.httpClient.get(Config.baseUrl + '/api/maintenance');
  }

  getById(maintenanceId: number) {
    return this.httpClient.get(Config.baseUrl + '/api/maintenance/' + maintenanceId);
  }

  edit(maintenance: MaintenanceDTO) {
    return this.httpClient.put(Config.baseUrl + '/api/maintenance/' + maintenance.id, maintenance);
  }

  deleteById(id: number) {
    return this.httpClient.delete(Config.baseUrl + '/api/maintenance/' + id);
  }
}

