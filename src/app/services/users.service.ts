import { Injectable, signal } from '@angular/core';
import { User } from '@Interfaces/req-response';


interface State {
  users: User[];
  loading: boolean;
}


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  #State = signal<State>({
    loading: true,
    users:[],
  });

  constructor() {
    console.log('Cargando Data');
   }
}
