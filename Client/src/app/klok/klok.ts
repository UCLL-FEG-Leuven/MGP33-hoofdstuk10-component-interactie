import { Component, EventEmitter, Input, signal, OnDestroy, OnInit, Output } from '@angular/core';
import { Klok as KlokModel } from '../klok';

@Component({
    selector: 'app-klok',
    imports: [],
    templateUrl: './klok.html',
    styleUrl: './klok.css'
})
export class Klok implements OnInit, OnDestroy {
  @Input()
  klok: KlokModel | undefined;

  @Output()
  removed: EventEmitter<KlokModel> = new EventEmitter<KlokModel>(); 

  tijd = signal("");
  isNight = signal(false);

  intervalId: number | undefined;

  ngOnInit(): void {
    this.intervalId = window.setInterval(() => {
      const huidigTijdstip = new Date();
      this.tijd.set(huidigTijdstip.toLocaleString(this.klok?.locale, { timeZone: this.klok?.timeZone }));

      const hourIn24FormatInTimeZone = parseInt(
          huidigTijdstip.toLocaleTimeString(
            'nl-BE', 
            { hour: '2-digit', hour12: false, timeZone: this.klok?.timeZone})
        );
      this.isNight.set(hourIn24FormatInTimeZone >= 18 || hourIn24FormatInTimeZone <= 6);
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  changeLocale(locale:string) {
    if (this.klok) this.klok.locale = locale;
  }

  remove() {
    this.removed.emit(this.klok);
  }
}