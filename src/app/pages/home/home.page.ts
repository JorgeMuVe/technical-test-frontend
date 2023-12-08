import { Component, OnInit } from '@angular/core'
import { UserService } from 'src/app/services/user.service'
import { IUser } from 'src/app/models/User'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  users: IUser[] = []

  /**
   * Loader Config
   */
  public showLoader: boolean = false;
  public timeLoader: number = 2;
  public typeLoader: number = 2;
  public buttonsLoader: boolean = false;
  public stepsLoader: boolean = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.users = this.userService.getUsers()
  }

  handleShowLoader() {
    this.showLoader = true;
    setTimeout(() => {
      this.showLoader = false;
    }, 10 * 1000);
  }
}
