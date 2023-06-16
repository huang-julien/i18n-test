<template>
  <div>
    <span id="hello">{{ $t('hello') }}</span>
    <p>current route : {{ $route.fullPath }}</p>
    <div>cookie value: {{ i18nCookie }}</div>
    URL: {{ $route.fullPath }}
    <button @click="() => switchLang('fr')">to fr</button>
    <button @click="() => switchLang('en')">to en</button>
    <p>typeof locale: {{ typeoflocale }}</p>
  </div>
</template>
<script setup lang="ts">
const i18nCookie = useCookie('i18n_redirected');

i18nCookie.value = 'en';
const locale = useNuxtApp().$i18n.locale;
const typeoflocale = typeof locale;
const switchLocalePath = useSwitchLocalePath();
function switchLang(local: string) {
  navigateTo(switchLocalePath(local));
}

useHead({
  title: 'hallo',
});
</script>
