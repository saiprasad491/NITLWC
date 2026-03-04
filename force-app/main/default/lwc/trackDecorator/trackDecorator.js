import { LightningElement,track } from 'lwc';

export default class TrackDecorator extends LightningElement {
  @track
  user={
    firstName:"Jack",
    lastName:"Abraham"
  };

  handleSubmit(){
    this.user.firstName="Daniel";
    console.log(`Button clicked, ${this.user.firstName} ${this.user.lastName}`);
  }

}