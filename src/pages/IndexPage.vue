<template>
  <div class="q-pa-xl example-row-all-breakpoints">
    <div class="row">
      <div class="col-12 text-center">
        <q-img src="https://1000logos.net/wp-content/uploads/2022/03/Rick-and-Morty.png"
          style="max-width: 35%; "></q-img>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <q-input v-model="nameFilter" label="Pesquisar" color="purple-12" standout />
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-sm-6 col-md-3 mx-2 q-pa-lg" v-for="item in characters?.characters?.results" :key="item.id">
        <CardComponent :title="item.name" :id="item.id" :describe="item.status" :img="item.image"></CardComponent>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="q-pa-lg flex flex-center">
          <q-pagination color="purple" v-model="page" :max="totalPages" direction-links />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CardComponent from 'src/components/CardComponent.vue';
import { useCharacters } from 'src/graphql/composable/useCharacters';
import { ref } from 'vue';
const page = ref(1)
const nameFilter = ref('')
const { characters, totalPages } = useCharacters(page, nameFilter)


</script>
<style scoped></style>