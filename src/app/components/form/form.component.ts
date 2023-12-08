import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonInput } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service'
import { IUser } from 'src/app/models/User'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {

  /**
   * Loader Config
   */
  public showLoader: boolean = false;
  public timeLoader: number = 2;
  public typeLoader: number = 1;
  public buttonsLoader: boolean = false;
  public stepsLoader: boolean = false;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void { }

  async handleLogin(name: IonInput, email: IonInput, image: IonInput, password: IonInput) {
    var usuario: IUser = {
      name: (name.value ?? '').toString(),
      email: (email.value ?? '').toString(),
      password: (password.value ?? '').toString(),
      image: (image.value ?? '').toString(),
    };
    this.showLoader = true;
    await this.userService.addUser(usuario);
    this.showLoader = false;
    this.router.navigate(['/home'])
  }

}
