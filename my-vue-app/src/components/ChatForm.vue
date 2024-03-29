<template>
  <form @submit.prevent="submitForm">
    <div>
      <input id="username" type="text" v-model="userName" placeholder="Имя пользователя" class="custom-input">
    </div>
    <br><br>
    <div>
      <input id="chatname" type="text" v-model="chatName" placeholder="Название чата" class="custom-input">
    </div>
    <br><br>
    <button @mouseover="isHovered = true" @mouseleave="isHovered = false" class="custom-button">Создать чат</button>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import axios from 'axios';

export default defineComponent({
  setup() {
    const userName = ref('');
    const chatName = ref('');
    const isHovered = ref(false);

    const submitForm = () => {
      console.log('Отправлена форма с именем пользователя:', userName.value, 'и названием чата:', chatName.value);
      const formData = {
        userName: userName.value,
        chatName: chatName.value
      };
    
      axios.post('/api/Chat/CreateChatRoom', formData)
        .then(response => {console.log(response.data);})
        .catch(error => {console.error('Ошибка при отправке данных формы:', error);});
    };

    return {
      userName,
      chatName,
      isHovered,
      submitForm
    };
  }
});
</script>
