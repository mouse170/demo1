import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'demo1';
  keyword = '';
  data: any = [];
  constructor(private datasvc: DataService) {
      this.datasvc.loadData().subscribe((data) => {
        this.data = data;
      });
  }
  ngOnInit(): void {


  }
  doSearch(str) {
    this.keyword = str;
  }

  doDelete(id) {
    console.log('Delete' + id);
  }
}
