<template>
  <div>
    <h2>Featured Articles</h2>
    <div class="container">
      <div class="article" v-for="tag in tag_array" :key="tag.id">
        <h4>{{ tag.date }}</h4>
        <h1>{{ tag.title }}</h1>

        <img :src="tag.image_url" />
        <div :class="{ readLess: readMore == true }" class="content">
          <h3>{{ tag.content }}</h3>
        </div>
        <div v-if="readMore == true" class="read-more">
          <button @click="readMore = !readMore">Read more</button>
        </div>
        <div v-else class="read-less">
          <button @click="readMore = !readMore">Collapse</button>
        </div>

        <h5 class="source">
          SOURCE: <a href="#">{{ tag.source }}</a>
        </h5>
      </div>
    </div>
  </div>
</template>

<script>
import { BASE_URL } from '../globals.js';
import axios from 'axios';
export default {
  name: 'Article',
  components: {},
  data: () => ({
    tag_array: Array,
    readMore: true
  }),
  mounted() {
    this.getTags();
  },
  methods: {
    async getTags() {
      const res = await axios.get(`${BASE_URL}posts/`);
      this.tag_array = res.data;
      // console.log(this.tag_array);
    }
    // handleDelete(id) {
    //   this.tag_aray = this.tag_array.filter((post) => post.id !== id);
    // }
  }
};
</script>
<style scoped>
a {
  color: rgb(11, 63, 87);
}
a:hover {
  text-decoration: underline;
}

button {
  width: 510px;
  height: 60px;
  margin: 10px;
  font-size: 20px;
  background-color: #103242;
  font-weight: bolder;
  cursor: pointer;
  border-radius: 10px;
  border: 3px solid;
  color: white;
}
button:hover,
.source:hover {
  background-color: #f3f3f3;
  color: rgb(32, 90, 107);
  cursor: pointer;
}
.article {
  margin: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background: rgba(29, 82, 110, 255);
  text-transform: initial;
  padding: 20px;
  max-width: 500px;
}

.readLess {
  height: 200px;
  overflow: hidden;
}

.read-more,
.read-less {
  display: inline-block;
  color: white;
}
.container {
  /* max-width: 900px; */
  display: flex;
  flex-direction: row;
  flex: 2 1 auto;
  justify-content: space-between;
  flex-wrap: wrap;
}
.container > * {
  flex: 1 1 auto;
}
img {
  height: 250px;
  width: 300px;
  border-radius: 4px;
  opacity: 80%;
  /* display: flex;
  align-items: flex-start; */
}

h2 {
  margin-top: 5px;
  padding-top: 5px;
  display: flex;
  font-size: 60px;
  justify-content: space-around;
  width: 100%;
  color: #94eee58c;
}
h1 {
  color: white;
  font-weight: bolder;
}
.source {
  background-color: rgba(230, 218, 218, 0.425);
  padding: 10px;
  color: white;
  border-radius: 12px;
  max-height: 45px;
  max-width: 500px;
  white-space: pre-line;
}
</style>
