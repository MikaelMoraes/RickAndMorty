<template>
  <router-link :to="'/character/' + props.id">
    <q-card class="character-card q-hoverable">
      <q-img :src="props.img" class="character-img">
        <div class="absolute-bottom text-h6 text-white bg-black bg-opacity-50 q-pa-sm">
          {{ props.title }}
        </div>
      </q-img>

      <q-card-section class="text-white text-center">
        <span v-if="props.describe === 'Alive'"> <i class="fa-solid fa-heart-pulse text-green"></i>
          Vivo</span>
        <span v-else-if="props.describe === 'Dead'"> <i class="fa-solid fa-skull text-red"></i>
          Morto</span>
        <span v-else> <i class="fa-solid fa-circle-question"></i> Desconhecido</span>

      </q-card-section>
    </q-card>
  </router-link>

</template>

<script setup lang="ts">
interface Props {
  title: string;
  id: string;
  img: string;
  describe: string;
}

const props = defineProps<Props>();
</script>

<style scoped>
.character-card {
  background: rgba(0, 0, 0, 0.75);
  border: 1px solid #7c4dff;
  overflow: hidden;
  box-shadow: 0 0 12px rgba(124, 77, 255, 0.3);
  backdrop-filter: blur(6px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.character-card:hover {
  transform: scale(1.03);
  box-shadow: 0 0 20px rgba(124, 77, 255, 0.6);
}

a {
  text-decoration: none;
}
</style>
