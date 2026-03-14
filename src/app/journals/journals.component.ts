import { Component ,OnInit} from '@angular/core';
import { JournalServiceService } from '../service/journal-service.service';

@Component({
  selector: 'app-journals',
  templateUrl: './journals.component.html',
  styleUrls: ['./journals.component.css']
})
export class JournalsComponent implements OnInit{

  journals:any[] = [];
  filteredJournals:any[] = [];

  selectedJournalIndex:number = -1;

  searchText:string = '';

  constructor(private journalService:JournalServiceService){}

  ngOnInit(){
    this.getJournals();
  }

  getJournals(){
    this.journalService.getJournals().subscribe((res:any)=>{
      this.journals = res;
      this.filteredJournals = res;
    });
  }

  toggleJournal(index:number){
    if(this.selectedJournalIndex === index){
      this.selectedJournalIndex = -1;
    }else{
      this.selectedJournalIndex = index;
    }
  }

  searchJournal(){

    this.filteredJournals = this.journals.filter(journal =>
      journal.name.toLowerCase().includes(this.searchText.toLowerCase())
    );

  }

}