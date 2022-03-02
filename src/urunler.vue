<template>
  <Button @click="get_products" label="Yükle"></Button>
  <Card style="width: 50rem; margin-bottom: 2em">
    <template #title>Simple Card</template>
    <template #content>
      <DataTable :value="todos" responsiveLayout="scroll">
        <Column field="userId" header="userId"></Column>
        <Column field="title" header="title"></Column>
        <Column field="completed" header="completed"></Column>
      </DataTable>
    </template>
  </Card>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue';
import axios from 'axios'
import DataTable from 'primevue/datatable';
import Card from 'primevue/card';
import Column from 'primevue/column';

const todos = ref();

todos.value = [
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  },
  {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
  }
]



onBeforeMount(() => {
  get_products();
})

function get_products () {
  axios.get('https://jsonplaceholder.typicode.com/todos').then(res => (todos.value = res.data));
}


console.log("xxx");


</script>         



