import { ChatRequest, ChatResponse, SessionResponse } from '../types/chat';

// Mocked API responses for development
export const chatApi = {
  async startSession(): Promise<SessionResponse> {
    // Return a mock session ID
    return { session_id: `session-${Date.now()}` };
  },

  async sendMessage(request: ChatRequest): Promise<ChatResponse> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Return a mock response
    return {
      response: `This is a mock response for testing the UI. Your message was: "${request.query}"\n\nWhen the backend is ready, replace this with real API calls in src/services/api.ts`
    };
  },
};