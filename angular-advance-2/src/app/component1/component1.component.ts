import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss'],
})
export class Component1Component implements OnInit {
  user: { id: 1; name: string } | undefined;
  user2: { id: any; name: any } | undefined;
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['username'],
    };

    this.route.params.subscribe((data) => {
      this.user2 = {
        id: data['id'],
        name: data['username'],
      };
    });
  }
}
