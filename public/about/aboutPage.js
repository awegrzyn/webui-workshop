import {h, iconHome, iconDataTransferDownload} from '/js/src/index.js';

export default (model) =>
  [
    h('', 'About page content'),
    createButtonGroup(model),
    infoPanel(model),
    dataTable(model.about.data)
  ];

/**
 * Create a group button
 * @param {Object} model
 * @return {vnode}
 */
const createButtonGroup = (model) =>
  h('.w-25', [
    h('.btn-group', [
      h('button', {
        title: 'Home router',
        class: 'btn btn-success',
        onclick: () => model.router.go('?page=home')
      }, ['Home', ' ', iconHome()]
      ),
      h('button.btn.btn-primary', {
        onclick: () => model.about.getData()
      }, iconDataTransferDownload())
    ])
  ]);

const infoPanel = (model) =>
  h('label.danger', model.about.requestedTimes);

const dataTable = (data) =>
  h('table.table.shadow-level2', [
    h('tbody',
      Object.keys(data).map((key) => rowData(key, data[key]))
    )
  ]);

const rowData = (columnName, columnValue) =>
  h('tr', [
    h('th', columnName),
    h('td', columnValue)
  ]);