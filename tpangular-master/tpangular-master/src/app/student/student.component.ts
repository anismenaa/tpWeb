import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  name = '';

  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
    let n = this.route.snapshot.paramMap.get('name');
    this.name = decodeURIComponent(n);
  }

}
