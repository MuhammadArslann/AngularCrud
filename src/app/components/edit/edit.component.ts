import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/Models/Student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-edit-tutorial',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditTutorialComponent implements OnInit {

  id!: number;

  constructor(private router: Router, private route: ActivatedRoute, private studentService: StudentService) { }

  student: Student = {
    Id: 0,
    Name: '',
    Age: 0,
    City: ''
  }
  ngOnInit(): void {
   this.id = +this.route.snapshot.paramMap.get('id')!;
   if(this.id !== 0){
    this.student =  this.studentService.onGetSingle(this.id)!;
   }
  }
  onSubmit(form: NgForm){
    let student : Student = {
      Id: form.value.id,
      Name: form.value.name,
      Age: form.value.age,
      City: form.value.city
    }
    form.resetForm();
    this.studentService.onUpdate(student);
    this.router.navigate(['students']);
  }

}
