import {h, info, iconPerson} from '/js/src/index.js';

export default (model) =>
  [
    h('.w-100', 'This is the new content for home page'),
    createButtonGroup(model),
    usernameLabel(model),
  ];

const createButtonGroup = (model) =>
  h('.w-25', [
    h('.btn-group', [
      h('button.btn.btn-success', {
        title: 'About router',
        style: 'color: red',
        onclick: () => model.router.go('?page=about')
      }, [h('label.ph2', 'About'), info()]
      ),
      h('button.btn.btn-primary', {
        onclick: () => model.home.setUserName('my-name')
      }, iconPerson())
    ])
  ]);

const usernameLabel = (model) =>
  h('label', model.home.getUserName());