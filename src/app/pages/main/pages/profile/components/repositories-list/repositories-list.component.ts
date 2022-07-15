import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { HttpHelperService } from "../../../../../../services/http-helper.service";
import { ActivatedRoute, Router } from "@angular/router";
import { UsersDataService } from "../../../../../../services/users-data.service";
import { IProject, IUser } from "src/app/interfaces/users.interfaces";

@Component({
  selector: 'app-repositories-list',
  templateUrl: './repositories-list.component.html',
  styleUrls: ['./repositories-list.component.scss']
})
export class RepositoriesListComponent implements OnInit {
  public user: IUser | undefined;
  private readonly userId: string | null;

  constructor(private httpHelper: HttpHelperService,
              private router: Router,
              private usersDataService: UsersDataService,
              private activatedRoute: ActivatedRoute) {
    this.userId = this.activatedRoute.snapshot.paramMap.get('userId');
  }

  ngOnInit(): void {
    this.usersDataService.userList.subscribe(res => {
      if (!res.length) return;
      this.user = res?.find(element => {
        return element._id === this.userId;
      });
      console.log(this.user);
    });
  }

  goToUserRepository(user: IUser, rep: IProject) {
    this.router.navigate([`/main/review/${user._id}/${rep._id}`]);
  }

}
