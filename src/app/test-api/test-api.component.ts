import { Component, OnInit } from '@angular/core';
import { Person } from '../_models/person.model';
import { ApiService } from '../_services/api.service';

@Component({
  selector: 'app-test-api',
  templateUrl: './test-api.component.html',
  styleUrls: ['./test-api.component.css']
})
export class TestApiComponent implements OnInit {
  title = 'httpGet Example';
  people: Person[];
  person = new Person();
  
  constructor(private apiService:ApiService) {}

  ngOnInit(): void {
  //  this.refreshPeople();
  }
  refreshPeople() {
    
    this.apiService.getPeople()
      .subscribe(data => {
        console.log(data)
        this.people = data;
      })      
 
  }
  addPerson() {
    this.apiService.addPerson(this.person)
      .subscribe(data => {
        console.log(data)
        this.refreshPeople();
      })      
  }
  onSubmit() {
   // console.log(contactForm.value);
    this.apiService.addPerson(this.person)
      .subscribe(data => {
        console.log(data)
        this.refreshPeople();
    }) 
  }
}
