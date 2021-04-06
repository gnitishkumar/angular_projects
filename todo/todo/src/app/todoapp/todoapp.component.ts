import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';

@Component({
  selector: 'app-todoapp',
  templateUrl: './todoapp.component.html',
  styleUrls: ['./todoapp.component.css']
})
export class TodoappComponent implements OnInit {
  todoList=[];
  count:number=0;
 // document.body.classList.removeClass("dark-mode");
  constructor() { }

  ngOnInit(): void {
  }
  adding(form){
    if(form!="")
    {this.todoList.push(form);
    }

  }
  addDark(){
    //var ele=document.body;
    console.log(document.body.classList.toggle("dark"));
    console.log(document.body.classList.toggle("dark"));
    /*if(this.count%2===0){
    document.body.style.background="black";
    document.body.style.color="white";
    }
    else
    {
      document.body.style.background="white";
      document.body.style.color="black";
    }*/
    this.count=this.count+1;
   // document.body.classList.add(".dark");
  }
  delete(val)
  { for(var i=0;i<this.todoList.length;i++)
    { if(this.todoList[i]==val)
        { this.todoList.splice(i,1);

        }
    }

  }
  todoSubmit(value:any){
    if(value!=="")
    {    this.todoList.push(value.todo) ;    //this.todoForm.reset()
    }
  else
  {      alert('Field required **')
 }
}


}
