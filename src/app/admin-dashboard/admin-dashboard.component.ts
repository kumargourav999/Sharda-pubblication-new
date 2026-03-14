import { Component } from '@angular/core';
import { JournalServiceService } from '../service/journal-service.service';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
constructor(private journalService:JournalServiceService){}

showForm=false;
editMode=false;
editId:any=null;
journal:any={};

journals:any=[];
selectedIndex: number | null = null;

toggleDetails(index:number){

if(this.selectedIndex === index){
this.selectedIndex = null;
}else{
this.selectedIndex = index;
}
}

toggleForm(){
 this.showForm=!this.showForm;
}


ngOnInit(){
 this.getJournals();
}
deleteJournal(id:any){

if(confirm("Delete this journal?")){

this.journalService.deleteJournal(id)
.subscribe((res:any)=>{

alert(res.message);
this.getJournals();

});

}

}


// EDIT JOURNAL

editJournal(j:any){

this.journal = {...j};
this.editMode = true;
this.editId = j._id;
this.showForm = true;

}

// ADD JOURNAL
addJournal(){
if(this.editMode){

this.journalService.updateJournal(this.editId,this.journal)
.subscribe((res:any)=>{

alert(res.message);

this.editMode=false;
this.journal={};

this.getJournals();

});
}else{
this.journalService.addJournal(this.journal)
.subscribe((res:any)=>{

 alert(res.message);

 this.journal={};

 this.getJournals();

 this.showForm=false;

});
}
}


// GET JOURNALS
getJournals(){

this.journalService.getJournals()
.subscribe((data:any)=>{

 this.journals=data;

});

}

}
