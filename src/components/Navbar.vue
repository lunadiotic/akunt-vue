<template>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Cash</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul class="navbar-nav me-auto mb-2 mb-md-0">
                <li class="nav-item">
                    <router-link :to="{name: 'home'}" class="nav-link active">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{name: 'register'}" class="nav-link">Register</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{name: 'login'}" class="nav-link">Login</router-link>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">Logout</a>
                </li>
                <li class="nav-item">
                    <router-link :to="{name: 'transaction.index'}" class="nav-link">Transaction</router-link>
                </li>
            </ul>
            </div>
        </div>
    </nav>
</template>