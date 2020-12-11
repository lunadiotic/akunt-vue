<template>
    <div class="container my-5">
        <div class="row justify-content-center">
            <div class="col-8">
                <router-link :to="{name: 'transaction.create'}" class="btn btn-primary rounded shadow mb-3">Add</router-link>
                <div class="card rounded shadow">
                    <div class="card-header">
                        <h5>Transaction List</h5>
                    </div>
                    <div class="card-body">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Amount</th>
                                    <th>Type</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(transaction, index) in transactions.data" :key="index">
                                    <td>{{ transaction.title }}</td>
                                    <td>{{ transaction.amount }}</td>
                                    <td>{{ transaction.type }}</td>
                                    <td>
                                        <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                                            <router-link 
                                                :to="{name: 'transaction.edit', params:{id: transaction.id}}" 
                                                class="btn btn-sm btn-outline-primary">
                                                Edit
                                            </router-link>
                                            <button 
                                                type="button" 
                                                @click.prevent="destroy(transaction.id, index)" 
                                                class="btn btn-sm btn-outline-danger"
                                            >Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import {onMounted, ref} from 'vue'

export default {
    setup() {
        // reactive state
        let transactions = ref([])

        onMounted(() => {
            // get Data From API Endpoint
            axios.get('http://127.0.0.1:8000/api/transaction').then((result) => {
                transactions.value = result.data
            }).catch((err) => {
                console.log(err.response.data)
            });
        })

        function destroy(id, index) {
            axios.delete(`http://127.0.0.1:8000/api/transaction/${id}`)
            .then(() => {
                transactions.value.data.splice(index, 1);
            }).catch((err) => {
                console.log(err.response)
            });
        }

        return {
            transactions,
            destroy
        }
    }    
}
</script>

<style>
    body {
        background: lightgray;
    }
</style>