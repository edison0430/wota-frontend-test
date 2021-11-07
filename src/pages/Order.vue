<template>
  <div class="q-pa-md">
    <!-- filter -->
    <div class="q-mb-md q-gutter-md row">
      <q-btn color="primary" @click="fetch">查詢</q-btn>
      <q-input
        outlined
        v-model="filter.delivery_date"
        class="cursor-pointer"
        label="運送日期"
        dense
      >
        <q-popup-proxy
          ref="qDateProxy"
          transition-show="scale"
          transition-hide="scale"
        >
          <q-date
            v-model="filter.delivery_date"
            @update:model-value="() => $refs.qDateProxy.hide()"
          ></q-date>
        </q-popup-proxy>
        <template v-slot:append>
          <q-icon name="event" />
        </template>
      </q-input>
      <q-select
        dense
        outlined
        v-model="filter.city"
        multiple
        :options="cityOptions"
        label="配送縣市"
        style="width: 150px"
      />
      <q-select
        dense
        outlined
        clearable
        v-model="filter.order_status"
        :options="orderStatusOptions"
        label="訂單狀態"
        style="width: 150px"
      />
      <q-select
        dense
        outlined
        clearable
        v-model="filter.financial_status"
        :options="financialStatusOptions"
        label="付款狀態"
        style="width: 150px"
      />
      <q-select
        dense
        outlined
        clearable
        v-model="filter.fulfillment_status"
        :options="fulfillmentStatusOptions"
        label="運送狀態"
        style="width: 150px"
      />
    </div>

    <!-- table -->
    <q-table
      v-if="isSearched"
      title="訂單查詢"
      :rows="rows.data"
      :columns="columns"
      row-key="name"
    />
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { apiFetchOrder } from '../api/order';

const columns = [
  {
    name: 'orderName',
    label: '訂單編號',
    align: 'left',
    field: (row) => row.order_name,
    sortable: true,
  },
  {
    name: 'customer',
    label: '客戶名稱',
    align: 'left',
    field: (row) => row.customer_name,
    sortable: false,
  },
  {
    name: 'price',
    label: '總消費金額',
    align: 'right',
    field: (row) => row.total_price,
    sortable: true,
    format: (val) => {
      const formatter = new Intl.NumberFormat('en-us', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
      });

      return formatter.format(val);
    },
  },
  {
    name: 'time',
    label: '訂單建立時間',
    align: 'left',
    field: (row) => row.created_at,
    sortable: true,
  },
  {
    name: 'status',
    label: '訂單狀態',
    align: 'left',
    field: (row) => row.order_status,
    sortable: false,
  },
  {
    name: 'payment',
    label: '付款狀態',
    align: 'left',
    field: (row) => row.financial_status,
    sortable: false,
  },
  {
    name: 'fulfillment',
    label: '運送狀態',
    align: 'left',
    field: (row) => row.fulfillment_status,
    sortable: false,
  },
  {
    name: 'deliveryDate',
    label: '運送日期',
    align: 'left',
    field: (row) => row.delivery_date,
    sortable: true,
  },
  {
    name: 'address',
    label: '客戶地址',
    align: 'left',
    field: (row) => row.receiver_address,
    sortable: true,
  },
];
const rows = reactive({
  data: [],
});

const cityOptions = ['台北市', '新北市', '新竹市', '台南市', '高雄市'];
const orderStatusOptions = ['open', 'calcelled', 'closed'];
const financialStatusOptions = ['paid', 'pending', 'refunded'];
const fulfillmentStatusOptions = ['received', 'preparing'];

const filter = reactive({
  delivery_date: new Date().toISOString().slice(0, 10).replace(/-/g, '/'),
  city: [],
  order_status: null,
  financial_status: null,
  fulfillment_status: null,
});

const isSearched = ref(false);

async function fetch() {
  const params = {};

  for (const key in filter) {
    if (filter[key] instanceof Array) {
      if (filter[key].length > 0) {
        params[key] = [...filter[key]];
      }
    } else {
      if (filter[key]) {
        params[key] = filter[key];
      }
    }
  }

  const response = await apiFetchOrder(params);
  const responseData = response.data;
  rows.data = [...responseData.content];
  isSearched.value = true;
}
</script>

<style></style>
