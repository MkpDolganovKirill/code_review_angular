import { Component, OnInit } from '@angular/core';
import { UsersDataService } from "../../../../services/users-data.service";
import * as Diff2Html from "diff2html";
import { HttpHelperService } from "../../../../services/http-helper.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  public outputHtml: string | undefined;
  private readonly userId: string | null;
  private readonly repositoryId: string | null;

  constructor(private http: HttpHelperService,
              private usersService: UsersDataService,
              private activatedRoute: ActivatedRoute
  ) {
    this.userId = activatedRoute.snapshot.paramMap.get('userId');
    this.repositoryId = activatedRoute.snapshot.paramMap.get('repositoryId');
  }

  ngOnInit(): void {
    this.usersService.userList.subscribe(data => {
      if (!data) return;
      let user = data?.find(element => {
        return element._id === this.userId;
      });
      console.log(user);
      let rep = user?.projects?.find(element => {
        return element._id === this.repositoryId;
      });
      console.log(rep);

      this.http.getUserDiff(user, rep).subscribe(res => {
        this.outputHtml = Diff2Html.html(res.diff, { drawFileList: true, matching: 'lines', outputFormat: 'side-by-side' });
      })
    })
  }

}
