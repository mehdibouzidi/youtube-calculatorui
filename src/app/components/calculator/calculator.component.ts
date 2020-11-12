import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Outpuddata } from 'src/model/request/outputdata.model';
import { Inputdata } from 'src/model/response/inputdata.model';
import { CalculatorService } from 'src/service/calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  form: FormGroup;
  outputdata: Outpuddata;
  inputdata: Inputdata;


  constructor(private fb: FormBuilder,
              private service: CalculatorService) { 
                this.inputdata = { result: 0};
              }

  ngOnInit() {
    this.resetForm();
  }

  resetForm() : void {
    this.form = this.fb.group({
      firstParam: [0],
      secondParam: [0]
    });
    this.inputdata.result = 0;
  }

  add(): void {
    this.outputdata = {
      firstParam: this.f.firstParam.value,
      secondParam: this.f.secondParam.value
    }

    this.service.add(this.outputdata).subscribe((response: Inputdata)=>{
      this.inputdata = response;
    })

  }

  get f() {return this.form.controls;}

}
