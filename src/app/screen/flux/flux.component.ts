import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FluxItem } from '../../domain/FluxItem';
import { palindrome } from '../palindrome/palindrome.util';
import { environment } from './../../../environments/environment';

@Component({
  selector: 'app-flux',
  templateUrl: './flux.component.html',
  styleUrls: ['./flux.component.scss']
})
export class FluxComponent implements OnInit {
  flux: FluxItem[] = [];
  displayedColumns: string[] = ['id', 'label'];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get(environment.fluxApi).subscribe(result => {
      if (!result) {
        return;
      }

      this.flux = (<any[]> result).map((item: any) => new FluxItem(item.id, item.label, palindrome(item.label)));
    });
  }

}
