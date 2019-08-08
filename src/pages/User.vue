<template>
    <div>
        <h1 class="title">User</h1>
        <button @click="getUsers()" class="button">Get User</button>
        <!-- <pre>{{ users }}</pre> -->
        <p v-for="each in users" :key="each.id">{{ each.name }}</p>
        <br/> 
        <table class="table">
            <tr v-for="each in users" :key="each.id">
                <td>
                    <RouterLink :to="'/user/' + each.id">{{ each.name }}</RouterLink>
                </td>
                <td>{{ each.username }}</td>
                <td>{{ each.email }}</td>
                <td>{{ each.website }}</td>
            </tr>
        </table>

    </div>
</template>

<script>
import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/users'

export default {
    data () {
        return {
            users: []
        }
    },
    methods: {
        getUsers () {
            axios.get(url).then(res => {
                // console.log(res.data)
                this.users = res.data
            })
        }
    }
}
</script>

<style scoped>
table {
  color: #42b983;
  border-width: 2px;
}
tr {
   color:hotpink;
}
</style>


