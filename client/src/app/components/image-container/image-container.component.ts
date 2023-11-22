import { Component } from '@angular/core';
import { FormService } from 'src/app/services/form/form.service';

@Component({
  selector: 'app-image-container',
  templateUrl: './image-container.component.html',
  styleUrls: ['./image-container.component.css']
})
export class ImageContainerComponent {
  zoomLevel = 1;
  imageUrl = 'https://www.w3schools.com/css/img_5terre.jpg';
  imageTransform = 'scale(1)';

  constructor(private formService: FormService) {
    this.formService.imageUrlSubject.subscribe((imageUrl: string) => {
      console.log('Image URL:', imageUrl);
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

}
