import {h, iconHome, iconDataTransferDownload} from '/js/src/index.js';

export default (model) =>
  [
    h('', 'About page content'),
    createButtonGroup(model),
    infoPanel(model),
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
  h('label.danger', model.about.requestedTimes)