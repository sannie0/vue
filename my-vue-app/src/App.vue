<template>
  <div>
    <ChatForm />
  </div>
</template>

<script>
import ChatForm from './components/ChatForm.vue';
import ChatPage from './components/ChatPage.vue';
//import axios from "axios";


export default {
    components: {
    ChatForm,
    ChatPage
  }
};
</script>
