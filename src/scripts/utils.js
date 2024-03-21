import dayjs from 'dayjs';

/** 該月有幾天 */
export function getDatesOfMonth(year, month) {
  if (typeof year !== 'number' && typeof year !== 'string') {
    throw new Error('參數 year 型別需為 number 或 string');
  }
  if (typeof month !== 'number' && typeof month !== 'string') {
    throw new Error('參數 month 型別需為 number 或 string');
  }
  return dayjs(`${year}-${month}`).daysInMonth();
}

/** 該月第一天是星期幾 */
export function getFirstDayOfMonth(year, month) {
  if (typeof year !== 'number' && typeof year !== 'string') {
    throw new Error('參數 year 型別需為 number 或 string');
  }
  if (typeof month !== 'number' && typeof month !== 'string') {
    throw new Error('參數 month 型別需為 number 或 string');
  }
  return dayjs(`${year}-${month}-1`).day();
}
