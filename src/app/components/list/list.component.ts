import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Student } from 'src/app/Models/Student';
import { StudentService } from 'src/app/services/student.service';
declare var anime: any; 

@Component({
  selector: 'app-list-tutorial',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListTutorialComponent implements OnInit {

  constructor(private studentService: StudentService) { }
  student!: Student[];

  ngOnInit(): void {
     this.student = this.studentService.onGet();
  }
  onDelete(id: any){
    this.studentService.onDelete(id);
  }
  onUpdate(id: any){
    debugger
    this.studentService.onGetSingle(id);
  }
}