import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-best-hero',
  templateUrl: './best-hero.component.html',
  styleUrls: ['./best-hero.component.scss']
})
export class BestHeroComponent implements OnInit {
  @Input() bestHero: any;
  constructor() { }

  ngOnInit() {
  }

}
