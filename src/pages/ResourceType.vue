<template>
  <div v-if="resourceDetails">
    <div class="type-name">
      <h2 class="type">{{ resourceDetails.resource_type }}</h2>
      <h4>{{ resourceDetails.description }}</h4>
    </div>
    <div class="card-container">
      <div
        class="resource-card"
        :key="resource_card.id"
        v-for="resource_card in resourceCardList"
      >
        <ResourceCard
          v-bind:resource_card="resource_card"
          @handleDelete="handleDelete"
          @resourceCardList="resourceCardList"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { BASE_URL } from '../globals.js';
import ResourceCard from '../components/ResourceCard.vue';
export default {
  name: 'ResourceType',
  components: {
    ResourceCard
  },
  data: () => ({
    resourceDetails: null,
    resourceCardList: null
  }),
  mounted: function () {
    this.getResourceDetails();
  },
  methods: {
    async getResourceDetails() {
      let id = parseInt(this.$route.params.resource_id);
      const res = await axios.get(`${BASE_URL}resourcetypes/${id}`);
      // console.log(res.data.resource_list[i].resource_type);
      this.resourceDetails = res.data;
      this.resourceCardList = res.data.resource_list;
    },
    handleDelete(id) {
      this.resourceCardList = this.resourceCardList.filter(
        (resourceCard) => resourceCard.id !== id
      );
    }
  }
};
</script>

<style scoped>
img {
  max-height: 100px;
  border-radius: 4px;
}

.type {
  margin-top: 50px;
  padding-top: 5px;
  font-size: 100px;
  padding-bottom: 0px;
  margin-bottom: 0px;
}
.type-name {
  padding: 5px;
  display: flex;
  flex-direction: column;
  width: 100%;
  color: rgba(161, 255, 255, 0.568);
  max-height: 200px;
}

.card-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;
  grid-gap: 1rem;
}

.resource-card {
  margin: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  /* background: rgba(50, 53, 53, 0.712); */
  border-radius: 8px;
  text-transform: initial;
  padding: 20px;
}
</style>
