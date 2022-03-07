import { AfterViewInit, Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
declare var anime: any;  

@Component({
  selector: 'app-detail-tutorial',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css']
})
export class DetailTutorialComponent implements OnInit, AfterViewInit  {
  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    
  }
  ngAfterViewInit(): void {
 
    // Wrap every letter in a span
   let textWrapper = document.querySelector('.c2')!;
   textWrapper.innerHTML = textWrapper?.textContent?.replace(/\S/g, "<span class='letter' style='display:inline-block;'>$&</span>")!;
   
   anime.timeline({loop: true})
     .add({
       targets: '.c2 .letter',
       translateX: [40,0],
       translateZ: 0,
       opacity: [0,1],
       easing: "easeOutExpo",
       duration: 1200,
       delay: (el:any, i:any) => 500 + 30 * i
     }).add({
       targets: '.c2 .letter',
       translateX: [0,-30],
       opacity: [1,0],
       easing: "easeInExpo",
       duration: 1100,
       delay: (el:any, i:any) => 100 + 30 * i
     });
   
   
     }
}

