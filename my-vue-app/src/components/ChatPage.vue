<template>
  <div class="chat-window">
    <div class="chat-messages" ref="chatMessages">
      <!-- Отображение сообщений -->
      <div v-for="message in messages" :key="message.id" class="message">{{ message.text }}</div>
    </div>
    <div class="chat-input">

      <input class="custom-input" type="text" v-model="newMessage" placeholder="Введите сообщение...">

      <button class="custom-button" @click="sendMessage">Отправить</button>
    </div>
  </div>
</template>


<script>
import { connection } from '../signalR.js';
export default {
  data() {
    return {
      messages: [], 
      newMessage: ''
    };
  },
  methods: {
    async sendMessage() {
      try {
        await connection.invoke('SendMessage', 'UserName', 'UserId', this.newMessage);
        
        this.messages.push({ id: this.messages.length + 1, text: this.newMessage });

        this.newMessage = '';
        
        this.scrollToBottom();
      } catch (error) {
        console.error('Ошибка отправки сообщения:', error);
      }
    },
    scrollToBottom() {
      this.$refs.chatWindow.scrollTop = this.$refs.chatMessages.scrollHeight;
    }
  }
};
</script>