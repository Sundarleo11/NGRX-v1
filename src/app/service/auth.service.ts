import { environment } from "./../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthResponseData } from "../model/AuthResponseData";
import { User } from "../model/user.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  timeOutInterval: any;
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<AuthResponseData> {
    return this.http.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.FIRBASE_API_KEY}`,
      { email, password, returnSecureToken: true }
    );
  }

  signUp(email: string, password: string): Observable<AuthResponseData> {
    return this.http.post<AuthResponseData>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.FIRBASE_API_KEY}`,
      { email, password, returnSecureToken: true }
    );
  }

  formatUser(data: AuthResponseData) {
    const expirationDate = new Date(
      new Date().getTime() + +data.expiresIn * 1000
    );
    const user = new User(
      data.email,
      data.idToken,
      data.localId,
      expirationDate
    );
    return user;
  }

  getErrorMessage(message: string) {
    switch (message) {
      case "EMAIL_NOT_FOUND":
        return "Email Not Found";
      case "INVALID_PASSWORD":
        return "Invalid Password";
      case "EMAIL_EXISTS":
        return "email already exists";
      default:
        return "Unknown error occurred. Please try again";
    }
  }

  setUserInLocalStorage(user: User) {
    localStorage.setItem("userdata", JSON.stringify(user));

    this.runTimeoutInterval(user);
  }

  runTimeoutInterval(user: User) {
    const TodayDate = new Date().getTime();
    const expiresDate = user.expireDate.getTime();

    const TimeInterval = expiresDate - TodayDate;

    this.timeOutInterval = setTimeout(() => {}, TimeInterval);
  }

  getUserFromLocalStroage() {
    const userDataString = localStorage.getItem("userdata");

    if (userDataString) {
      const userData = JSON.parse(userDataString);
      const expirationDate = new Date(userData.expirationDate);
      const user = new User(
        userData.email,
        userData.token,
        userData.localId,
        expirationDate
      );

      this.runTimeoutInterval(user);
      return user;
    }
    return null;
  }
}
