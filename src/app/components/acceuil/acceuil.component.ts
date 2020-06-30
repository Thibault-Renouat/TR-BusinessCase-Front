import { Component, OnInit } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnnonceService} from '../../services/annonce.service';
import { Annonce} from '../../models/annonce';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {

  annonces : Annonce[];

  constructor(private annonceService: AnnonceService) { }

  ngOnInit(): void {
    this.annonces= this.annonceService.getAllAnnonces()
    console.log(`les annonces importées: `);
    console.log(this.annonces);
    console.log(`l'id de l'annonce 2: `);
    console.log(typeof this.annonces[1].id);

  }

}
