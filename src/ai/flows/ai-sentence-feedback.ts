'use server';
/**
 * @fileOverview Provides AI-powered feedback on Taiwanese Mandarin sentences.
 *
 * - aiSentenceFeedback - A function that analyzes a user's sentence and provides grammatical and naturalness feedback in Japanese.
 * - AiSentenceFeedbackInput - The input type for the aiSentenceFeedback function.
 * - AiSentenceFeedbackOutput - The return type for the aiSentenceFeedback function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiSentenceFeedbackInputSchema = z.object({
  sentence: z.string().describe('The user-composed sentence in Taiwanese Mandarin.'),
  vocabularyWord: z.string().optional().describe('The vocabulary word the sentence is based on (optional, for context).'),
});
export type AiSentenceFeedbackInput = z.infer<typeof AiSentenceFeedbackInputSchema>;

const AiSentenceFeedbackOutputSchema = z.object({
  feedback: z.string().describe('Detailed AI feedback in Japanese, including grammar corrections and naturalness suggestions.'),
});
export type AiSentenceFeedbackOutput = z.infer<typeof AiSentenceFeedbackOutputSchema>;

export async function aiSentenceFeedback(input: AiSentenceFeedbackInput): Promise<AiSentenceFeedbackOutput> {
  return aiSentenceFeedbackFlow(input);
}

const aiSentenceFeedbackPrompt = ai.definePrompt({
  name: 'aiSentenceFeedbackPrompt',
  input: {schema: AiSentenceFeedbackInputSchema},
  output: {schema: AiSentenceFeedbackOutputSchema},
  prompt: `あなたは台湾華語の教師です。提供された台湾華語の文章を添削し、文法や表現の自然さについて詳細なフィードバックを日本語で提供してください。添削は丁寧で建設的なトーンで行い、間違いがある場合はその理由を明確に説明し、より自然な表現の提案も行ってください。

もし文章が特定の単語（{{{vocabularyWord}}}）を使って構成されている場合、その単語の適切な使用法も考慮してフィードバックをしてください。

ユーザーの文章: """{{{sentence}}}"""

フィードバック:`,
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
