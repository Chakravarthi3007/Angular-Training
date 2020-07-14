import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sub-heading2',
  templateUrl: './sub-heading2.component.html',
  styleUrls: ['./sub-heading2.component.css'],
})
export class SubHeading2Component implements OnInit {
  @Input() subHeadingContent: string[];
  @Input() cssReferences: string[];
  @Input() cssBackground: string[];

  constructor() {}

  ngOnInit(): void {}
}
