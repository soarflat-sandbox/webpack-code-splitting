function getComponent() {
  // 今回`webpackChunkName`に`lodash`を指定しているため
  // バンドルファイル名は`vendors~lodash.bundle.js`になる
  return import(/* webpackChunkName: "lodash" */ 'lodash')
    .then(_ => {
      console.log('import lodash');
      const element = document.createElement('div');
      _ = _.default;

      element.innerHTML = _.join(['Hello', 'webpack'], ' ');

      return element;
    })
    .catch(error => 'An error occurred while loading the component');
}

getComponent().then(component => {
  document.body.appendChild(component);
});
