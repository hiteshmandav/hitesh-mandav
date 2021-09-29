import { Component, OnInit } from '@angular/core';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {NgZone} from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faMapMarkerAlt = faMapMarkerAlt;
  public messageSentAlert: boolean;
  public sendingMessage: boolean;

  
  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    subject: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  constructor(private _ngzone: NgZone) { }

  ngOnInit(): void {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.contactForm.value);
    this.sendingMessage = true;
    setTimeout(() => {
      this._ngzone.run(()=>{
        this.sendingMessage = false;
        this.messageSentAlert = true;
      });
    }, 5000);
    
    // setTimeout(function(){ this.messageSentAlert = true; }, 3000);
    setTimeout(() => {
      this._ngzone.run(()=>{
        this.messageSentAlert = false;
      });
    }, 30000);
  }

  getErrorMessage() {
    // if (this.contactForm.email.hasError('required')) {
    //   return 'You must enter a value';
    // }

    // return this.contactForm.email.hasError('email') ? 'Not a valid email' : '';
  }

}
