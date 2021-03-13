<template>
  <main class="container">
    <div class="mx-auto col-md-4">
      <form @submit.prevent="">
        <h1 class="h3 mb-3 fw-normal">Please sign up</h1>
        <label for="" class="visually-hidden">Name</label>
        <input type="text" class="form-control" placeholder="Full Name" required autofocus>
        <label for="inputEmail" class="visually-hidden">Email address</label>
        <input
          type="email"
          id="inputEmail"
          class="form-control"
          placeholder="Email address"
          required
        />
        <label for="inputPassword" class="visually-hidden">Password</label>
        <input
          type="password"
          id="inputPassword"
          class="form-control"
          placeholder="Password"
          required
        />
        <label for="inputPassword" class="visually-hidden">Confirm Password</label>
        <input
          type="password"
          id="inputPassword"
          class="form-control"
          placeholder="Password Confirmation"
          required
        />
        <button class="w-100 btn btn-lg btn-primary" type="submit">
          Sign up
        </button>
      </form>
    </div>
  </main>
  <!-- /.container -->
</template>

<script>
</script>