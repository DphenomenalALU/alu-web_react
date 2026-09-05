(function () {
  'use strict';

  var count = 0;
  var style = document.createElement('style');

  style.textContent = '#logo { width: 200px; height: 200px; background: url(../assets/holberton-logo.jpg); background-repeat: no-repeat; background-size: 200px 200px; } #count { display: inline-block; margin-left: 12px; font-weight: bold; }';
  document.head.appendChild(style);

  function updateCounter() {
    count += 1;
    document.getElementById('count').textContent = count + ' clicks on the button';
  }

  function debounce(callback, wait) {
    var timeout;

    return function () {
      var context = this;
      var argumentsList = arguments;

      window.clearTimeout(timeout);
      timeout = window.setTimeout(function () {
        callback.apply(context, argumentsList);
      }, wait);
    };
  }

  document.body.insertAdjacentHTML('afterbegin', '<div id="logo"></div>');
  document.body.insertAdjacentHTML('beforeend', '<p>Holberton Dashboard</p>');
  document.body.insertAdjacentHTML('beforeend', '<p>Dashboard data for the students</p>');
  document.body.insertAdjacentHTML('beforeend', '<button id="button">Click here to get started</button>');
  document.body.insertAdjacentHTML('beforeend', '<p id="count"></p>');
  document.body.insertAdjacentHTML('beforeend', '<p>Copyright - Holberton School</p>');

  document.getElementById('button').addEventListener('click', debounce(updateCounter, 500));
}());
