import { Component, OnInit } from '@angular/core';
import { AnnonceService} from '../../services/annonce.service';
import { Annonce} from '../../models/annonce';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-annonce-detaillee',
  templateUrl: './annonce-detaillee.component.html',
  styleUrls: ['./annonce-detaillee.component.css']
})
export class AnnonceDetailleeComponent implements OnInit {

  annonces : Annonce[];
  annonceDetail: Annonce;
  id:number;


  constructor(private annonceService: AnnonceService, private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.id= parseInt(this.route.snapshot.paramMap.get('id'));
    this.annonceDetail= this.annonceService.getOneAnnonceById(this.id);

    // this.annonces= this.annonceService.getAllAnnonces()
    // console.log(`les annonces importées: `);
    // console.log(this.annonces);


  }

}
