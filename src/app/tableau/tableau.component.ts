import { Router } from '@angular/router';
import { TableauService } from './../../services/tableau.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent implements OnInit {
  tab : any;
  constructor(private tabServ : TableauService, public router : Router) { }

  ngOnInit() {
    this.tabServ.getTableau().subscribe((res : any) => {
      this.tab = res['data'];
      console.log('DATA', this.tab);
    },
    (err) =>{
      let err_message = err.error;
      if(err.error['META'] != undefined) err_message = err.error['META'].message;
    });
  }
}
