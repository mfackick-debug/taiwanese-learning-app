# プロジェクト引き継ぎ情報：TOCFL Band B リスニングアプリ開発

## 現在のステータス
- データ構造の移行完了（`SentenceCard` 型を `examples` 配列を持つ構造に更新）。
- 一括処理スクリプト（`scripts/rewriteData.ts`）を作成済み。
- Gemini無料枠の制限に達したため、DeepSeek API経由での爆速生成に切り替え中。

## 次の優先タスク
1. DeepSeek APIキーを `.env` に設定する。
2. `scripts/rewriteData.ts` をDeepSeek APIおよび並列処理に対応させるよう書き換える。
3. スクリプトを実行し、全データ（Band B/C）を本番仕様にアップデートする。

## 注意事項
- 既存の処理済みデータ（200件分）は保持し、未処理分のみ生成すること。
- データ構造（JSON/TS）を壊さないこと。