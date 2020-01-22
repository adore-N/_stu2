import RouterInterface from "@/interface/routerInterface";
// import RevenueRecords from './RevenueRecords.vue'
import RevenueRecords from '@/views/revenueRecords/RevenueRecords.vue'


let _router: RouterInterface = {
    path: '/revenueRecords',
    name: 'RevenueRecords',
    component: RevenueRecords,
};

export default [_router]