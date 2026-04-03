'use server';
/**
 * @fileOverview Provides AI-powered feedback on Taiwanese Mandarin sentences with mode-specific criteria.
 *
 * - aiSentenceFeedback - A function that analyzes a user's sentence and provides feedback based on training mode.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiSentenceFeedbackInputSchema = z.object({
  sentence: z.string().describe('The user-composed sentence in Taiwanese Mandarin.'),
  level: z.enum(['A', 'B']).describe('The TOCFL Band level.'),
  mode: z.enum(['word', 'triple', 'grammar']).describe('The training mode.'),
  vocabularyWords: z.array(z.string()).optional().describe('Target vocabulary words to check.'),
  grammarPoint: z.string().optional().describe('Target grammar structure to check.'),
  grammarDescription: z.string().optional().describe('Description of the target grammar.'),
});
export type AiSentenceFeedbackInput = z.infer<typeof AiSentenceFeedbackInputSchema>;

const AiSentenceFeedbackOutputSchema = z.object({
  feedback: z.string().describe('Detailed AI feedback in Japanese.'),
});
export type AiSentenceFeedbackOutput = z.infer<typeof AiSentenceFeedbackOutputSchema>;

export async function aiSentenceFeedback(input: AiSentenceFeedbackInput): Promise<AiSentenceFeedbackOutput> {
  return aiSentenceFeedbackFlow(input);
}

const aiSentenceFeedbackPrompt = ai.definePrompt({
  name: 'aiSentenceFeedbackPrompt',
  input: {schema: AiSentenceFeedbackInputSchema},
  output: {schema: AiSentenceFeedbackOutputSchema},
  prompt: `あなたは台湾華語の教師です。ユーザーが作成した文章を添削し、日本語でフィードバックを提供してください。

現在の学習レベル: TOCFL Band {{level}}
モード: {{mode}}

【トレーニングモード別指示】
{{#if (eq mode "word")}}
- ターゲット単語: {{{vocabularyWords.[0]}}} が正しく使われているか確認してください。
{{/if}}

{{#if (eq mode "triple")}}
- ターゲット単語（3つ）: {{#each vocabularyWords}}「{{{this}}}」 {{/each}}
- 上記3つの単語がすべて1つの文章の中で自然に使われているかを厳格にチェックしてください。
{{/if}}

{{#if (eq mode "grammar")}}
- ターゲット文法: {{{grammarPoint}}}
- 文法解説: {{{grammarDescription}}}
- 指定された文法構造（構文）が正しく成立しているかを重点的に添削してください。
{{/if}}

【添削基準】
{{#if (eq level "A")}}
- Band A: 基本的な文法、語順、日常的な単語の適切な使用を重視。間違いは優しく指摘。
{{else}}
- Band B: 中級レベル。接続詞の活用、成語、書面語の使用、論理的な構成を厳格に評価。
{{/if}}

ユーザーの文章: """{{{sentence}}}"""

フィードバックは、まず「評価（褒める点）」、次に「修正案（ピンイン付き）」、最後に「詳しい解説」の形式で記述してください。特にモードの達成条件（単語が含まれているか、文法が正しいか）に言及してください。`,
});

const aiSentenceFeedbackFlow = ai.defineFlow(
  {
    name: 'aiSentenceFeedbackFlow',
    inputSchema: AiSentenceFeedbackInputSchema,
    outputSchema: AiSentenceFeedbackOutputSchema,
  },
  async input => {
    const {output} = await aiSentenceFeedbackPrompt(input);
    return output!;
  }
);