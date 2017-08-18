import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import filter from '@/store/modules/filter-label.js'
import detail from '@/store/modules/common-detail.js'
import tags from '@/store/modules/tags.js'
import table from '@/store/modules/table-common.js'
import product from '@/store/modules/product.js'
import classification from '@/store/modules/classification.js'
import branch from '@/store/modules/branch.js'
import ipr from '@/store/modules/ipr.js'
import area from '@/store/modules/area.js'
import feeCode from '@/store/modules/fee-code.js'
import invoiceEntity from '@/store/modules/invoice-entity.js'
import userGroup from '@/store/modules/user-group.js'
import flows from '@/store/modules/flows.js'
import taskDef from '@/store/modules/task-def.js'
import currentUser from '@/store/modules/current-user.js'
Vue.use(Vuex);

const store = new Vuex.Store({
  strict: true,
  state: {
    dragId: null,
    axios,
    status: 0, //这里进行地址代理控制, 为1时去掉/api, 为0时保留
    loading: false,
  },
  modules: {
    filter,
    detail,
    tags,
    table,
    product,
    classification,
    branch,
    ipr,
    area,
    feeCode,
    invoiceEntity,
    userGroup,
    flows,
    taskDef,
    currentUser,
  },
  mutations: {
    setDragId (state, id) {
      state.dragId = id;
    },
    AXIOS_FAILURE () {
      alert('网络错误');
    },
    onLoading (state) {
      state.loading = true;
    },
    cancelLoading (state) {
      state.loading = false;
    }
  },
  getters: {
    getDragId: state=>state.dragId,
    loading: state=>state.loading,
  },
});

export default store;