Habatango 熟語クイズ追加手順

1. GitHubでリポジトリ直下に idiom フォルダを作成します。
2. idiom フォルダに、このパッケージの index.html と idioms-manual.js を別々のファイルとして追加します。
3. リポジトリ直下の index.html を編集し、以下の2箇所を変更してください。

A. 熟語クイズへのリンク
現在のメイン index.html で、ホーム画面の hero の閉じタグのすぐあと（`</div>` の次、`<div class="grid stats-home">` の前）に、次の1行を追加します。

<a class="secondary" href="idiom/index.html" style="display:block;text-align:center;text-decoration:none;margin:0 0 12px;">熟語クイズへ →</a>

B. 状態フィルターをボタン方式へ変更
まず、`<div class="section-title">状態で絞り込み</div>` から `id="statusFilters"` の閉じタグ `</div>` までだけを削除します。**その下にある「品詞で絞り込み」と `id="posFilters"` は残してください。**

次に、品詞フィルターの直後にある既存の `<div class="actions">` からその閉じタグ `</div>` までを、次のコードで置き換えます。

<div class="actions">
  <button class="primary" id="startBtn">テストを始める</button>
  <button class="secondary" id="weakBtn">苦手単語だけでテスト</button>
  <button class="secondary" id="favoriteBtn">お気に入りだけでテスト</button>
</div>

さらに、メイン index.html の JavaScript から、`/* ========================= 状態フィルター ========================= */` のコメントから `/* ========================= クイズ開始 ========================= */` の直前までを削除し、クイズ開始のボタン処理を下のコードに置き換えます。`function start(customFilter=null){...}` 本体は残します。

$('startBtn').onclick = () => start('all');
$('weakBtn').onclick = () => start('weak');
$('favoriteBtn').onclick = () => start('favorite');

※この作業はメイン index.html を編集します。idiom フォルダの2ファイルを置くだけでは、メイン画面に熟語クイズへのリンクは表示されません。

熟語の手動登録方法
idiom/idioms-manual.js の MANUAL_IDIOMS 配列に、次の形で項目を追加します。最後の項目以外はカンマを付けます。

{
  phrase: "look forward to",
  meaning: "～を楽しみに待つ",
  example: "I look forward to seeing you."
}
