import {h, info, iconPerson} from '/js/src/index.js';

export default (model) =>
  [
    h('.w-100', 'This is the new content for home page'),
    h('.w-25', [
      h('.btn-group', [
        h('button.btn.btn-success', {
          title: 'About router',
          style: 'color: red',
          onclick: () => console.log('Button should take me to about page')
        }, ['About', ' ', info()]
        ),
        h('button.btn.btn-primary', {
          onclick: () => console.log('get me the user')
        }, iconPerson())
      ])
    ])
  ];