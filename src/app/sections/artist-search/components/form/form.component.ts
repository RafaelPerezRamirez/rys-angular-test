import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Output() change = new EventEmitter;
  formArtist: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formArtist = this.fb.group({
      artist: ['', Validators.required]
    })
  }

  searchArtist = async () =>{
    this.change.emit(this.formArtist.get('artist').value);
  }

  get artist(){
    return this.formArtist.get('artist')
  }
}
