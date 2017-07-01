import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Headers, Http } from '@angular/http';
/**
 * Generated class for the ForkUserPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-fork-user',
  templateUrl: 'fork-user.html',
})
export class ForkUserPage {

  //数据存储
  items = [];
  rootNavCtrl: NavController;
  id: any;

  constructor(public http: Http, public navCtrl: NavController, public navParams: NavParams) {
    this.rootNavCtrl = navParams.get('rootNavCtrl');
    this.id = this.navParams.data._id;
    this.getdata();
  }

  //获取数据
  getdata() {
    let url = "http://www.devonhello.com/chihu/myfork";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "id=" + this.id, {
      headers: headers
    })
      .subscribe((res) => {
        this.items = res.json();
      });
  }

  //查看TA的个人主页
  pushPersonPage(_id) {
    this.rootNavCtrl.push('PersonalPage', {
      _id: _id
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForkUserPage');
  }

}
