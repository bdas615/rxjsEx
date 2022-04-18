import { Component, OnInit,AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator'; 
import { MatSort } from '@angular/material/sort';
import { ServService } from './../../serv.service';
import {tap,map,filter} from 'rxjs';
import { concatMap, debounceTime, delay, switchMap,mergeMap } from 'rxjs/operators';

export interface UserData
{
  name:any;
  height:any;
  mass:any;
  hair_color:any;
  skin_color:any;
}

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})

export class NewComponent implements AfterViewInit{
    
  displayedColumns:string[] = ['name','height','mass','hair_color','skin_color'];
  
  x:any;  
  z:any;

  dataSource = new MatTableDataSource<UserData>();

  @ViewChild(MatPaginator, {static:true}) paginator!: MatPaginator;
  @ViewChild(MatSort, {static:true}) sort!: MatSort;
  data: any;

  constructor(private service:ServService){}

  ngAfterViewInit()
  {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.service.transferringData()
    .pipe(
      delay(1000),
      map((i:any)=>  {
         return i;
      }),
      // tap((search:any)=>{
      //   let s = search.results
      //   let x = [];
      //   for(let i=0;i<10;i++){
      //     x[i]=s[i];
      //     // console.log(s[i].name)
      //     if(s[i].name=='Luke Skywalker'){
      //       // console.log(s[i]);
      //     }
        // }
      // }), 
      filter((search:any) => {
          let s = search.results
          let x = [];
         
        for(let i=0;i<10;i++){
          x[i]=s[i];
          // console.log(s[i].name)
          if(s[i].name=='Luke Skywalker'){
             this.z = s[i].name;
            console.log(this.z)
            return this.z;
          }
        }
       
        
      }
      ),
      // tap((o)=>
      
      // console.log(o)
      // )
    )

    .subscribe(data=>{

      // console.log(data);
 
      // this.x = data;
      // this.dataSource.data = this.x.results;
      // for(let i=0;i<10;i++){
      // // console.log(this.x.results[i])
      // }
      })
  }

  applyFilter(event:Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if(this.dataSource.paginator){
       this.dataSource.paginator.firstPage();
    }
  }
}

