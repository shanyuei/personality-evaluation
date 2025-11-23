<template>
  <header :class="['app-header', variant]">
   
  </header>
</template>

<script setup lang="ts">
import { withDefaults, defineProps, ref } from "vue";
import { useRouter } from "vue-router";


const router = useRouter();
const go = (to?: string) => {
  if (to) router.push(to);
};
const menuOpen = ref(false);
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};



</script>

<style scoped>
.app-header {
  width: 100%;
  background: linear-gradient(90deg, #b5f3d2 0%, #f4cce4 100%);
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}
.app-header.compact {
  background: linear-gradient(90deg, #d7f5e6 0%, #f7d8ea 100%);
}
.row {
  display: flex;
  align-items: center;
  gap: var(--mcp-space-md);
  min-height: 64px;
}
.left {
  display: flex;
  align-items: center;
}
.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: #111;
}
.logo {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: #111;
  color: #fff;
  display: grid;
  place-items: center;
  font-weight: 700;
}
.center {
  flex: 1;
}
.center ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 20px;
  align-items: center;
}
.nav-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: #333;
  text-decoration: none;
}
.nav-link:hover {
  color: #000;
}
.right {
  display: flex;
  align-items: center;
  gap: 16px;
}
.cta {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 16px;
  border-radius: 999px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #111;
}
.cta-icon {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: #111;
  color: #fff;
  display: grid;
  place-items: center;
}
.lang {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.lang select {
  border: none;
  background: transparent;
  font: inherit;
}

.menu-btn {
  display: none;
  border: none;
  background: transparent;
  font-size: 20px;
}
@media (max-width: 768px) {
  .menu-btn {
    display: inline-block;
  }
  .center {
    display: none;
  }
  .center.open {
    display: block;
  }
  .center ul {
    flex-direction: column;
    gap: 12px;
    padding: 12px 0;
  }
}
</style>
