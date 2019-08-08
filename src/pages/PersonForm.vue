<template>
    <div>
        <h1 class="title">Person Form</h1>
        <div class="field">
            <input  v-validate="'required|min:3'" 
                    v-model="person.firstName" 
                    name="firstName" 
                    type="text" 
                    class="input"
                    :class="className('firstName')"/>          
            <p class="error">{{ errors.first('firstName') }}</p>
        </div>
        <div class="field">
            <input v-validate="'required'" 
                    v-model="person.lastName" 
                    name="lastName" 
                    type="text" 
                    class="input animated bounce" 
                    :class="className('lastName')"
                    />
            <p>{{ errors.first('lastName') }}</p>
        </div>
        <pre>{{ errors }}</pre>
    </div>
</template>

<script>
export default {
    data () {
        return {
            person: {
                firstName: 'Juthathip',
                lastName: 'Sopmor'
            }
        }
    },
     methods: {
            className(field) {
                // return 'input'
                return this.errors.has(field) ? 'input is-danger animated pulse' : 'bounce'
                
            }
        }
}
</script>
<style>
p {
    color: red;
}
</style>
