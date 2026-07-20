import { STORY_EPISODES } from "./episodes";

function getStoryEpisode(episodeNumber: number) {
  return STORY_EPISODES.find((ep) => ep.episodeNumber === episodeNumber);
}

/** 各話クリア後に表示する「次回予告」テキスト */
const NEXT_EPISODE_TEASERS: Record<number, string> = {
  1: "タカシは台北の生活に慣れてきたが、次回、伝統市場でまさかのトラブルが…！？",
  2: "買い出しも順調——と思いきや、突如訪れた体調不良。健保カードの出番が来る…！",
  3: "回復したかと思えば、今度はルームの水漏れ！大家さんとの交渉が始まる…",
  4: "修理も落ち着いた頃、阿倫が台北の交通サバイバルをレクチャーすることに…！",
  5: "捷運もタクシーもマスターしたタカシ。週末、阿倫と約束したお出かけの日が来る…！",
  6: "台南の古い街並みに感動する二人。歴史と文化の差異に、タカシの目が輝く…",
  7: "港町・高雄へ。再開発と経済の話題で、タカシの視野がさらに広がっていく…",
  8: "花蓮・緑島の大自然。環境保護の大切さを学び、新たな趣味も芽生える…！",
  9: "帰国後、台湾企業とのリモートワークがスタート。会議とメールの試練が待つ…",
  10: "仕事も軌道に乗り、就労ビザの手続きへ。役所での書類地獄が始まる…！",
  11: "すべてが整い、最後の夜。寧夏夜市で、タカシの未来への決意が試される…",
};

export interface EpisodeClearScreenData {
  episodeNumber: number;
  episodeTitle: string;
  synopsis: string;
  nextEpisodeNumber: number | null;
  nextEpisodeTitle: string | null;
  nextEpisodeTeaser: string | null;
  isFinalEpisode: boolean;
}

export function getEpisodeClearScreenData(
  episodeNumber: number
): EpisodeClearScreenData | null {
  const episode = getStoryEpisode(episodeNumber);
  if (!episode) return null;

  const next = getStoryEpisode(episodeNumber + 1);
  const isFinalEpisode = episodeNumber >= STORY_EPISODES.length;

  return {
    episodeNumber: episode.episodeNumber,
    episodeTitle: episode.title,
    synopsis: episode.synopsis,
    nextEpisodeNumber: next?.episodeNumber ?? null,
    nextEpisodeTitle: next?.title ?? null,
    nextEpisodeTeaser: isFinalEpisode
      ? null
      : (NEXT_EPISODE_TEASERS[episodeNumber] ?? `次回：第${episodeNumber + 1}話「${next?.title ?? ""}」`),
    isFinalEpisode,
  };
}
