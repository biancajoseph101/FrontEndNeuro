<template>
  <div id="postform">
    <div class="form-container">
      <form @submit="handleSubmit">
        <div>
          <h1>Knowledge is power. Share with the community!</h1>

          <h4>Select categories below</h4>
          <div class="checky">
            <div class="checky">
              <div
                class="checkbox-div"
                :key="resource_type.id"
                v-for="resource_type in resourceTypes"
              >
                <input
                  class="checkbox"
                  type="checkbox"
                  :value="resource_type.id"
                  name="resource_type"
                  v-on:change="handleSelectChange"
                />
                <label :value="resource_type.id" class="checkbox-type">
                  {{ resource_type.resource_type }}
                </label>
              </div>
              <span class="hide">selected types: {{ selectedTypes }}</span>
            </div>
          </div>
          <div>
            <div class="flex">
              <input
                placeholder="Topic"
                :value="topic"
                name="topic"
                type="topic"
                v-on:input="handleFormChange"
              />
              <input
                placeholder="Link"
                :value="link"
                name="link"
                type="link"
                v-on:input="handleFormChange"
              />
              <input
                placeholder="Image URL"
                :value="image"
                name="image"
                type="text"
                v-on:input="handleFormChange"
              />
              <input
                class="content"
                placeholder="Content"
                :value="content"
                name="content"
                type="content"
                v-on:input="handleFormChange"
              />
              <button v-on:click="handleSubmit" class="btn" type="submit">
                Submit Post
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { BASE_URL } from '../globals.js';
export default {
  name: 'ResourceForm',
  data: () => ({
    selectedTypes: [],
    resource_type: Array,
    topic: '',
    link: '',
    image: '',
    content: '',
    resourceTypes: Array
  }),
  mounted() {
    this.getResourceTypes();
  },
  methods: {
    async getResourceTypes() {
      const res = await axios.get(`${BASE_URL}resourcetypes/`);
      this.resourceTypes = res.data;
    },

    handleFormChange(e) {
      this[e.target.name] = e.target.value;
    },

    handleSelectChange(e) {
      // e.target.id = resource_type.id
      //   console.log(e.target.value);
      // this[e.target.id] = e.target.value;
      // this.resource_type.push(e.target.value);
      // let arr = [];
      // parseInt(e.target.value);

      this.selectedTypes.push(e.target.value);
      this.resource_type = this.selectedTypes;
    },

    async handleSubmit(e) {
      e.preventDefault();

      const res = await axios.post(
        `${BASE_URL}resources/`,
        {
          resource_type: this.resource_type,
          topic: this.topic,
          link: this.link,
          image: this.image,
          content: this.content
        },
        {
          auth: {
            username: 'nerduser',
            password: 'nerdpassword'
          }
        }
      );
      alert('Your submission has been posted!');
      location.reload();
      console.log(res);
    }
  }
};
</script>

<style scoped>
.selectType {
  min-width: 500px;
}
h1 {
  color: #80cbc4;
  font-style: italic;
}
input {
  width: 700px;
  height: 100px;
  margin: 10px;
  font-size: 20px;
}

.flex {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.hide {
  color: rgba(7, 27, 54, 255);
}
.btn {
  width: 710px;
  height: 60px;
  margin: 10px;
  font-size: 20px;
  cursor: pointer;
  border-radius: 15px;
}

.btn:hover {
  background-color: #3b9698;

  color: white;
  cursor: pointer;
}
.checkbox-div {
  font-size: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: wrap;
  float: right;
}
.checky {
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 40px;
  flex: 1 1 auto;
  margin-left: 20%;
}
.checkbox {
  max-height: 30px;
  max-width: 30px;
  border-radius: 10px;
  display: flex;

  cursor: pointer;
}
</style>
