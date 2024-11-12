
<template>
 <TheWelcome >
    <form>
            <!-- Champ Email -->
             <h1>CONNEXION</h1>
            <div class="mb-3">
                <label for="email" class="form-label">Adresse e-mail</label>
                <input type="email" class="form-control" id="email" placeholder="Entrez votre e-mail" required>
            </div>
            <!-- Champ Mot de Passe -->
            <div class="mb-3">
                <label for="password" class="form-label">Mot de passe</label>
                <input type="password" class="form-control" id="password" placeholder="Entrez votre mot de passe" required>
            </div>
            <!-- Checkbox pour se souvenir de l'utilisateur -->
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="remember">
                <label class="form-check-label" for="remember">Se souvenir de moi</label>
            </div>
            <!-- Bouton de Connexion -->
            <button type="submit" class="btn btn-primary w-100"><RouterLink to='/add'>Connexion</RouterLink></button>
        </form>
 </TheWelcome>
</template>
<script>
    export default{
    data(){
        return{
            password:"",
            email:"",
        };
    },
    connexion(email,password){
        password=this.password,
        email=this.email


    }
}
</script>
