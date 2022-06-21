<template>
  <div>
    <v-container
        class="fill-height pa-0"
        fluid>
        <v-img
        src="https://i.pinimg.com/originals/8c/15/ba/8c15ba26124a1754a05b7b6196bde83f.jpg"
        height="325"
        cover
        class="bg-grey-lighten-2"
        ></v-img>
    </v-container>
    <div v-for="item in testfirebase" :key="item.name" class="ma-5">
      <li>user : {{ item.name }}</li>
      <li>height : {{ item.height }}</li>
    </div>
    <div>
        <v-text-field
            label="name"
            v-model="data.name"
        ></v-text-field>
          <v-text-field
            label="height"
            v-model="data.height"
        ></v-text-field>
        <v-btn @click="addToFirestore(name, height)">Add</v-btn>
        <v-btn @click="deleteFromFirestore(name, height)">Delete</v-btn>
         <v-btn @click="updateFromFirestore(name, height)">Update</v-btn>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import haha from '@/config/firebase.js';
// Components


export default defineComponent({
  name: 'AbOut',
  components: {

},
  data() {
    return {
      data : {
        name : '',
        height : '',
      },
      testfirebase: [],
    }
  },
  firestore: {
    testfirebase: haha.collection('Users')
  },
  methods: {
    async addToFirestore() {
      try {
        const req = await haha.collection('Users').add(this.data)
        console.log(req)
      } catch(e) {
        alert(e)
      }
    },
    async deleteFromFirestore() {
      try {
        const req = await haha.collection('Users').doc('j1UpQOxhECbWPDudVzEs').delete()
        console.log(req)
      } catch(e) {
        alert(e)
      }
    },
    async updateFromFirestore() {
      try {
        const req = haha.collection('Users').doc('wKOixDxf0yZUlWUVDkme').set(this.data)
        console.log(req)
      } catch(e) {
        alert(e)
      }
    }
  }
});
</script>
