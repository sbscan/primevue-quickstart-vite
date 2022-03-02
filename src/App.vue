<template>
  <div class="sticky top-0 left-0 pb-3 w-full font-bold z-5">
    <MegaMenu :model="items" class="align-self-center" />
  </div>

  <router-view />
</template>


<script setup>
import { ref } from 'vue';
import MegaMenu from 'primevue/megamenu';

const items = ref([
  {
    label: 'Videos', icon: 'pi pi-fw pi-video',
    items: [
      [
        {
          label: 'Video 1',
          items: [
            { label: 'Video 1.1', to: 'urunler' },
            { label: 'Video 1.2' },
            { label: 'Video 2.1' }, { label: 'Video 2.2' }]
        }
      ],
      [
        {
          label: 'Video 3',
          items: [{ label: 'Video 3.1' }, { label: 'Video 3.2' },
          { label: 'Video 4.1' }, { label: 'Video 4.2' }]
        }
      ],
      [
        {
          label: 'Video 3',
          items: [{ label: 'Video 3.1' }, { label: 'Video 3.2' },
          { label: 'Video 4.1' }, { label: 'Video 4.2' }]
        }
      ]

    ]
  },
  {
    icon: 'pi pi-plus',
    to: '/'
  },
  {
    label: 'Named Route',
    icon: 'pi pi-plus',
    to: { name: 'urunler' }
  },
  {
    label: 'External',
    icon: 'pi pi-check',
    to: '/hello'
  }
]);

</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>

