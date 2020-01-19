import RouterInterface from "@/interface/routerInterface";
import RevenueRecords from './RevenueRecords.vue'

let _router: RouterInterface = {
    path: '/revenueRecords',
    name: 'RevenueRecords',
    component: RevenueRecords,
};

export default [_router]