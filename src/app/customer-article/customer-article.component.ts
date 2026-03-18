import { Component,OnInit } from '@angular/core';
import { JournalServiceService } from '../service/journal-service.service';
@Component({
  selector: 'app-customer-article',
  templateUrl: './customer-article.component.html',
  styleUrls: ['./customer-article.component.css']
})
export class CustomerArticleComponent implements OnInit{

articles:any[]=[];

constructor(private service:JournalServiceService){}

ngOnInit(){
 this.loadArticles();
}

loadArticles(){

 this.service.getArticles()
 .subscribe((res:any)=>{
  this.articles = res;
 });

}

deleteArticle(id:any){

 if(confirm("Delete this article?")){

  this.service.deleteArticle(id)
  .subscribe(()=>{
   this.loadArticles();
  });

 }

}

downloadFile(file:any){

 window.open("https://sharda-pubblication-new-final.onrender.com/uploads/"+file);

}


}
