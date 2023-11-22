import { Component } from '@angular/core';
import { FormService } from 'src/app/services/form/form.service';

@Component({
  selector: 'app-image-container',
  templateUrl: './image-container.component.html',
  styleUrls: ['./image-container.component.css']
})
export class ImageContainerComponent {
  zoomLevel = 1;
  imageUrl = '';
  imageTransform = 'scale(1)';

  constructor(private formService: FormService) {
    this.formService.imageUrlSubject.subscribe((imageUrl: string) => {
      this.imageUrl = imageUrl;
    });
  }

  zoomIn() {
    this.zoomLevel *= 1.2;
    this.updateZoom();
  }

  zoomOut() {
    this.zoomLevel /= 1.2; 
      this.updateZoom();
  }

  updateZoom() {
    this.imageTransform = `scale(${this.zoomLevel})`;
  }

  transcribeImage() {
    this.formService.transcribeImage();
  }

}
