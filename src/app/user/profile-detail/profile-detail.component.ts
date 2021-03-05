import { UserService } from '../.././shared/service/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.css'],
})
export class ProfileDetailComponent implements OnInit {
  constructor(private userService: UserService) {}
  country: any;
  province: any;
  city : any;
  district: any;
  village : any;
  phone : any;
  zip : any;
  email: any;
  name: any;
  age: any;
  firstname: any;
  lastname: any;
  address: any;

  ngOnInit(): void {
    this.userService.getUser().subscribe((res) => {
      this.email = res.data.email;
      this.name = res.data.name;
      this.firstname = res.data.firstname;
      this.lastname = res.data.lastname;
      this.age = res.data.age;
      this.address = res.data.address;
    });
    this.userService.getAddressUser().subscribe((res) => {
      this.country = res.data.country;
      this.district = res.data.district;
      this.phone = res.data.phone;
      this.province = res.data.province
      this.village = res.data.village
      this.zip = res.data.zip
      this.city = res.data.city
    });
  }
}
