import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import { Observable,fromEvent, Subscription, Subject } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, filter, tap, switchMap,debounceTime, shareReplay} from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Welcome to rxjs-project';

  @ViewChild('search',{static:true}) 
  search?: ElementRef<HTMLInputElement>
  x? : Subscription;
 
  ngOnInit(){

    // const searchObs = 
    // fromEvent(this.search!.nativeElement,'input')
    //           .pipe(
    //            debounceTime(1000),
    //            filter((e:any)=>e.target.value != ""),
    //            switchMap((e:any)=>{
    //               return ajax('https://api.github.com/search/users?q=${e.target.value}')
    //            },
                // map(ajaxResponse=>ajaxResponse.response.items)
              //  ))

    // this.x = searchObs.subscribe((value:any)=>{
    //   console.log(value)
    // })


    // observable ---> data emitting
  //   const pizzaObservable = new Observable((subscriber)=>{
  //     console.log("inside observable")
  //       subscriber.next({name:'FarmHouse ',veg:true,size:'small'})
  //       // subscriber.next({name:'Magherita ',veg:true,size:'small'})
  //       // subscriber.next({name:'Cheese',veg:true,size:'medium'})
  //       subscriber.complete();
  //       }).pipe(
  //         tap((pizza:any)=>{
  //             console.log("inside pipe");
  //           if(pizza.size == 'large'){
  //             throw new Error('Large pizza is not available at this moment');
  //           }
  //         }),
  //         filter((pizza:any)=>pizza.veg == true),
  //         map((pizza:any)=>{ return pizza.name }),
  //         shareReplay()
  //       )
  
  //   // subscriber/observer ----> data recipient
  // //   pizzaObservable.subscribe({
  // //     next:(value)=>console.log(value),
  // //     error:(err)=>console.log(err.message),
  // //     complete:()=>console.log("No more pizzas")
  // //   })
  // //   pizzaObservable.subscribe({
  // //     next:(value)=>console.log(value),
  // //     error:(err)=>console.log(err.message),
  // //     complete:()=>console.log("No more pizzas")
  // //   })

  //         const subject = new Subject<any>();

  //         subject.subscribe((value)=>{
  //           console.log('subscriber 1 value:',value);
  //         })

  //         subject.subscribe((value)=>{
  //           console.log('subscriber 2 value:', value);
  //         })

  //         subject.next(1);
  //         subject.next(2);

  // } 

  // ngOnDestroy(){
  //     if(this.x){
  //       this.x.unsubscribe();
  //     }
  }
}
