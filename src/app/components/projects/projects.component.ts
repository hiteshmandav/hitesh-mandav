import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Tours and Travels', cols: 2, rows: 2 , src: '/assets/Outdoors.PNG', content: '', link:'https://hiteshmandav.github.io/tours-travels-advanced-css/'},
          { title: 'Tours and Travels', cols: 1, rows: 1 , src: '/assets/Outdoors.PNG', content: ''},
          { title: 'Tours and Travels', cols: 1, rows: 2 , src: '/assets/Outdoors.PNG', content: ''},
          { title: 'Tours and Travels', cols: 1, rows: 1 , src: '/assets/Outdoors.PNG', content: ''}
        ];
      }

      return [
        { title: 'Tours and Travels', cols: 2, rows: 2 , src: '/assets/Outdoors.PNG', content: '', link:'https://hiteshmandav.github.io/tours-travels-advanced-css/'},
        { title: 'Brick breakout Game', cols: 1, rows: 1, src: '/assets/brick_brakout.PNG', content: '', link:'https://hiteshmandav.github.io/brick-breakout-game/'},
        { title: 'Card 3', cols: 1, rows: 2 },
        { title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}

  public openProject(link) {
    window.open(link, '_blank');
  }


}
