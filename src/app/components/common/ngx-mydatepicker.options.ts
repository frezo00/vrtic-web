import {
  INgxMyDpOptions,
  IMyDate,
  IMyDayLabels,
  IMyMonthLabels
} from 'ngx-mydatepicker';

const today = new Date();

export const myDatePickerOptions: INgxMyDpOptions = {
  dateFormat: 'dd.mm.yyyy',
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
    1: 'Sij',
    2: 'Vel',
    3: 'Ožu',
    4: 'Tra',
    5: 'Svi',
    6: 'Lip',
    7: 'Srp',
    8: 'Kol',
    9: 'Ruj',
    10: 'Lis',
    11: 'Stu',
    12: 'Pro'
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
    month: 12,
    day: 31
  } as IMyDate
};
