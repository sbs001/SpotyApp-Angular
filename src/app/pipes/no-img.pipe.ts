import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImg'
})
export class NoImgPipe implements PipeTransform {

  transform(images: any[]): string {
    return !images || !images.length ? 'assets/img/noimage.png' : images[0].url;
  }

}
