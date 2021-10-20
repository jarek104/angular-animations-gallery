import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class RouterAnimationService {
  private _outletAnimationState = new BehaviorSubject<string>('');

  get outletAnimationState() {
    return this._outletAnimationState.asObservable();
  }

  setOutletAnimationNext() {
    if (this._outletAnimationState.value === 'next') {
      this._outletAnimationState.next('next_');
    } else {
      this._outletAnimationState.next('next');
    }
  }
  setOutletAnimationPrevious() {
    if (this._outletAnimationState.value === 'previous') {
      this._outletAnimationState.next('previous_');
    } else {
      this._outletAnimationState.next('previous');
    }
  }
}