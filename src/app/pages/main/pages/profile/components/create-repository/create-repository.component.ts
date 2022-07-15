import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { FormHelperService } from "../../../../../../services/form-helper.service";
import { HttpHelperService } from "../../../../../../services/http-helper.service";
import { catchError, of } from "rxjs";
import { UsersDataService } from "../../../../../../services/users-data.service";
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-create-repository',
  templateUrl: './create-repository.component.html',
  styleUrls: ['./create-repository.component.scss']
})
export class CreateRepositoryComponent implements OnInit {
  public creatingRepositoryForm: FormGroup;
  public isCommitId = false;
  public isRepositoryBelongsCurrentUser = false;


  constructor(private formBuilder: FormHelperService,
              private http: HttpHelperService,
              private usersDataService: UsersDataService,
              private activatedRoute: ActivatedRoute) {
    this.creatingRepositoryForm = formBuilder.createFormForNewRepository();
  }

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.paramMap.get('userId') === localStorage.getItem('userId'));
    this.isRepositoryBelongsCurrentUser = (this.activatedRoute.snapshot.paramMap.get('userId') === localStorage.getItem('userId'));
    this.creatingRepositoryForm.valueChanges.subscribe((res) => {
      console.log(res);
      this.isCommitId = (res.diffType === '3');
    });
  }

  createNewRepository() {
    const project = {
      projectName: this.creatingRepositoryForm.get('projectName')?.value || '',
      repositoryPath: this.creatingRepositoryForm.get('repositoryPath')?.value || '',
      diffType: this.creatingRepositoryForm.get('diffType')?.value || 1,
      commitId: this.creatingRepositoryForm.get('commitId')?.value || ''
    }
    this.http.createNewRepository(project)
      .pipe(
        catchError(err => {
          return of(null);
        })
      )
      .subscribe(res => {
        if (!res) return;
        this.usersDataService.updateUsersList();
      });
  }
}
