import { Component, Input } from '@angular/core';

@Component({
  selector: 'ric-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
  standalone: true,
})
export class ExploreContainerComponent {
  @Input() name?: string;
}
