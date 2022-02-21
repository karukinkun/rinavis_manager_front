/* eslint-disable max-classes-per-file */
export class PageResponse<E> {
  /** データ件数 */
  totalRowCount!: number;

  /** データ */
  dataList!: E[];
}
