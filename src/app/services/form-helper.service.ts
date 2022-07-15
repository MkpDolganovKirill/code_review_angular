import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class FormHelperService {

  constructor(private formBuilder: FormBuilder) { }

  public createFormForNewRepository(): FormGroup {
    return this.formBuilder.group({
      projectName: new FormControl('', Validators.required),
      repositoryPath: new FormControl('', Validators.required),
      diffType: new FormControl(0, Validators.required),
      commitId: new FormControl(''),
    })
  }
}
