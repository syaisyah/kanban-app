<template>
  <section>
      <div class="row justify-content-center p-5" style="margin-top: 120px;">
        <div class="w-25 border shadow-lg register">
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
              <div class="d-flex justify-content-center">
                <button type="submit" class="btn btn-warning w-100" @click.prevent="register">Register</button>
                <button type="submit" class="btn btn-primary w-100" @click.prevent="showFormLogin">Login</button>
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
  name: "Register",
  data () {
    return {
      fullName: '',
      emailRegister: '',
      passwordRegister: ''
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
    }
  }
}
</script>

<style scoped>
.register {
  background-color: white;
}


</style>