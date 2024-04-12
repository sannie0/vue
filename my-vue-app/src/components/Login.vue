<template>
    <form @submit.prevent="submitForm">
      <div>
        <input id="username" type="text" v-model="userName" placeholder="Имя пользователя" class="custom-input">
      </div>
      <br><br>
      <div>
        <input id="password" type="password" v-model="password" placeholder="Введите пароль" class="custom-input">
      </div>
    <div>
      
    </div><br>
      <button @mouseover="isHovered = true" @mouseleave="isHovered = false" class="custom-button">Войти</button>
    </form>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { LoginUser } from '../api.js';
  export default defineComponent({
    setup() {
      const userName = ref('');
      const password = ref('');
      const isHovered = ref(false);
  
      const submitForm = async () => {
        try {
          const response = await LoginUser(userName.value, password.value);
          console.log('Пользователь зарегистрирован', response.data);
        } catch (error) {
          console.error('Пользователь не зарегистрирован!');
        }
      };
  
      return {
        userName,
        password,
        isHovered,
        submitForm
      };
    }
  });
  </script>