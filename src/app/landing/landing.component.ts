import { trigger, transition, style, animate, state } from '@angular/animations';
import { Component, HostListener } from '@angular/core';

export const fadeAnimation = trigger('fadeAnimation', [
  transition(':enter', [
    style({ opacity: 0 }), animate('1000ms', style({ opacity: 1 }))]
  ),
  transition(':leave',
    [style({ opacity: 1 }), animate('500ms', style({ opacity: 0 }))]
  )
]);





@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  animations: [fadeAnimation]

})
export class LandingComponent {


  show = true;
  keyFrameState: "active" | "inactive" = "active";

  scroll(event: Event){
    if(this.show){
      this.show = false
      setTimeout(() => {
       this.show = true
      }, 1000);

    }
  }

  toggleKeyframe() {
    this.keyFrameState =
      this.keyFrameState === "active" ? "inactive" : "active";
  }
}
