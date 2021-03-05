// import { userAuthorization } from './../Shared/interception/userAuthorization';
// import { Category } from './../Shared/Models/product';
import { Observable } from 'rxjs';
// import { ProductService } from './../Shared/service/product.service';
// import { CartService } from './../Shared/service/cart.service';
import { UserService } from '../shared/service/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  id : any

  constructor(public userService : UserService) { }

  ngOnInit(): void {
  }


  logout() {
    this.userService.logout();
  }
}
