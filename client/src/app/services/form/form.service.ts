import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  public imageUrlSubject = new Subject<any>();
  selectedFile: File | null = null;

  constructor() { }

  setSelectedImageUrl(imageUrl: string | ArrayBuffer | null) {
    if (imageUrl) {
      this.imageUrlSubject.next(imageUrl);
    }
  }
}
