import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';

import { User, UserResponse, UsersResponse } from '@Interfaces/req-response';
import { delay, map } from 'rxjs';


interface State {
  users: User[];
  loading: boolean;
}


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private http = inject ( HttpClient );

  #State = signal<State>({
    loading: true,
    users:[],
  });

  public users = computed( () => this.#State().users );
  public loading = computed( () => this.#State().loading );

  constructor() {
    this.http.get<UsersResponse>('https://reqres.in/api/users')
    .pipe( delay (2000))
    .subscribe( res =>{

      this.#State.set({
        loading: false,
        users: res.data,
    })

    });
   }

   getUserById( id: string){
    return this.http.get<UserResponse>(`https://reqres.in/api/users/${ id }`)
    .pipe( 
      delay (2000),
      map ( resp => resp.data )
    )
   }
}
