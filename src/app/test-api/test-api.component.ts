import { Component, OnInit,ComponentFactoryResolver, OnChanges, SimpleChanges } from '@angular/core';
import { AlertModalComponent } from '../_modals/alert-modal/alert-modal.component';
import { Person } from '../_models/person.model';
import { ApiService } from '../_services/api.service';

@Component({
  selector: 'app-test-api',
  templateUrl: './test-api.component.html',
  styleUrls: ['./test-api.component.css']
})
export class TestApiComponent implements OnInit,OnChanges {
  title = 'Pipes Example';
  people: Person[]=[];
  person = new Person();
  flag=true;
  searchTerm= "";
  error = null;
  loading = false;
  modalMessage = "default";
  constructor(private apiService:ApiService,
    private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('onChanges called');
    console.log(changes);
  }

  ngOnInit(): void {
    this.refreshPeople();
  }
  refreshPeople() {
    this.people = [];
    this.loading = true;
    this.apiService.getPeople()
      .subscribe(data => {
        console.log(data)
        this.people = data;
      },error =>{
        this.error = error;
      }) ;
      this.loading = false;     
 
  }
  addPerson() {
    this.apiService.addPerson(this.person)
      .subscribe(data => {
        console.log(data)
        this.refreshPeople();
      },error=>{
        console.log(error.error);
      })      
  }
  onSubmit() {
    this.flag= false;
   // console.log(contactForm.value);
    this.apiService.addPerson(this.person)
      .subscribe(data => {
        console.log(data)
       // this.refreshPeople();
       
    }) 
  }
  showErrorModal(message: string){
    const alertComponent = this.componentFactoryResolver.resolveComponentFactory(AlertModalComponent);
    //alertComponent.create()
  }
  onHandleClose(event: boolean){
    this.flag=event;
  }
}
