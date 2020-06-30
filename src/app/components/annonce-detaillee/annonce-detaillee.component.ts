import { Component, OnInit } from '@angular/core';
import { AnnonceService} from '../../services/annonce.service';
import { Annonce} from '../../models/annonce';

@Component({
  selector: 'app-annonce-detaillee',
  templateUrl: './annonce-detaillee.component.html',
  styleUrls: ['./annonce-detaillee.component.css']
})
export class AnnonceDetailleeComponent implements OnInit {

  annonces : Annonce[];


  constructor(private annonceService: AnnonceService) { }

  ngOnInit(): void {

    this.annonces= this.annonceService.getAllAnnonces()
    console.log(`les annonces importées: `);
    console.log(this.annonces);


  }

}
