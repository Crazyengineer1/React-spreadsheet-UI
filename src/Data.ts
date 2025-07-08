import rawData from './exmpData.json';

const TOTAL_ROWS = 25;
const emptyRow = {
  jobRequest: '',
  submitted: '',
  status: '',
  submitter: '',
  url: '',
  assigned: '',
  priority: '',
  dueDate: '',
  estValue: '',
};

export const spreadsheetData = [
  ...rawData,
  ...Array.from({ length: TOTAL_ROWS - rawData.length }, () => ({ ...emptyRow })),
];
