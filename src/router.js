import Showblog from './components/Showblog.vue'
import Addblog from './components/Addblog.vue'
import Person from './components/Person.vue'
import Singleblog from './components/Singleblog.vue'


export default[
    {
        path:"/",component:Showblog
    },
    {
        path:"/add",component:Addblog
    },
    {
        path:"/person",component:Person
    },
    {
        path:"/blog/:id",component:Singleblog
    },
]