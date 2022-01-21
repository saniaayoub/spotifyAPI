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
        name: 'Notice',
        component: Notice,
        key: 'Notice',
    }
]