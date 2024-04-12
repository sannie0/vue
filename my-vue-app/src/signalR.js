import { HubConnectionBuilder } from '@microsoft/signalr';

export const connection = new HubConnectionBuilder().withUrl("chatHub").build();

connection.start().then(() => {
    console.log("SignalR соединение успешно установлено");
  }).catch(err => {
    console.error("Ошибка при установке SignalR соединения:", err);
  });