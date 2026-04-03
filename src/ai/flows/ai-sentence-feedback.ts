'use server';
/**
 * @fileOverview Provides AI-powered feedback on Taiwanese Mandarin sentences with level-specific criteria.
 *
 * - aiSentenceFeedback - A function that analyzes a user's sentence and provides feedback based on TOCFL Band A or B.
 * - AiSentenceFeedbackInput - The input type for the aiSentenceFeedback function.
 * - AiSentenceFeedbackOutput - The return type for the aiSentenceFeedback function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiSentenceFeedbackInputSchema = z.object({
  sentence: z.string().describe('The user-composed sentence in Taiwanese Mandarin.'),
  vocabularyWord: z.string().optional().describe('The vocabulary word the sentence is based on.'),
  level: z.enum(['A', 'B']).describe('The TOCFL Band level (A for beginner, B for intermediate).'),
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
  prompt: `あなたは台湾華語の教師です。ユーザーが作成した文章（ターゲット単語: {{{vocabularyWord}}}）を添削し、日本語でフィードバックを提供してください。

現在の学習レベル: TOCFL Band {{level}}

【添削基準】
{{#if (eq level "A")}}
- Band A (Level 1-2): 初級レベルです。基本的な文法、語順、日常的な単語の適切な使用を重視してください。間違いは優しく指摘し、簡単な語彙での言い換えを提案してください。
{{else}}
- Band B (Level 3-4): 中級レベルです。接続詞（雖然...但是...、不僅...而且...など）の活用、成語の使用、書き言葉（書面語）と話し言葉の使い分けなど、より高度で論理的な表現を求めてください。論理の飛躍がないか、より洗練されたプロフェッショナルな表現がないか検討してください。
{{/if}}

ユーザーの文章: """{{{sentence}}}"""

フィードバックは、まず「評価（褒める点）」、次に「修正案（ピンイン付き）」、最後に「詳しい解説」の形式で記述してください。`,
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
