import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
email='';
password='';

constructor(private http:HttpClient,private router:Router){}
    baseUrl="https://sharda-pubblication-new-55.onrender.com/api/admin/login"
    //baseUrl=http://localhost:5000/api/admin/login'
// login(){

// this.http.post<any>('http://localhost:5000/api/admin/login',{
// email:this.email,
// password:this.password
// })
// .subscribe(res=>{

// localStorage.setItem('token',res.token);

// alert("Login successful");

// this.router.navigate(['/admin-dashboard']);

// },
// err=>{
// alert("Invalid login");
// });

// }
login(){

this.http.post<any>(this.baseUrl,{
  email:this.email,
  password:this.password
})
.subscribe({

  next:(res)=>{
    console.log(res);

    alert("Login successful");
    this.router.navigate(["/admindash"])
  },

  error:(err)=>{
    alert("Invalid login");
  }

});

}
}
