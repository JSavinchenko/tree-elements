import {CommonModule, NgClass, NgFor, NgIf} from '@angular/common';
import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-tree-view',
  imports: [CommonModule, NgFor, NgIf, NgClass],
  templateUrl: './tree-view.component.html',
  styleUrl: './tree-view.component.css',
})
export class TreeViewComponent {
  @Input() nodes: any[] = [];
  expandedNodes = new Map<number, boolean>();

  toggleNode(node: any) {
    this.expandedNodes.set(node.id, !this.isExpanded(node));
  }

  isExpanded(node: any): boolean {
    return this.expandedNodes.get(node.id) ?? false;
  }
}
