<template>
  <div class="resource-container">
    <div class="container">
      <div class="top">
        <h2>
          {{ resource_card.topic }}
        </h2>
        <img :src="resource_card.image" />
      </div>
      <h4 class="content">
        {{ resource_card.content }}
      </h4>
    </div>

    <h5 class="source">
      <a href="#">{{ resource_card.link }} </a>
    </h5>
    <div class="showForm">
      <button @click="showForm = !showForm" class="updateBtn">edit</button>
      <div v-if="showForm" class="form-container">
        <form>
          <input
            placeholder="Edit Topic"
            :value="newTopic"
            name="newTopic"
            type="text"
            v-on:input="handleFormChange"
          />
          <input
            placeholder="Edit Content"
            :value="newContent"
            name="newContent"
            type="text"
            v-on:input="handleContentChange"
          />
          <div class="buttons">
            <button @click="updateResource" class="submitBtn">submit</button>
            <button @click="deleteResource" class="deleteBtn">x</button>
          </div>
        </form>
      </div>
      <div v-else></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'ResourceCard',
  data: () => ({
    showForm: false,
    topic: '',
    newTopic: '',
    content: '',
    newContent: ''
  }),
  props: {
    resource_card: Object
  },
  methods: {
    async deleteResource() {
      await axios.delete(
        `http://localhost:8000/resources/${this.resource_card.id}`,
        {
          auth: {
            email: 'nerd@nerd.nerd',
            password: 'nerdpassword'
          }
        }
      );
      this.$emit('handleDelete', this.resource_card.id);
    },
    handleFormChange(e) {
      this[e.target.name] = e.target.value;
      this.newTopic = e.target.value;
    },
    handleContentChange(e) {
      this[e.target.name] = e.target.value;

      this.newContent = e.target.value;
    },

    async updateResource(e) {
      e.preventDefault();
      const response = await axios.get(
        `http://localhost:8000/resources/${this.resource_card.id}`
      );
      const list = response.data.resource_type;
      console.log(list);

      const res = await axios.put(
        `http://localhost:8000/resources/${this.resource_card.id}`,
        {
          showForm: true,
          topic: this.newTopic,
          content: this.newContent,
          resource_type: list
        },
        {
          auth: {
            email: 'nerd@nerd.nerd',
            password: 'nerdpassword'
          }
        }
      );
      location.reload();
      //   alert('Your update has been made!');
      console.log(res);
    }
  }
};
</script>

<style scoped>
img {
  display: flex;
  opacity: 900%;
  max-height: 130px;
  margin: 5px;
  justify-content: flex-start;
  border-radius: 5px;
}
.showForm {
  visibility: visible;
  display: flex;
  align-items: start;
}
.container {
  display: grid;
  grid-template-columns: 1, 1fr;

  align-items: center;
  margin: 20px;
  color: rgba(255, 255, 255, 0.74);
}

.resource-container {
  background: #85e1e7bd;
  border-radius: 8px;
  box-shadow: 20px 20px #498ab363;
}
.top {
  display: flex;
  justify-content: space-between;
  padding-bottom: 30px;
  border-bottom: 2px solid white;
}
.submitBtn,
.updateBtn {
  width: 80px;
  height: 45px;
  margin: 10px;
  font-size: 15px;
  background-color: #122b3b;
  font-weight: bolder;
  cursor: pointer;
  border-radius: 10px;
  border: 4px solid;
  color: white;
}
.submitBtn:hover,
.updateBtn:hover {
  background-color: #e0b12f;
  color: white;
  cursor: pointer;
}
.deleteBtn {
  width: 50px;
  height: 45px;
  margin: 10px;
  font-size: 15px;
  background-color: #8d0000;
  font-weight: bolder;
  cursor: pointer;
  border-radius: 10px;
  border: 4px solid;
  color: rgba(255, 255, 255, 0.945);
}
a {
  color: rgb(21, 69, 88);
  padding: 10px;
}
a:hover {
  text-decoration: underline;
}

.source {
  background-color: rgba(230, 218, 218, 0.425);
  padding: 10px;
  border-radius: 12px;
  max-height: 75px;
  max-width: 600px;
  margin-left: 3px;
  margin-right: 3px;
}
.deleteBtn:hover {
  background-color: gray;
  color: white;
  cursor: pointer;
}
input {
  max-width: 300px;
  max-height: 40px;
}
.content {
  margin: 10px;
  padding: 6px;
  padding-bottom: 30px;
  border-bottom: 2px solid white;
}
h2 {
  font-size: 34px;
}
form {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.buttons {
  display: flex;
  justify-content: space-between;
}
</style>
