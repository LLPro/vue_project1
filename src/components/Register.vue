<template>
    <div id="register">
        <div class="col-md-6 col-sm-6 col-8">
            <form @submit.prevent>
                <div class="form-group col-12" >
                    <label class="form"  for="exampleInputEmail1">Email address</label>
                    <input type="email" v-model="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" >
                    <small id="emailHelp1" v-if="!$v.email.required" class="form-text text-danger">Email is required</small>
                    <small id="emailHelp2" v-if="!$v.email.email" class="form-text text-danger">Email should be like 'email@mail.com'</small>
                </div>
                <div class="form-group col-12">
                    <label class="form" for="exampleInputPassword1">Password</label>
                    <input type="password" v-model="password" name="password" class="form-control" id="exampleInputPassword1">
                    <password class="password_strength" v-model.trim="$v.password.$model" :strength-meter-only="true"/>
                    <small id="passHelp1" v-if="!$v.password.required" class="form-text text-danger">Password is required</small>
                    <div class="error" v-if="!$v.password.minLength">Password must have at least {{ $v.password.$params.minLength.min }} letters.</div>
                </div>
                <button type="submit" class="btn btn-primary">Register</button>
            </form>
        </div>
    </div>
</template>

<script>
    import Password from 'vue-password-strength-meter'
    import { required, minLength, email } from 'vuelidate/lib/validators'

    export default {
        data() {
            return {
                password: null,
                email: null,
            }
        },
        validations: {
            email: {
                required,
                email,
            },
            password:{
                required,
                minLength: minLength(10),
            }
        },
        components: { Password }
    }
</script>

<style scoped>
    form{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .form-group{
        margin: 20px 0;
    }
    #register{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .password_strength{
        max-width: 100%
    }
</style>