import { Injectable } from '@angular/core';
import { Annonce} from '../models/annonce';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {
photosPourTest:[string, string, string, string, string, string] = ['test_photo_1.png', 'test_photo_2.png', 'test_photo_3.png', 'test_photo_4.png', 'test_photo_5.png','test_photo_6.png'];
annonces = [

  new Annonce(1, this.photosPourTest, 'test param url', 'courte description', 'longue description'),
  new Annonce(2, this.photosPourTest, 'test param url', 'courte description', 'longue description'),
  new Annonce(3, this.photosPourTest, 'test param url', 'courte description', 'longue description')

];

  constructor() { }

  getAllAnnonces(): Annonce[] {
    return this.annonces
    console.log(this.annonces[0].photos);
  }

  getOneAnnonceById(id:number):Annonce{
    console.log(this.annonces.filter(fn => fn.id === id )[0]);

    return this.annonces.filter(fn => fn.id === id )[0];


  }

}
