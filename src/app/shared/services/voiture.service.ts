import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Voiture} from '../models/voiture';
import {Config} from '../config';

@Injectable()
export class VoitureService {


  constructor(private httpClient: HttpClient) {

  }


  add(voiture: Voiture) {
    return this.httpClient.post(Config.baseUrl + '/api/voiture', voiture);
  }

  getAll() {
    return this.httpClient.get(Config.baseUrl + '/api/voiture');
  }

  getById(voitureId: number) {
    return this.httpClient.get(Config.baseUrl + '/api/voiture/' + voitureId);
  }

  edit(voiture: Voiture) {
    return this.httpClient.put(Config.baseUrl + '/api/voiture/' + voiture.id, voiture);
  }

  deleteById(id: number) {
    return this.httpClient.delete(Config.baseUrl + '/api/voiture/' + id);
  }
}

