<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        theme="dark"
        rail
        permanent
      >
        <v-list-item prepend-avatar="https://randomuser.me/api/portraits/women/75.jpg"></v-list-item>

        <v-divider></v-divider>

        <v-list
          density="compact"
          nav
        >
          <v-list-item prepend-icon="mdi-view-dashboard" value="dashboard"></v-list-item>
          <v-list-item prepend-icon="mdi-forum" value="messages"></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-navigation-drawer
        permanent
      >
      <div class="ml-4 mt-4">
        <h1>SASIMAI</h1></div>
        <v-list>
          <v-list-item value="about">
            <router-link to="/">ABOUT</router-link>
          </v-list-item>
          <v-list-item value="accessories">
            <router-link to="/accessories">ACCESSORIES</router-link>
          </v-list-item>
          <v-list-item value="review">
            <router-link to="/review">REVIEW</router-link>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main style="height: 100%">
        <slot></slot>
      </v-main>
    </v-layout>
  </v-card>
</template>
