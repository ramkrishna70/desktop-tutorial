import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from 'rxjs';
import { AppUser } from '@models/appuser';
import * as firebase from 'firebase/app';
import { AngularFirestore } from '@angular/fire/firestore';



@Injectable({
    providedIn: 'root'
})
export class AuthService {
    userData: Observable<firebase.User>;

    constructor(private angularFireAuth: AngularFireAuth) {
        //this.userData = angularFireAuth.authState;
    }


    async SignIn(email: string, password: string) {
        try {
            let data = await this.angularFireAuth.signInWithEmailAndPassword(email, password);
            console.log('You are Successfully logged in!', data);
        } catch (error) {
            let error_msg = `Error at auth AuthService unser SignIn method. \n ${error}`;
            console.log(error_msg);
        }
    }

}
