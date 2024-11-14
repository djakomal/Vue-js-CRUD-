<template>
    <main>
        <!--Table -->
        <div class="body">
        <h1>Views</h1>

        <button class="View">
            <RouterLink to="/add">Create New Mail</RouterLink>
        </button>

        <table class="table table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Email</th>
                    <th>Reciver</th>
                    <th>Objet</th>
                    <th>Description</th>
                    <th >Action</th>
                </tr>
            </thead>
            <tbody>
                <tr class="table table-striped" v-for="mails in mail" :key="mail.id">
                    <td>{{ mails.id }}</td>
                    <td>{{ mails.Email }}</td>
                    <td>{{ mails.reciver }}</td>
                    <td>{{ mails.objet }}</td>
                    <td>{{ mails.description }}</td>
                    <td>

                        <a class="btn btn-primary" :href="`/edit/${mails.id}`">
                            Edite
                        </a>
                        <button type="button" class="btn btn-danger" @click="$event =>delete(mails.id)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    </main>
</template>
<script>
 
 export default{
    name:'ViewMail',
    components:{

    },
    data(){
        return{
             mail:[]
        }
    },
    methods:{
        getMails(){
            fetch('http://localhost:8081/mail/CRUD')
            .then(res => res.json())
            .then(data =>{
                this.mail =data
                console.log(data)
            })
        },
        delete(id){
            fetch(`http://localhost:8081/mail/CRUD/delete/${id}`,
                {
                    method: 'DELETE '
                }
            ).then(data =>{
                console.log(data)
                this.getMails()
            })
            
        },

    },
    beforeMount(){
        this.getMails()
    }
 }
</script>

<style scoped>
.body {
    margin-left: 100px;
    width: 800px;
    padding: 0px;
    padding-left: 10px;

}

.View {
    width: 200px;
    margin-left: 500px;
    display: flex;
}
</style>