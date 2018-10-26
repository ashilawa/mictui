import { Component, OnInit } from '@angular/core';
import { ECGService } from '../../services/ECG/ecg.service';

@Component({
  selector: 'app-ecg',
  templateUrl: './ecg.component.html',
  styleUrls: ['./ecg.component.css']
})
export class ECGComponent implements OnInit {

public ECGData: { [k: string]: any } = {internalDevice:{},measurment:{}};

  constructor(public ECGService: ECGService) { }

  ngOnInit() {
    this.ECGService.getECGData().subscribe( data => {
       this.ECGData = Object.assign({}, data);
       console.log("ECG Data--->",this.ECGData);
      });
  }

  restoreValue(){ 
    console.log("Restore function called in ECG");
  }

  Cancel(){ 
    console.log("Cancel function called in ECG");
  }

  Save(ECGData){ 
    console.log("Save function called in ECG");

    console.log("Save Data--->",ECGData);

    this.ECGService.submitECGData(ECGData).subscribe( data => {
      console.log("ECG Response--->",data);
     });
  }

  SaveAndClose(){ 
    console.log("SaveAndClose function called in ECG");
  }

}
