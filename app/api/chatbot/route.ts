import { NextRequest, NextResponse } from 'next/server';
import { generateChatbotResponse } from '@/lib/chatbot';

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required and must be a string' },
        { status: 400 }
      );
    }

    // Generate response using our knowledge base
    const response = generateChatbotResponse(message);

    return NextResponse.json({
      success: true,
      response: response.message,
      suggestions: response.suggestions || [],
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Chatbot API error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to process message',
        response: "I'm sorry, I'm having trouble processing your message right now. Please try again or contact us directly at +263 77 851 9223."
      },
      { status: 500 }
    );
  }
}

// Handle GET requests for health check
export async function GET() {
  return NextResponse.json({
    status: 'online',
    message: 'Kabo Billiards Chatbot API is running',
    timestamp: new Date().toISOString()
  });
}
