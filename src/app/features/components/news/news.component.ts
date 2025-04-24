import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface CalendarEvent {
  date: Date;
  eventName: string;
  eventContent:string;
  location: string;
  time: string;
}

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent implements OnInit{
currentDate: Date = new Date();
selectedDate: Date = new Date();
currentMonth: number = this.currentDate.getMonth();
currentYear: number = this.currentDate.getFullYear();
showMonthMenu: boolean = false;
showEventDetails: boolean = false;

//datos example
events: CalendarEvent[] = [
  {
    date: new Date(2025, 3, 24), // Abril 24, 2025
    eventName: 'Remate en Esperanza',
    eventContent: 'Remate de abasto e invernada',
    location: 'Esperanza',
    time: '14:00'
  },
  {
    date: new Date(2025, 3, 24), // Abril 24, 2025
    eventName: 'Remate en Romang',
    eventContent: 'Remate de abasto e invernada',
    location: 'Romang',
    time: '11:00'
  }
];

months: string[] = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];

constructor() {}

ngOnInit(): void {
  this.loadCurrentMonthEvents();
}

getDaysInMonth(month: number, year: number): (Date | null)[][] {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const weeks: (Date | null)[][] = [];
  let currentWeek: (Date | null)[] = [];

  // Fill in empty days at the start of the month
  for (let i = 0; i < firstDay.getDay(); i++) {
    currentWeek.push(null);
  }

  // Fill in the days of the month
  for (let day = 1; day <= lastDay.getDate(); day++) {
    const currentDate = new Date(year, month, day);
    currentWeek.push(currentDate);

    if (currentWeek.length === 7) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  }

  // Fill in empty days at the end of the month
  if (currentWeek.length > 0) {
    while (currentWeek.length < 7) {
      currentWeek.push(null);
    }
    weeks.push(currentWeek);
  }

  return weeks;
}


// Actualizar las funciones relacionadas para manejar null
hasEvents(date: Date | null): boolean {
  if (!date) return false;
  return this.events.some(event =>
    event.date.getDate() === date.getDate() &&
    event.date.getMonth() === date.getMonth() &&
    event.date.getFullYear() === date.getFullYear()
  );
}

getEventsForDate(date: Date): CalendarEvent[]{
  return this.events.filter(event =>
    event.date.getDate() === date.getDate() &&
    event.date.getMonth() === date.getMonth() &&
    event.date.getFullYear() === date.getFullYear()
  )
}
getMonthEvents(monthIndex: number): number {
  return this.events.filter(event => 
    event.date.getMonth() === monthIndex
  ).length;
}


selectMonth(monthIndex: number){
  this.currentMonth = monthIndex;
  this.showMonthMenu = false;
  this.loadCurrentMonthEvents();
}

private loadCurrentMonthEvents(){
  //logica de carga de eventos del mes actual
}

toggleMonthMenu() {
  if (this.showEventDetails) {
    this.showEventDetails = false;
  }
  this.showMonthMenu = !this.showMonthMenu;
}

selectDate(date: Date | null) {
  if (!date) return;
  if (this.showMonthMenu) {
    this.showMonthMenu = false;
  }
  this.selectedDate = date;
  this.showEventDetails = true;
}

toggleEventDetails() {
  if (this.showMonthMenu) {
    this.showMonthMenu = false;
  }
  this.showEventDetails = !this.showEventDetails;
}

}