import { Injectable } from '@angular/core';

@Injectable()
export class MaskService {

  private _masks = {
    'rgMask':[/\d/, /\d/, /\d/, /\d/, /\d/, /\d/,/\d/, /\d/, /\d/, /\d/, '-',/\d/],
  };

  constructor() { }

  get rgMask(){
    return { 'mask':this._masks.rgMask };
  }

}
