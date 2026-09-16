import { redirect } from "next/navigation";

/** 旧テーマ会話 → 15秒応答へ置き換え */
export default function ContextBuilderPage() {
  redirect("/quick-response");
}
