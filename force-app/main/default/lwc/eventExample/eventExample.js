import { LightningElement } from 'lwc';

export default class EventExample extends LightningElement {
  label;
  val;

  handleLabelClick(e){
    this.label = e.target.label;
  }

  handleValueClick(e){
    this.val = e.target.value;
  }

}