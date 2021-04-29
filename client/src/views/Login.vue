<template>
  <section>
      <div class="row justify-content-center p-5" style="margin-top: 120px;">
        <div class="w-25 border shadow-lg login">
          <h1 class="text-center pt-5">Kanban</h1>
          <h4 class="text-center" style="color: rgb(112, 110, 110)"><b>Login</b></h4>
          <form>
            <div class="m-4 mt-2">
              <label for="email-login" class="form-label">Email</label>
              <input type="email" class="form-control" placeholder="Email Address" v-model="emailLogin" />
            </div>
            <div class="m-4">
              <label for="password-login" class="form-label">Password</label>
              <input type="password" class="form-control" placeholder="Password" v-model="passwordLogin" />
            </div>
            <div class="m-4">
              <div class="d-flex justify-content-center">
                <button type="submit" class="btn btn-primary w-100" @click.prevent="login">Login</button>
                <button type="submit" class="btn btn-warning w-100">Register</button>
              </div>
            </div>
            <div class="m-5 text-center">
              <p>OR Login with Google Account</p>
              <button type="submit" class="btn btn-primary">Google Login</button>
            </div>
          </form>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  name: "Login",
  data () {
    return {
      emailLogin: '',
      passwordLogin: '',
    }
  },
  methods: {
   login() {
     const user = { email: this.emailLogin, password: this.passwordLogin }
     this.$emit('emitLogin', user)
   }
  }
}
</script>

<style scoped>
.login {
  background-color: white;
}

</style>