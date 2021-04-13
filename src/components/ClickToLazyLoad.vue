<template>
  <div>
    <button @click="load">Lazy Load {{ cutNameIfNeeded() }}</button>
    <component v-if="show" :is="lazyLoad" />
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
export default defineComponent({
  setup() {
    const cutNameIfNeeded = () => {
      const name = "TestName";
      const shopName = "TestShopName";
      if (shopName.length >= 25) {
        return name.length >= 25 ? `${shopName.slice(0, 22)}...` : name;
      }
      return shopName;
    };
    return { cutNameIfNeeded };
  },
  data() {
    return {
      show: false,
      lazyLoad: null,
    };
  },
  methods: {
    load() {
      import("@/LazyLoad.vue").then((mod) => {
        console.log(mod.default);
        this.lazyLoad = mod.default;
        this.show = true;
      });
    },
  },
});
</script>
