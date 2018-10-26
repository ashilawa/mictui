import { Component, OnInit } from '@angular/core';
import { PatientScheduleService } from '../../services/patientSchedule/patient-schedule.service';

@Component({
  selector: 'app-patient-schedule',
  templateUrl: './patient-schedule.component.html',
  styleUrls: ['./patient-schedule.component.css']
})
export class PatientScheduleComponent implements OnInit {

  public PatientScheduleData: { [k: string]: any } = {};

  constructor(public PatientScheduleService: PatientScheduleService) { }

  ngOnInit() {
    this.PatientScheduleService.getpatientScheduleData().subscribe( data => {
      this.PatientScheduleData = Object.assign({}, data);
      console.log("Patient Scedule Data--->",this.PatientScheduleData);
     });
  } 

  restoreValue(){ 
    console.log("Restore function called in patient-scedule");
  }

  Cancel(){ 
    console.log("Cancel function called in patient-scedule");
  }

  Save(PatientScheduleData){ 
    console.log("Save function called in patient-scedule");

    console.log("Save Data--->",PatientScheduleData);

    this.PatientScheduleService.submitPatientScheduleData
    (PatientScheduleData).subscribe( data => {
      console.log("Patient Schedule Response--->",data);
     });
  }

  SaveAndClose(){ 
    console.log("SaveAndClose function called in patient-scedule");
  }
}
