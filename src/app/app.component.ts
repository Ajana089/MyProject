import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { formatPercent } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Myproject';
  httpdata:any
  slider:any
  pdt:any
  value:boolean=false
  imageObject:any=[]; 
  pdtarray:any=[]
  rating:any
  pdtrating:any
  pdtcount:any
  
  constructor(public http:HttpClient){

  }
  ngOnInit():void{
    this.http.get("https://fakestoreapi.com/products")
    .subscribe(pdts=>{
        this.httpdata=pdts
       // console.log(this.httpdata)
      for(let i=0;i<this.httpdata.length;i++){
       
        this.imageObject.push({"image":this.httpdata[i].image,"title":this.httpdata[i].title,"price":this.httpdata[i].price})
      }
    })

   // console.log(this.imageObject)
  
  }
  popup(){
    this.value=true;
  }
  popout(){
    this.value=false;
   ;
  }
  callme(pdts:any){
    this.value=true;
    for(let i=0;i<this.httpdata.length;i++){
      if(pdts.id==this.httpdata[i].id){
        this.pdt=this.httpdata[i]

        console.log(this.pdt)
        this.rating=this.httpdata[i].rating
       this.pdtrating=this.rating.rate
       this.pdtcount=this.rating.count

    }
    else if(pdts.id !==this.httpdata[i].id){
    this.pdtarray.push(this.httpdata[i])

    }
  }
 // console.log(this.pdt)
  }
  
    hintclose(){
      this.value=false;
     this.pdtarray=[]
    }
  
  



  
}
