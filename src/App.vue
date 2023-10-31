
<template>
  <Header/>

  <router-view v-slot="{ Component }">
    <transition class="fade" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>

  <app-player />
  <auth/>

</template>


<script>
import Auth from "@/components/Auth.vue";
import Header from '@/components/Header.vue';
import { mapWritableState } from "pinia";
import useUserStore from "@/stores/user";
import { auth } from "./includes/firebase";
import AppPlayer from "@/components/Player.vue"

export default {
  name: "App",
  components: {
    Auth,
    Header,
    AppPlayer,
  },
  computed: {
    ...mapWritableState(useUserStore, ["userLoggedIn"]),
  },
  created() {
    if(auth.currentUser) {
      this.userLoggedIn = true;
    }
  }
}
</script>

<style>
.fade-enter-form {
  opacity: 0;
}

.fade-enter-active {
  transition: all .5s linear;
}

.fade-leave-to {
  transition: all .5s linear;
  opacity: 0;
}
</style>