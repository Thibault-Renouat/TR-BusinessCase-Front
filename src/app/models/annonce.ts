export class Annonce {

  id:number;
  photos: [string, string, string, string, string, string];
  titre: string;
  descrCourte: string;
  descrLongue: string;
  anneeMiseCircu: Date;
  kms: number;
  prix: number;
  marque: string;
  modele: string;
  carburant: string;
  hybride:boolean;


  constructor(id: number=null,photos: [string, string, string, string, string, string]= null, titre: string=null, descrCourte: string=null, descrLongue: string=null, anneeMiseCircu: Date= new Date(), kms: number=null, prix: number=null, marque: string=null, modele: string=null, carburant: string=null, hybride: boolean=null) {
    this.photos = photos;
    this.titre = titre;
    this.descrCourte = descrCourte;
    this.descrLongue = descrLongue;
    this.anneeMiseCircu = anneeMiseCircu;
    this.kms = kms;
    this.prix = prix;
    this.marque = marque;
    this.modele = modele;
    this.carburant = carburant;
    this.hybride = hybride;
    this.id = id;
  }





}
