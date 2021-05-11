<template>
  <section>
      <div class="row justify-content-center p-5" style="margin-top: 70px;">
        <div class="w-25 border shadow-lg register pb-5">
          <h1 class="text-center pt-5">Kanban</h1>
          <h4 class="text-center" style="color: rgb(112, 110, 110)"><b>Register</b></h4>
          <form>
            <div class="m-4 mt-2">
              <label for="fullName" class="form-label">Full Name</label>
              <input type="text" class="form-control" v-model="fullName" placeholder="Username"/>
            </div>
            <div class="m-4">
              <label for="emailRegister" class="form-label">Email</label>
              <input type="email" class="form-control" v-model="emailRegister" placeholder="Email Address"/>
            </div>
            <div class="m-4">
              <label for="passwordRegister" class="form-label">Password</label>
              <input type="password" class="form-control" v-model="passwordRegister" placeholder="Password"/>
            </div>
            <div class="m-4">
              <div class="d-flex justify-content-center mt-4">
                <button type="submit" class="btn btn-warning w-100" @click.prevent="register">Register</button>
                <button type="submit" class="btn btn-primary w-100" @click.prevent="showFormLogin">Login</button>
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
  name: "Register",
  data () {
    return {
      fullName: '',
      emailRegister: '',
      passwordRegister: '',
      clientId: '498078366327-u8eot5u8odq4u1rutdh4fnvhtur35a7h.apps.googleusercontent.com'
    }
  },
  methods: {
    register() {
      const user = {
        full_name: this.fullName,
        email: this.emailRegister,
        password: this.passwordRegister
      }
      this.$emit('emitRegister', user)
    },
    showFormLogin() {
      this.$emit('emitFormLogin')
    },
     OnGoogleAuthSuccess (idToken) {
      this.$emit('emitGoogleFromRegister', idToken)
    },
    OnGoogleAuthFail (error) {
      console.log(error, 'error')
    }
  }
}
</script>

<style scoped>
.register {
  background-color: white;
}
</style>