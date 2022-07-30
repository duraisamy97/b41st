import { Component, OnInit } from '@angular/core';
declare const $: any;


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {  
    $('.menu-toggle').click(() =>{
       $(".nav").toggleClass("sidepanel");
       $(this).toggleClass("is-active");
    });
  }

}
