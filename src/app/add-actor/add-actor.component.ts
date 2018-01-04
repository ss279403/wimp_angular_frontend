import { Component, OnInit } from '@angular/core';
import { WimpService } from '../wimp.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-actor',
  templateUrl: './add-actor.component.html',
  styleUrls: ['./add-actor.component.css']
})
export class AddActorComponent implements OnInit {

  actors;
  showUpdateTable: boolean;

  constructor(private wimpservice: WimpService) {
    this.showUpdateTable = false;
  }

  ngOnInit() {
    this.getActors();
  }


  getActors() {
    this.wimpservice.getRecords("actors")
      .subscribe(actorsFromApi => {
        this.actors = actorsFromApi;
      })
  }

  onSubmitActor(actorData: NgForm) {
    this.wimpservice.addRecord("actors", actorData.value)
      .subscribe(addActor => {
        this.getActors();
        actorData.reset();
      })
  }

  removeActor(id) {
    this.wimpservice.deleteRecord("actors", id)
      .subscribe(removeActorFromApi => {
        this.getActors();
      })
  }

  updateActor(actorData: NgForm, id) {
    this.wimpservice.editRecord("actors", actorData.value, id)
      .subscribe(updateActorForAPI => {
        this.getActors();
        this.showUpdateTable = false;
      })
  }

  ShowButton() {
    this.showUpdateTable = true;
  }

}
