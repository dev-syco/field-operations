import TDate from './TDate';

export enum OperationType {
  PLOWING = 0, // Вспашка
  BOWLING = 1, // Боронование
  FERTILIZATION = 2, // Внесение удобрений
  WATERING = 3, // Полив
  RIGGING = 4, // Прикатывание
  HARVESTING = 5 // Сбор урожая
}

export enum Assessment {
  EXCELLENT = 0, // Отлично
  SATISFACTORILY = 1, // Удовлетворительно
  BADLY = 2 // Плохо
}

export enum Culture {
  CROP_WHEAT
}

export interface OperationListSort {
  order: OperationListSortOrder;
  field: string;
}

export enum OperationListSortOrder {
  ASC = 'asc', DESC = 'desc'
}

export default class Operation {
  id?: string | null; // ID Операции

  type: OperationType; // Тип операции

  date: TDate; // Дата проведения операции

  area: number; // Площадь проведения операции (Га)

  comment?: string | null; // Комментарий

  culture?: Culture | null;

  assessment?: Assessment | null; // Оценка качества проведенной операции

  public get formatDate(): Date {
    const { day, month, year } = this.date || {};
    return new Date(`${year}-${month}-${day}`);
  }

  /* Class should implement interface */
  constructor(args: any) {
    const {
      id = null,
      type,
      date,
      area,
      comment = null,
      assessment = null,
      culture = null,
    } = args;
    this.id = id;
    this.type = type;
    this.date = new TDate(date);
    this.area = area;
    this.comment = comment;
    this.culture = culture;
    this.assessment = assessment;
  }
}
