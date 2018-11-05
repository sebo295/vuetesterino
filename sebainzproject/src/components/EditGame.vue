<template>
    <div id="edit-game" class="container">
        <div class="row" v-if="game">
            <div class="col-12">
            <h3>Edit Game:</h3> 
            <div class="text-center title"> <h2>{{game.title}}</h2></div>
            </div>
        </div>
        <div class="col-12" v-if="game">
                <form @submit.prevent="editGame">
                <div class="text-center">
                     <label class="col-xl-6 col-md-4 col-sm-12" for="game.id"><h5>ID:</h5></label>
                     <input class="col-xl-6 col-md-4 col-sm-12" type="text" name="id" v-model="game.id">
                    
                    <label class="col-xl-6 col-md-4 col-sm-12" for="title"><h5>Title:</h5></label>
                     <input class="col-xl-6 col-md-4 col-sm-12" type="text" name="title" v-model="game.title">

                    <label class="col-xl-6 col-md-4 col-sm-12" for="description"><h5>Description:</h5></label>
                     <input class="col-xl-6 col-md-4 col-sm-12" type="text" name="description" v-model="game.description">

                    <label class="col-xl-6 col-md-4 col-sm-12" for="genre"><h5>Genre:</h5></label>
                     <input class="col-xl-6 col-md-4 col-sm-12" type="text" name="genre" v-model="game.genre">
                     </div>
                     <div class="text-center">
                         <p v-if="feedback">{{ feedback }}</p>
                         <button class="btn btn-primary col-md-4 col-sm-12">Update Game</button></div>
            </form>
        </div>
    </div>
</template>

<script>
import db from './firebaseInit'
import slugify from 'slugify'
export default {
    name: 'edit-game',
    data() {
        return {
            game: null,
            feedback: null
        }
    },
    methods: {
        editGame(){
            if (this.game.title){
                this.feedback = null
                this.game.slug = slugify(this.game.title, {
                    replacement: '-',
                    remove: /[S*_+~.()'"!\-:@]/g,
                    lower: true
                })
                db.collection('games').doc(this.game.id).update({
                    game_id: this.game.id,
                    title: this.game.title,
                    description: this.game.description,
                    genre: this.game.genre,
                    slug: this.game.slug
                }).then(()=>{
                    this.$router.push({ name: 'home'})
                }).catch(err => {
                    console.log(err)
                })
            }else {
                this.feedback = "You must enter a game title"
            }
        }
    },
    created(){
        let ref = db.collection('games').where('slug', '==', this.$route.params.game_slug)
        ref.get().then(response => {
            response.forEach(doc => {
                console.log(doc.data())
                this.game = doc.data()
                this.game.id = doc.id
            })
        })
    }
}
</script>

<style>
.btn {
    margin-top: 10px;
}

.title {
    margin-top: 10px;
    margin-bottom: 10px;
}

</style>