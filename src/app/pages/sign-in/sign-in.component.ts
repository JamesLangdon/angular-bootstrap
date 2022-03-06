import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(
    private titleService: Title,
    private metaService: Meta
  ) { 
    titleService.setTitle('Angular Bootstrap Template');
    metaService.updateTag({name:"viewport", content:"width=device-width, initial-scale=1"});
    metaService.addTag({name:"description", content:"Angular Bootstrap Template"});
    metaService.addTag({name:"author", content:"IstonishDevelopers"});
  }

  ngOnInit(): void {
  }

}
