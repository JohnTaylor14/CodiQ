import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  login(user: User){
    return this.afAuth.signInWithEmailAndPassword(user.email! , user.password!);
  }

  register(user: User){
    return this.afAuth.createUserWithEmailAndPassword(user.email! , user.password!);
  }
  
  logout() {
    return this.afAuth.signOut();
  }  
  
  getAuth(){
    return this.afAuth;
  }

}
