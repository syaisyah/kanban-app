<template>
  <section>
      <div class="row justify-content-center p-5" style="margin-top: 80px;">
        <div class="w-25 border shadow-lg login pb-5">
          <h1 class="text-center pt-5">Kanban</h1>
          <h4 class="text-center" style="color: rgb(112, 110, 110)"><b>Login</b></h4>
          <form>
            <div class="m-4 mt-2">
              <label for="emailLogin" class="form-label">Email</label>
              <input type="email" class="form-control" placeholder="Email Address" v-model="emailLogin" />
            </div>
            <div class="m-4">
              <label for="passwordLogin" class="form-label">Password</label>
              <input type="password" class="form-control" placeholder="Password" v-model="passwordLogin" />
            </div>
            <div class="m-4">
              <div class="d-flex justify-content-center mt-4">
                <button type="submit" class="btn btn-primary w-100" @click.prevent="login">Login</button>
                <button type="submit" class="btn btn-warning w-100" @click.prevent="showFormRegister">Register</button>
              </div>
            </div>
          </form>
          <div class="m-4 text-center">
            <p>OR Login with Google Account</p>
            <button v-google-signin-button="clientId" class="google-signin-button btn btn-info w-100"><i class="fab fa-google"></i> Continue with google</button>
          </div>
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
      clientId: '498078366327-u8eot5u8odq4u1rutdh4fnvhtur35a7h.apps.googleusercontent.com'
    }
  },
  methods: {
    login() {
      const user = { email: this.emailLogin, password: this.passwordLogin }
      this.$emit('emitLogin', user)
    },
    showFormRegister() {
      this.$emit('emitFormRegister')
    }, 
    OnGoogleAuthSuccess (idToken) {
      this.$emit('emitGoogle', idToken)
    },
    OnGoogleAuthFail (error) {
      console.log(error, 'error')
    }
  }
}
</script>

<style scoped>
.login {
  background-color: white;
}
</style>