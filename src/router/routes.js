const Home = () => import('../views/Home');
const NewCat = () => import('../views/NewCat');

export default [
    {
        path: '/',
        meta: {
            title: 'Gatinhos - home'
        },
        name: 'Home',
        component: Home,
    },
    {
        path: '/new-cat',
        meta: {
            title: 'Gatinhos - novo gatinho'
        },
        name: 'NewCat',
        component: NewCat,
    }
]