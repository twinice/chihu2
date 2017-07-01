import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';

/**
 * Generated class for the MyForkPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-my-fork',
  templateUrl: 'my-fork.html',
})
export class MyForkPage {

  page1:any = 'ForkUserPage';
  page2:any = 'ForkQuestionPage';
  _id = 0;
  chatParams = {
    _id: this._id
  };

  constructor(public UserService : UserServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
    if (this.navParams.get("id")) {
      this._id = this.navParams.get("id");
      this.chatParams._id = this._id;
    } else {
      this.chatParams._id = this.UserService._user._id;
    }
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyForkPage');
  }

}
