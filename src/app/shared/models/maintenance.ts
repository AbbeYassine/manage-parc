import {Voiture} from './voiture';

export class Maintenance {
  id: number;
  voiture: Voiture = new Voiture();
  montant: number;
  datemaintenance: string;
  kilometrage: string;
}
