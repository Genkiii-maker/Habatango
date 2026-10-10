// 手動で登録する熟語リスト
// 形式：{ phrase: "英語表現", meaning: "日本語の意味", example: "例文（なくてもOK）" }
// ここに追加した熟語は自動抽出分とまとめて出題されます。
// 自動抽出と同じ熟語を登録した場合、こちらの意味・例文が優先されます。
const MANUAL_IDIOMS = [
  {
    phrase: "be fond of",
    meaning: "～が好きである",
    example: "I'm fond of reading books."
  }
];
