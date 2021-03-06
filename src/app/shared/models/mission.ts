import {Employe} from './employe';
import {Voiture} from './voiture';

export class Mission {
  id: number;
  employe: Employe = new Employe();
  voiture: Voiture = new Voiture();
  montant: number;
  dateDebut: string;
  dateFin: string;
  objet: string;
}
export class MissionDTO {
  employeId: number ;
  voitureId: number ;
  montant: number;
  dateDebut: string;
  dateFin: string;
  objet: string;
}
