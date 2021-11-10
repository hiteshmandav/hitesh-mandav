import { Component, OnInit } from '@angular/core';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // typewriter: string = "";
  private typewriter_developer: string = "Web Developer";
  private typewriter_web_dev: string = "Technology Lead";
  private typewriter_freelance: string = "Full-Stack Developer";
  public name: string = "HITESH MANDAV";
  public nameArray: string[];
  // private typewriter_text: string = "Developer";
  private counter = 0;
  public typewriter_display: string = "";
  public backspace:boolean;

  faAngleRight = faAngleRight;

  constructor() { }

  ngOnInit(): void {
    this.nameArray = this.name.split('');
    this.typingCallback(this);

  }

  typewriter(text){

  }

  typingCallback(that) {
    let current_length = that.typewriter_display.length;
    switch (that.counter) {
      case 0:
        var total_length = that.typewriter_developer.length;
        if (!that.backspace && current_length < total_length) {
          that.typewriter_display += that.typewriter_developer[current_length];
          setTimeout(that.typingCallback, 100, that);

        } else if(that.backspace) {
          // console.log(current_length)
          if (current_length!=0) {
            // console.log("current_length")
            that.typewriter_display =  that.typewriter_display.slice(0,current_length-1);
            setTimeout(that.typingCallback, 100, that);
          } else {
            that.backspace = false;
            if(that.counter == 2) {
              that.counter=0
            } else {
              that.counter+=1
            }
            setTimeout(that.typingCallback, 100, that);
          }
        } else if(current_length == total_length) {
          // console.log("log")
          // that.typewriter_display = that.typewriter_display.slice(0,current_length-1);
          // console.log(that.typewriter_display)
          that.backspace = true;
          setTimeout(that.typingCallback, 1000, that);
        }
        break;
      case 1:
        var total_length = that.typewriter_web_dev.length;
        if (!that.backspace && current_length < total_length) {
          that.typewriter_display += that.typewriter_web_dev[current_length];
          setTimeout(that.typingCallback, 100, that);
        }else if(that.backspace) {
          // console.log(current_length)
          if (current_length!=0) {
            // console.log("current_length")
            that.typewriter_display =  that.typewriter_display.slice(0,current_length-1);
            setTimeout(that.typingCallback, 100, that);
          } else {
            that.backspace = false;
            if(that.counter == 2) {
              that.counter=0
            } else {
              that.counter+=1
            }
            setTimeout(that.typingCallback, 100, that);
          }
        } else if(current_length == total_length) {
          // console.log("log")
          // that.typewriter_display = that.typewriter_display.slice(0,current_length-1);
          // console.log(that.typewriter_display)
          that.backspace = true;
          setTimeout(that.typingCallback, 1000, that);
        }
        break;
      case 2:
        var total_length = that.typewriter_freelance.length;
        if (!that.backspace && current_length < total_length) {
          that.typewriter_display += that.typewriter_freelance[current_length];
          setTimeout(that.typingCallback, 100, that);
        } else if(that.backspace) {
          // console.log(current_length)
          if (current_length!=0) {
            // console.log("current_length")
            that.typewriter_display =  that.typewriter_display.slice(0,current_length-1);
            setTimeout(that.typingCallback, 100, that);
          } else {
            that.backspace = false;
            if(that.counter == 2) {
              that.counter=0
            } else {
              that.counter+=1
            }
            setTimeout(that.typingCallback, 100, that);
          }
        }else if(current_length == total_length) {
          // console.log("log")
          // that.typewriter_display = that.typewriter_display.slice(0,current_length-1);
          // console.log(that.typewriter_display)
          that.backspace = true;
          setTimeout(that.typingCallback, 1000, that);
        }
        break;
      default:
        break;
    }
    // let total_length = that.typewriter_text.length;


  }


}
