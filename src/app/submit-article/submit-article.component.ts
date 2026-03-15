import { Component, OnInit } from '@angular/core';
import { JournalServiceService } from '../service/journal-service.service';

@Component({
  selector: 'app-submit-article',
  templateUrl: './submit-article.component.html',
  styleUrls: ['./submit-article.component.css']
})
export class SubmitArticleComponent implements OnInit {

  journals:any[] = [];
  selectedFile:any;

  articleForm:any = {
    name:'',
    email:'',
    phone:'',
    journal:'',
    subject:'',
    message:''
  };

  constructor(private service:JournalServiceService){}

  ngOnInit(){
    this.getJournals();
  }

  getJournals(){
    this.service.getJournals().subscribe((res:any)=>{
      this.journals = res;
    });
  }

  onFileSelected(event:any){
    this.selectedFile = event.target.files[0];
  }

  submitArticle(){

    const formData = new FormData();

    formData.append("name",this.articleForm.name);
    formData.append("email",this.articleForm.email);
    formData.append("phone",this.articleForm.phone);
    formData.append("journal",this.articleForm.journal);
    formData.append("subject",this.articleForm.subject);
    formData.append("message",this.articleForm.message);
    formData.append("file",this.selectedFile);

    this.service.submitArticle(formData)
    .subscribe(res=>{
      alert("Article submitted successfully");
    });

  }

}