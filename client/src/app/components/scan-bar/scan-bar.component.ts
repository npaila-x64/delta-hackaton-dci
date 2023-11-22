import { Component } from '@angular/core';
import { FormService } from '../../services/form/form.service';

@Component({
  selector: 'app-scan-bar',
  templateUrl: './scan-bar.component.html',
  styleUrls: ['./scan-bar.component.css']
})
export class ScanBarComponent {
  selectedImageUrl: string | ArrayBuffer | null = null;

  constructor(private formService: FormService) { }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.formService.setSelectedFile(file);
  }
}
