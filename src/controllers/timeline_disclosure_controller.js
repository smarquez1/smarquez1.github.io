import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
  static targets = ['label', 'status'];
  static values = {
    collapsedLabel: String,
    expandedLabel: String,
  };

  connect() {
    this.element.open = false;
    this.update();
  }

  update() {
    const expanded = this.element.open;

    this.labelTarget.textContent = expanded ? this.expandedLabelValue : this.collapsedLabelValue;
    this.statusTarget.textContent = expanded ? 'Showing all 8 roles' : 'Showing 4 of 8 roles';
  }
}
