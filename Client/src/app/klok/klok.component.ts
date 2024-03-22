import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-klok',
  standalone: true,
  imports: [],
  templateUrl: './klok.component.html',
  styleUrl: './klok.component.css'
})
export class KlokComponent implements OnInit, OnDestroy {
  @Input()
  timeZone: string  = "Europe/Brussels";

  @Output()
  removed: EventEmitter<string> = new EventEmitter<string>(); 

  locale: string = "nl-BE";
  tijd: string | undefined;
  isNight: boolean = false;

  intervalId: number | undefined;

  ngOnInit(): void {
    this.intervalId = window.setInterval(() => {
      const huidigTijdstip = new Date();
      this.tijd = huidigTijdstip.toLocaleString(this.locale, { timeZone: this.timeZone });

      const hourIn24FormatInTimeZone = parseInt(
          huidigTijdstip.toLocaleTimeString(
            'nl-BE', 
            { hour: '2-digit', hour12: false, timeZone: this.timeZone})
        );
      this.isNight = hourIn24FormatInTimeZone >= 18 || hourIn24FormatInTimeZone <= 6;
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  changeLocale(locale:string) {
    this.locale = locale;
  }

  remove() {
    this.removed.emit(this.timeZone);
  }
}