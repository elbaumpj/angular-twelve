import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  hero: any;
  selectedHeroName: any;
  constructor(private heroService: HeroService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getCharacter();
  }

  getCharacter() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getCharacterById(id).subscribe(resp => {
      this.hero = resp.data.results[0];
    });
  }

  selectHero(name) {
    this.selectedHeroName = name;
  }

}
