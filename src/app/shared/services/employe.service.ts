import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Config} from '../config';
import {Employe} from '../models/employe';

@Injectable()
export class EmployeService {


  constructor(private httpClient: HttpClient) {

  }


  add(employe: Employe) {
    return this.httpClient.post(Config.baseUrl + '/api/employe', employe);
  }

  getAll() {
    return this.httpClient.get(Config.baseUrl + '/api/employe');
  }

  getById(employeId: number) {
    return this.httpClient.get(Config.baseUrl + '/api/employe/' + employeId);
  }

  edit(employe: Employe) {
    return this.httpClient.put(Config.baseUrl + '/api/voiture/' + employe.id, employe);
  }

  deleteById(id: number) {
    return this.httpClient.delete(Config.baseUrl + '/api/employe/' + id);
  }
}

