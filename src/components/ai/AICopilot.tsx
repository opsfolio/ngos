import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Bot, Send, Sparkles, MessageSquare, Lightbulb } from 'lucide-react';

const suggestions = [
  "Show me what's blocking audit center",
  "What controls need immediate attention?",
  "Help me prepare for SOC 2 audit",
  "Identify high-risk vulnerabilities"
];

const mockResponses = [
  {
    type: 'insight',
    content: 'Based on your current compliance status, you have 3 critical gaps that need immediate attention before your upcoming audit.'
  },
  {
    type: 'suggestion',
    content: 'I recommend starting with the Access Control policy review as it affects 12 other controls.'
  }
];

export const AICopilot = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState(mockResponses);

  const handleSend = () => {
    if (!input.trim()) return;
    
    // Add user message
    const userMessage = { type: 'user', content: input };
    
    // Add AI response
    const aiResponse = {
      type: 'insight',
      content: `I'll help you with "${input}". Let me analyze your current compliance status and provide specific recommendations.`
    };
    
    setMessages([...messages, userMessage, aiResponse]);
    setInput('');
  };

  return (
    <Card className="shadow-soft">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2 text-lg font-semibold text-foreground">
          <div className="w-8 h-8 bg-gradient-accent rounded-lg flex items-center justify-center">
            <Bot className="w-4 h-4 text-accent-foreground" />
          </div>
          <span>AI Compliance Assistant</span>
          <Badge variant="outline" className="bg-accent-light text-accent border-accent/20 ml-auto">
            <Sparkles className="w-3 h-3 mr-1" />
            Beta
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* AI Responses */}
        <div className="space-y-3 max-h-48 overflow-y-auto">
          {messages.map((message, index) => (
            <div key={index} className={`flex items-start space-x-3 ${
              message.type === 'user' ? 'justify-end' : ''
            }`}>
              {message.type !== 'user' && (
                <div className="w-6 h-6 bg-accent-light rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Bot className="w-3 h-3 text-accent" />
                </div>
              )}
              <div className={`p-3 rounded-lg max-w-xs ${
                message.type === 'user' 
                  ? 'bg-primary text-primary-foreground ml-auto' 
                  : 'bg-muted text-foreground'
              }`}>
                <p className="text-sm">{message.content}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Suggestions */}
        <div className="space-y-2">
          <p className="text-xs font-medium text-muted-foreground flex items-center">
            <Lightbulb className="w-3 h-3 mr-1" />
            Quick questions:
          </p>
          <div className="flex flex-wrap gap-2">
            {suggestions.map((suggestion, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                className="text-xs h-7 bg-muted/50 hover:bg-accent-light hover:text-accent hover:border-accent/30"
                onClick={() => setInput(suggestion)}
              >
                {suggestion}
              </Button>
            ))}
          </div>
        </div>

        {/* Input */}
        <div className="flex space-x-2">
          <Input
            placeholder="Ask about compliance, audits, or risks..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            className="flex-1"
          />
          <Button onClick={handleSend} size="icon" className="bg-gradient-accent hover:bg-accent">
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};