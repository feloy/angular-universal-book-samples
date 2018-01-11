import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  public id: Observable<string>;
  constructor(private route: ActivatedRoute) { }
  ngOnInit() {
    this.id = this.route.params.pluck('id')
      .map((s: string) => s.replace(/.html$/, ''));
  }
}
