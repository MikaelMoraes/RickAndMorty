<template>
  <div class="row">
    <div class="col-12 text-center">
      <q-img src="https://1000logos.net/wp-content/uploads/2022/03/Rick-and-Morty.png" style="max-width: 25%;"></q-img>
    </div>
  </div>
  <div class="q-pa-md flex justify-center items-center">
    <q-card class="profile-card">
      <q-card-section class="text-center">
        <q-avatar size="150px" class="q-mb-md">
          <img :src="`${characterDetails?.character.image}`" alt="Profile Image" />
        </q-avatar>
        <h3 class="text-h5 text-white">{{ characterDetails?.character.name }}</h3>
        <p class="text-grey-4">
          <i class="fa-solid fa-dungeon text-purple"></i> <strong>{{ characterDetails?.character.location.dimension ==
            'unknown' ? 'Desconhecido' : characterDetails?.character.location.dimension
          }}</strong>
          <span class="q-ml-sm">| <strong> <i class="fa-solid fa-globe text-blue"></i> {{
            characterDetails?.character.location.name }}</strong></span>
        </p>
      </q-card-section>
      <q-separator dark />
      <q-card-section>
        <div class="info-row text-white">
          <span class="info-label">Status:</span>
          <span class="info-value">
            <span v-if="characterDetails?.character.status === 'Alive'"> <i
                class="fa-solid fa-heart-pulse text-green"></i>
              Vivo</span>
            <span v-else-if="characterDetails?.character.status === 'Dead'"> <i class="fa-solid fa-skull text-red"></i>
              Morto</span>
            <span v-else> <i class="fa-solid fa-circle-question"></i> Desconhecido</span>
          </span>
        </div>
        <div class="info-row text-white">
          <span class="info-label">Espécie:</span>
          <span class="info-value"><i class="fa-solid fa-dna"></i> {{ characterDetails?.character.species }}</span>
        </div>
        <div class="info-row text-white">
          <span class="info-label">Tipo:</span>
          <span class="info-value"><i class="fa-solid fa-question-circle"></i> {{ characterDetails?.character.type ||
            'Não definido' }}</span>
        </div>
        <div class="info-row text-white">
          <span class="info-label">Gênero:</span>
          <span class="info-value">

            <span v-if="characterDetails?.character.gender === 'Male'"> <i class="fa-solid fa-mars text-blue "></i>
              Masculino</span>
            <span v-else-if="characterDetails?.character.gender === 'Female'"> <i
                class="fa-solid fa-venus text-pink"></i>
              Feminino</span>
            <span v-else> <i class="fa-solid fa-genderless"></i> Outro</span>

          </span>
        </div>

        <q-tabs v-model="tab" dense class="bg-purple-3 text-white q-mt-md" active-color="yellow" indicator-color="white"
          align="justify">
          <q-tab name="Episodios" label="📺 Episódios" />
          <q-tab name="Residentes" label="👥 Residentes do Planeta" />
        </q-tabs>

        <q-tab-panels v-model="tab" animated class="bg-dark text-white">
          <q-tab-panel name="Episodios">
            <div class="text-h6 q-mt-sm">Episódios</div>
            <q-list class="q-ma-sm" bordered>
              <q-item clickable v-ripple v-for="item in characterDetails?.character.episode" :key="item.id">
                <q-item-section>{{ item.name }}</q-item-section>
                <q-item-section>{{ item.episode }}</q-item-section>
                <q-item-section>{{ item.air_date }}</q-item-section>
              </q-item>
            </q-list>
          </q-tab-panel>

          <q-tab-panel name="Residentes">
            <div class="text-h6 q-mt-sm">Residentes</div>
            <q-list class="q-ma-sm" bordered>
              <q-item clickable v-ripple v-for="item in characterDetails?.character.location.residents" :key="item.id">
                <q-item-section>
                  <router-link :to="'/character/' + item.id" class="text-white">{{ item.name }}</router-link>
                </q-item-section>
              </q-item>
            </q-list>
          </q-tab-panel>
        </q-tab-panels>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useCharacterDetails } from 'src/graphql/composable/useCharacterDetails';

const route = useRoute();
const tab = ref('Episodios');
const selectedCharacterId = ref(route.params.id as string);

watch(
  () => route.params.id,
  (newId) => {
    selectedCharacterId.value = newId as string;
  }
);

const { characterDetails } = useCharacterDetails(selectedCharacterId);
</script>

<style scoped>
.profile-card {
  width: 750px;
  max-width: 90%;
  padding: 20px;
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.75);
  box-shadow: 0 0 25px rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(4px);
  border: 1px solid #7c4dff;
}

.info-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.info-label {
  font-weight: 600;
}

.info-value {
  font-weight: 400;
}

a {
  text-decoration: none;
  color: white;
}
</style>
