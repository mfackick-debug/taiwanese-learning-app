/** 各ストーリーカード ID に対応する背景状況（ト書き）— 第1話のみ。第2話以降は各カードの sceneContext を使用。 */
export const STORY_SCENE_CONTEXTS: Record<string, string> = {
  "STORY-001": "台北のマンション・玄関。今日からルームシェアを始める隆志と、出迎えるアレンの初対面。",
  "STORY-002": "同じくマンションのリビング。隆志が少し緊張しながら、自己紹介を始める。",
  "STORY-003": "マンションから近所へ向かう道。アレンが周辺の生活環境を説明している。",
  "STORY-004": "マンションの共有リビング。キッチンと洗濯機を見せながらの案内。",
  "STORY-005": "リビングのテーブル。アレンが隆志に悠遊カードを手渡す場面。",
};

export function getSceneContextForCard(cardId: string): string | undefined {
  return STORY_SCENE_CONTEXTS[cardId];
}
