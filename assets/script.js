// 首頁分類篩選：依卡片的 data-category 顯示／隱藏，並同步到網址 hash
(function () {
  var buttons = document.querySelectorAll('.filters button[data-filter]');
  var cards = document.querySelectorAll('#recipe-list .card');
  var empty = document.getElementById('empty-state');
  if (!buttons.length) return;

  // 可用的分類代碼從標籤按鈕讀取，增減分類只需修改 index.html
  var valid = Array.prototype.map.call(buttons, function (b) { return b.dataset.filter; });

  function apply(filter) {
    if (valid.indexOf(filter) === -1) filter = 'all';
    var shown = 0;

    buttons.forEach(function (btn) {
      var on = btn.dataset.filter === filter;
      btn.classList.toggle('active', on);
      btn.setAttribute('aria-pressed', on ? 'true' : 'false');
    });

    cards.forEach(function (card) {
      var match = filter === 'all' || card.dataset.category === filter;
      card.hidden = !match;
      if (match) shown++;
    });

    if (empty) {
      empty.hidden = shown > 0;
      empty.textContent = cards.length === 0 ? '尚未收錄食譜' : '此分類尚無食譜';
    }
  }

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var f = btn.dataset.filter;
      history.replaceState(null, '', f === 'all' ? location.pathname : '#' + f);
      apply(f);
    });
  });

  window.addEventListener('hashchange', function () {
    apply(location.hash.slice(1));
  });

  apply(location.hash.slice(1) || 'all');
})();
