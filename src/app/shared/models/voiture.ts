export class Voiture {
  id: number;
  immatriculation: string;
  marque: string;
  modele: string;
  puissance: string;
  carburant: string;
  dateMiseCirculation: string;

  etat: boolean = true;
  taxes: boolean;
  visite: boolean;
}
