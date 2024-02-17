import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiEndpoint } from '../constants/constants';
import { ILogin, ILoginResponse } from '../models/auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(data: ILogin) {
    return this.http.post<ILoginResponse>(
      `${apiEndpoint.AuthEndpoint.login}`,
      data
    );
  }
  logout() {}
}
