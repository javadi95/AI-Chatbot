# -*- coding: utf-8 -*-
"""
Created on Mon Jun 10 18:48:12 2024

@author: JHS-07
"""

async function sendMessage() {
    const inputBox = document.getElementById('user-input');
    const message = inputBox.value;
    if (!message) return;

    // Display user message
    displayMessage(message, 'user');
    inputBox.value = '';

    // Generate and display bot response
    const botResponse = await getBotResponse(message);
    displayMessage(botResponse, 'bot');
}

function displayMessage(message, sender) {
    const messagesContainer = document.getElementById('messages');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.innerText = message;
    messagesContainer.appendChild(messageElement);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

async function getBotResponse(message) {
    // Here you can integrate with your backend or directly with your fine-tuned GPT-2 model if hosted
    // For demonstration, we return a static response
    const response = await fetch('https://api.example.com/chatbot', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message })
    });
    const data = await response.json();
    return data.response || 'Sorry, I did not understand that.';
}
