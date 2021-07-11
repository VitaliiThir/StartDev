import { wrap } from "./wrap";

// Автоматическая обёртка для таблиц на типовых страницах (jQuery)
export function typicalTableWrap() {
  let tables = document.querySelectorAll('.typical table');

  tables.forEach(table => {
    let tableWrapper = document.createElement('div');

    wrap(table, tableWrapper);
    tableWrapper.classList.add('typical-table-wrap')
  });
}
