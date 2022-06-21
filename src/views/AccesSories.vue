<template>

    <div class="d-flex flex-wrap justify-space-around">
        <div v-for="elem in data"
            :key="elem">
            <v-card
                class="mt-5"
                min-width="250"
                >
                <v-img
                class="align-end text-white"
                height="200"
                v-bind:src="elem['url']"
                cover
                >
                <v-card-title>{{ elem['name'] }}</v-card-title>
                </v-img>
                      <div class="ml-3 mt-3">
                        <v-rating
                        v-model="elem['rating']"
                        background-color="white"
                        color="yllow"
                        dense
                        hover
                        size="20"
                        ></v-rating>
                    </div>
                <v-card-text>
                <div >{{ elem['price'] }} ฿</div>
                </v-card-text>
                <v-card-actions>
                    <v-btn
                    variant="outlined"
                    color="black"
                    @click="buying(elem['name'], elem['price'])">
                        BUY
                    </v-btn>
                    <v-btn
                        icon
                        color="pink">
                        <v-icon>mdi-heart</v-icon>
                    </v-btn>
                </v-card-actions>
            </v-card>
        </div>
    </div>

</template>

<script>

export default {
    components: {

},
    data() {
        return {
            data: [
                {'name' : '1', 'price' : 450, 'url' : 'https://cf.shopee.co.th/file/7d092f95afc7cf90f0970b3b2b6619df', 'rating' : 3},
                {'name' : '2', 'price' : 650, 'url' : 'https://cf.shopee.co.th/file/c549465e76b59b198364c2882e3d6cb9', 'rating' : 5},
                {'name' : '3', 'price' : 550, 'url' : 'https://cf.shopee.co.th/file/963f61091a2c5fcb7a27d33bd4b54b1c', 'rating' : 4},
                {'name' : '4', 'price' : 350, 'url' : 'https://cf.shopee.co.th/file/2132f9a487131b21c8a6deda2fb92204', 'rating' : 5},
                {'name' : '5', 'price' : 850, 'url' : 'https://cf.shopee.co.th/file/5f642164d3f41c32edfb7a861bceb334', 'rating' : 5},
                {'name' : '6', 'price' : 250, 'url' : 'https://cf.shopee.co.th/file/f38cf0fc6431e6359a490e22dd308907', 'rating' : 4},
                {'name' : '7', 'price' : 950, 'url' : 'https://cf.shopee.co.th/file/58dfac5b91ded65f63fdb48b70a5c618', 'rating' : 3},
                {'name' : '8', 'price' : 1050, 'url' : 'https://cf.shopee.co.th/file/80f5a74eb9e710b2ca97ffac1867b9e2', 'rating' : 4},
            ]
        }
    },
    methods: {
        buying(name, price) {
            alert(name + " " + price)
        }
    }
}
</script>

<style>

</style>
