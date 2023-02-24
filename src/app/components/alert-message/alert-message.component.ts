import { StatusEnum } from '../../models/status-enum';
import { AlertMessage } from '../../models/alert-message';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert-message',
  templateUrl: './alert-message.component.html',
  styleUrls: ['./alert-message.component.scss']
})
export class AlertMessageComponent {
  @Input()
  message?: AlertMessage;
}
