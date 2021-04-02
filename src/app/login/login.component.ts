import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilisateurService } from 'src/services/utilisateur.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private utilServ : UtilisateurService, public router : Router) { }

  ngOnInit(): void {
  }

  sinscrire(InscriptionForm : NgForm){
    this.utilServ.sinscrire(InscriptionForm.value).subscribe(
      (res) =>{
        console.log(res)
      },
      (err) =>{
        let err_message = err.error;
        if(err.error['META'] != undefined) err_message = err.error['META'].message;
        console.log(err_message);
      }
    );
  }

  connexion(LoginForm : NgForm){
    localStorage.clear();
    this.utilServ.login(LoginForm.value).subscribe(
      (res : any) =>{
      console.log(res);
      localStorage.setItem('token', res['data'][0]);
      this.router.navigate(['/tableau']);
    },
    (err: { error: { [x: string]: { message: any; }; }; })=>{
      let err_message = err.error;
      if(err.error['META'] != undefined) err_message = err.error['META'].message;
      alert("Numero ou mot de passe incorrect.");
      }
    );
  }
}
