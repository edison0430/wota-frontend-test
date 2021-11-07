<template>
  <div v-if="isPaginationShown" class="flex items-center q-gutter-sm">
    <q-select
      dense
      outlined
      v-model="pages.rowsPerPage"
      :options="pagesOption"
      label="每頁顯示筆數"
      style="width: 120px"
    />
    <span>{{ rowText }}</span>
    <slot></slot>
  </div>
</template>

<script setup>
import { computed, toRefs } from 'vue';

const props = defineProps({
  pages: Object,
});

const pagesOption = [5, 10, 20, 50];

const isPaginationShown = computed(() => {
  const { pages } = toRefs(props);

  return pages.value.rowNumber > 0;
});

const rowText = computed(() => {
  const { pages } = toRefs(props);

  const pageFirstRow = (pages.value.page - 1) * pages.value.rowsPerPage + 1;
  const pageLastRow = Math.min(
    pages.value.page * pages.value.rowsPerPage,
    pages.value.rowNumber
  );

  return `${pageFirstRow} - ${pageLastRow} 列，共 ${pages.value.rowNumber} 列`;
});
</script>

<style></style>
