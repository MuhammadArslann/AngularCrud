import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from 'src/app/Models/Student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddTutorialComponent implements OnInit {

  constructor(private StudentSerice: StudentService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    let students: Student = {
      Id: form.value.id,
      Name: form.value.name,
      City: form.value.city,
      Age: form.value.age
    }
    this.StudentSerice.onAdd(students);
    form.resetForm();
    this.router.navigate(['students']);
  }
}
