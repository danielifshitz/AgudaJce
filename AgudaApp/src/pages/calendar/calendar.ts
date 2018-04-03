import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';

@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html',
})
export class CalendarPage {

  tabName = 'יומן אירועים';

  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events) {
  }

  ionViewDidEnter(){
    this.events.publish('tab', this.tabName);
    this.doRefresh();
  }

  doRefresh(){
    console.log("calendar refresh");
  }
}
