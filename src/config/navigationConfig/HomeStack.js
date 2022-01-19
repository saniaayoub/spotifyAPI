import {
    Notice, Home
} from '../../containers'

export const HomeStack = [
    {
        name: 'Home',
        component: Home,
        key: 'Home',
    },
    {
        name: 'Notices',
        component: Notice,
        key: 'Notice',
    }
]