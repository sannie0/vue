<template>
    <div>
      <!-- Верхняя часть страницы с заголовком -->
      <h1>{{ chatName }}</h1>
      
      <!-- Диалоговое окно с сообщениями -->
      <div class="chat-messages">
        <div v-for="(message, index) in messages" :key="index" class="message">
          <span>{{ message.sender }}:</span>
          <span>{{ message.content }}</span>
        </div>
      </div>
  
      <!-- Инпут для ввода сообщения -->
      <input v-model="newMessage" type="text" placeholder="Введите сообщение">
  
      <!-- Кнопка для отправки сообщения -->
      <button @click="sendMessage">Отправить</button>
  
      <!-- Кнопка для приглашения друга -->
      <button @click="inviteFriend">Пригласить друга</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        chatName: 'Название чата',
        messages: [], // Здесь будут храниться сообщения чата
        newMessage: '', // Содержимое нового сообщения
      };
    },
    methods: {
      sendMessage() {
        // Логика отправки сообщения
        // Здесь можно отправить newMessage на сервер
        // и добавить его в список сообщений
        this.messages.push({
          sender: 'Вы', // Пока предположим, что вы отправляете сообщения
          content: this.newMessage
        });
        // Очистка инпута после отправки сообщения
        this.newMessage = '';
      },
      inviteFriend() {
        // Логика приглашения друга
      }
    }
  };
  </script>
  