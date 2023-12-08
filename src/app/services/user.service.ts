import { Injectable } from '@angular/core'
import { IUser } from 'src/app/models/User'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: IUser[] = [
    {
      name: 'Jorge Muñiz',
      email: 'jorge.muvez@gmail.com',
      password: 'password',
      image: 'https://parispasoapasotour2183a.zapwp.com/q:intelligent/r:0/wp:1/w:1/u:https://parispasoapasotours.com/wp-content/uploads/2022/12/tour-paris-nocturno.jpg'
    },
    {
      name: 'Jhon Smit',
      email: 'jhon.smit@gmail.com',
      password: 'password',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg/1200px-View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg'
    }
  ]

  constructor() { }

  getUsers() {
    return [...this.users]
  }

  getUser(email: string) {
    return {
      ...this.users.find(u => {
        return u.email === email
      })
    }
  }

  async addUser(user: IUser): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.users.push(user);
      setTimeout(() => {
        resolve(true)
      }, 10 * 1000);
    })
  }

  deleteUser(email: string) {
    this.users = this.users.filter(u => {
      return u.email !== email
    })
  }

  sendUser(user: IUser) {
    console.log("ENVIAR USUARIO => ", user)
  }
}
