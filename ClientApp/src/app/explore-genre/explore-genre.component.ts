import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'explore-genre',
  templateUrl: './explore-genre.component.html',
  styleUrls: ['./explore-genre.component.css']
})
export class ExploreGenreComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { 
    console.log(this.activatedRoute.snapshot.paramMap.get('name'));
  }

  ngOnInit() {
  }

}
