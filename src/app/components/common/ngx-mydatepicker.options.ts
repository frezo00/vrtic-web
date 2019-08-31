import { IMyDate, IMyDayLabels, IMyMonthLabels, INgxMyDpOptions } from 'ngx-mydatepicker';

const today = new Date();

export const myDatePickerOptions: INgxMyDpOptions = {
  dateFormat: 'dd. mm. yyyy',
  showTodayBtn: false,
  firstDayOfWeek: 'mo',
  selectorHeight: '250px',
  selectorWidth: 'calc(100% - 40px)',
  alignSelectorRight: true,
  dayLabels: {
    su: 'Ned',
    mo: 'Pon',
    tu: 'Uto',
    we: 'Sri',
    th: 'Čet',
    fr: 'Pet',
    sa: 'Sub'
  } as IMyDayLabels,
  monthLabels: {
    1: 'Siječanj',
    2: 'Veljača',
    3: 'Ožujak',
    4: 'Travanj',
    5: 'Svibanj',
    6: 'Lipanj',
    7: 'Srpanj',
    8: 'Kolovoz',
    9: 'Rujan',
    10: 'Listopad',
    11: 'Studeni',
    12: 'Prosinac'
  } as IMyMonthLabels,
  minYear: today.getFullYear() - 9,
  maxYear: today.getFullYear() - 4,
  disableUntil: {
    year: today.getFullYear() - 9,
    month: 12,
    day: 31
  } as IMyDate,
  disableSince: {
    year: today.getFullYear() - 5,
    month: 8,
    day: 31
  } as IMyDate
};
