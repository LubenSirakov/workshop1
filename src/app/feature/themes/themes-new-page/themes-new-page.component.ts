import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-themes-new-page',
  templateUrl: './themes-new-page.component.html',
  styleUrls: ['./themes-new-page.component.css']
})
export class ThemesNewPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  submitNewTheme(newThemeForm: NgForm): void {
    console.log(newThemeForm.value)
  }

}
