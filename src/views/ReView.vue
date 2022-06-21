// eslint-disable-next-line vue/multi-word-component-names
<template>
        <div class="d-flex flex-wrap" v-if="review == true">
        <v-card
            class="mt-5 ml-5"
            width="525"
            v-model:title="text"
            v-model:subtitle="name"
            v-model:text="user"
        ></v-card>
        </div>
        <div class="mt-3 ml-5">
             <v-text-field
            v-model="user"
            label="Username"
            required
          ></v-text-field>
            <v-text-field
            v-model="name"
            label="Product"
            required
          ></v-text-field>
            <v-text-field
            v-model="text"
            label="Comment"
            required
          ></v-text-field>
          <v-btn @click="addReview(text, name, user)">Submit</v-btn>
        </div>

</template>

<script>


export default {

  components: {

},
    data() {
        return {
            review : false,
            text : '',
            name : '',
            uesr : '',
        }
    },
    methods: {
        addReview(text, name, user) {
            this.review = true
            this.text = text
            this.name = name
            this.user = user
        }
    }
}
</script>

<style>

</style>
