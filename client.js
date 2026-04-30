window.TrelloPowerUp.initialize({
  'card-badges': function(t, options) {
    // 1. カードのチェックリスト情報を取得
    return t.card('checklists')
      .get('checklists')
      .then(function(checklists) {
        if (checklists && checklists.length > 0) {
          // 2. 最初のチェックリストから未完了のアイテムを探す
          const firstChecklist = checklists[0];
          const incompleteItem = firstChecklist.checkItems.find(item => item.state === 'incomplete');

          if (incompleteItem) {
            return [{
              // 3. カード表面に表示する内容を設定
              text: '次: ' + incompleteItem.name, 
              color: 'blue', // バッジの色
              //icon: './icon.svg' // アイコン（任意）
            }];
          }
        }
        return []; // チェックリストがない場合は何も表示しない
      });
  }
});
