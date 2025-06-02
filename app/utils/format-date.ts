const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const formatDateObject = (dateString: Date): string => {
  const yyyy = dateString.getFullYear();
  const mm = dateString.getMonth();
  const dd = dateString.getDate();
  const month = monthNames[mm];

  return `${dd}. ${month} ${yyyy}`;
};

export const formatDate = (dateString: string): string => {
  const [yyyy, mm, dd] = dateString.split('-');
  const month = monthNames[Number.parseInt(mm as string, 10) - 1];

  return `${dd}. ${month} ${yyyy}`;
};

export const formatDateMonthYear = (dateString: string): string => {
  const [yyyy, mm] = dateString.split('-');
  const month = monthNames[Number.parseInt(mm as string, 10) - 1];

  return `${month} ${yyyy}`;
};
