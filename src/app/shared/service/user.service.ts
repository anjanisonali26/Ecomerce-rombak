import { environment } from '../../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User, UpdateUser, addressUser } from './Models/user';
import { catchError, map } from 'rxjs/operators';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient, private router: Router) { }

  signUp(user: User) {
    return this.http.post<any>(`${environment.baseUrl}/signup`, user).subscribe((res: any) => {
      Swal.fire('Welcome', 'You can login now', 'success')
      // alert("Berhasil register").then(result => {location.reload()})
      this.router.navigate(['']);
    },
      err => {
        Swal.fire('Sorry', err.error.message, 'error')
        // alert("Gagal register");
      })
  }

  signIn(user: User) {
    return this.http.post<any>(`${environment.baseUrl}/signin`, user).subscribe((res: any) => {
      localStorage.setItem('token', res.token)
      this.getUser().subscribe((res: any) => {
        Swal.fire({
          icon: 'success', title: 'Login Success'
        }).then(result => { location.reload() })
        this.router.navigate(['']);
      });
    },
      err => {
        Swal.fire('Sorry Email or Password incorect', err.error.message, 'error')
      });
  }
  updateUser(user: UpdateUser): Observable<any> {
    return this.http.put<any>(`${environment.baseUrl}/update`, user).pipe(map(result => true))
  }

  logout() {
    let clearToken = localStorage.removeItem('token');
    if (clearToken == null) {
      this.router.navigate(['']);
      Swal.fire('See you again', 'Logout Success', 'info').then(result => { location.reload() })
      this.router.navigate(['']);
    }
  }


  createAdressUser(address: addressUser) {
    return this.http.post<any>(`${environment.baseUrl}/address`, address).subscribe((res: any) => {
      Swal.fire('Thanks', 'Success Update Address', 'success')
      this.router.navigate(['profile/detail'])
    },
      err => {
        Swal.fire('Sorry', err.error.message, 'error')
      })
  }


  getToken() {
    return localStorage.getItem('token');
  }
  get isLogin() {
    let token = localStorage.getItem('token');
    if (token != null) {
      return true
    }
    else return false
  }



  getUser(): Observable<any> {
    return this.http.get<any>(`${environment.baseUrl}`, {
      headers: this.headers,
    }).pipe(map((res: Response) => {
      return res || {};
    }),
      catchError(this.handleError)
    );
  }

  getAddressUser(): Observable<any> {
    return this.http.get<any>(`${environment.baseUrl}/address`);
  }




  handleError(error: HttpErrorResponse) {
    let message = '';
    if (error.error instanceof ErrorEvent) message = error.error.message;
    else message = `Error code : ${error.status} \n Message Error : ${error.message}`
    return throwError(message);
  }




















}
