import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'detail',
  template: `
    <p>
      {{id}} detail works!
    </p>
    <nav mat-tab-nav-bar>
      <a mat-tab-link routerLink="./" [active]="1">
        Default
      </a>
      <a mat-tab-link routerLink="./folders">
        Folders
      </a>
      <a mat-tab-link routerLink="./groups">
        Groups
      </a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class DetailComponent implements OnInit {
  id: number;
  private sub: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router) {
      // this.id = route.snapshot.paramMap.get("id");
      this.sub = this.route.params.subscribe(params => {
        this.id = +params['id']; // (+) converts string 'id' to a number
        console.log( this.id );
        // In a real app: dispatch action to load the details here.
     });
  }

  ngOnInit() {
  }
  
  changeRoute(routeValue) {
    this.router.navigate([routeValue]); 
    // you have to check this out by passing required route value.
    // this line will redirect you to your destination. By reaching to destination you can close your loader service.
    // please note this implementation may vary according to your routing code.
 
 }
}
