<template>


    <form @submit.prevent="Addmail"  class="body">
        <h1>ADD</h1><br/>
        <strong class="View">
            <button>
                <RouterLink to="/">Views</RouterLink>
            </button>
        </strong>
  
        <div class="form-group">
            <label for="email">Email:</label>
            <input 
                name="Email"
                id="email" 
                type="email" 
                class="form-control" v-model="mail.Email">

        </div>



        <div class="form-group">
            <label for="reciver">Reciver Email:</label>
            <input 
                name="reciver"
                id="email" 
                type="email" 
                class="form-control" v-model="mail.reciver">
        
        </div>



        <div class="form-group">
            <label for="objet">Objet:</label>
            <input 
                name="objet"
                id="objet" 
                type="text" 
                class="form-control" v-model="mail.objet">

        </div>
  
        <div class="form-group">
            <label for="">description</label>
            <textarea 
                name="description"
                id="description" 
                type="text" 
                class="form-control" v-model="mail.description">
            </textarea>

        </div>
  
        <button class="btn btn-primary" type="submit" valut="Submit">Submit</button>
    </form>

</template>


<script>
 
 export default{
    name:'AddView',
    components:{

    },
    data(){
        return{
             mail:{
                Email:'',
                reciver:'',
                objet:'',
                description:''
             }
        }
    },
    methods:{
        Addmail(){
            fetch('http://localhost:8081/mail/CRUD/add',
                {
                    method:'POST',
                    headers:{
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify(this.mail)
                
                })
                .then(data =>{
                    console.log(data)
                    this.$router.push("/")
                })
            
            }
        },
       

    }
</script>


<style scoped>
    .body{
    margin-left:100px;
    width: 800px;
    padding: 0px;
    padding-left: 80px;
    
    }
    .View{
        width: 200px;
        margin-left: 600px;
        display: flex;
    }

</style>