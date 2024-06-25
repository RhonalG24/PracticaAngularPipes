import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrl: './basic-page.component.css'
})
export class BasicPageComponent {
  public nameLower:string = 'rhonal';
  public nameUpper:string = 'RHONAL';
  public fullName:string = 'rhONal GonZAlez';

  public customDate: Date = new Date();
}
