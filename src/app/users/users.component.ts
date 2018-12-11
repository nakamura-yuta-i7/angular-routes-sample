import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'users',
  template: `
    <ul>
    <li><a routerLink="detail/1">User1</a></li>
    <li><a routerLink="detail/2">User2</a></li>
    <li><a routerLink="detail/3">User3</a></li>
    <li><a routerLink="detail/4">User4</a></li>
    <li><a routerLink="detail/5">User5</a></li>
    <li><a routerLink="detail/6">User6</a></li>
    <li><a routerLink="detail/7">User7</a></li>
    <li><a routerLink="detail/8">User8</a></li>
    <li><a routerLink="detail/9">User9</a></li>
    <li><a routerLink="detail/10">User10</a></li>
    <li><a routerLink="detail/11">User11</a></li>
    <li><a routerLink="detail/12">User12</a></li>
    <li><a routerLink="detail/13">User13</a></li>
    <li><a routerLink="detail/14">User14</a></li>
    <li><a routerLink="detail/15">User15</a></li>
    <li><a routerLink="detail/16">User16</a></li>
    <li><a routerLink="detail/17">User17</a></li>
    <li><a routerLink="detail/18">User18</a></li>
    <li><a routerLink="detail/19">User19</a></li>
    <li><a routerLink="detail/20">User20</a></li>
    <li><a routerLink="detail/21">User21</a></li>
    <li><a routerLink="detail/22">User22</a></li>
    <li><a routerLink="detail/23">User23</a></li>
    <li><a routerLink="detail/24">User24</a></li>
    <li><a routerLink="detail/25">User25</a></li>
    <li><a routerLink="detail/26">User26</a></li>
    </ul>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class UsersComponent implements OnInit {

  constructor() {
    console.log( "Users constructor()" );
  }

  ngOnInit() {
  }

}
