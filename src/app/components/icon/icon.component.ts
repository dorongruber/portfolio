import { Component, Input, OnInit } from '@angular/core';
import { Icon } from 'src/app/models/icon';
import { ControlService } from 'src/app/services/control.service';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit {
  @Input() icon: Icon;
  @Input()index: number;
  color: string = '';
  isSelected: boolean = false;
  constructor(
    private controlService: ControlService
  ) {
    this.icon = new Icon('','');
    this.index = 0;
  }

  ngOnInit() {
    this.color = this.icon.Color;
    this.controlService.pageChanged.subscribe(res => {
      this.isSelected = res == this.index;

    });
  }

  onPageSelect() {
    this.controlService.setCurrentPage(this.index);
  }

}
