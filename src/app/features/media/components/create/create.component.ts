import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import * as actions from '../../actions/list.actions';
import { Store } from '@ngrx/store';
import { MediaState } from '../../reducers/list.reducer';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private store: Store<MediaState>) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required, Validators.maxLength(100)]],
      recommendedBy: ['', [Validators.required]],
      format: ['', [Validators.required]]
    });
  }

  get title(): AbstractControl { return this.form.get('title'); }
  get recommendedBy(): AbstractControl { return this.form.get('recommendedBy'); }
  get format(): AbstractControl { return this.form.get('format'); }

  submit(): void {
    this.store.dispatch(actions.addedMediaItem(this.form.value));
    this.form.reset(); // clear out the form.
  }

}
