<template>
    <div id="new-game" class="container">
        <div class="row">
        <h3>New Game</h3>
        <div class="col-xl-12 col-xs-6">
            <form @submit.prevent="addGame">
                <div>
                     <label for="game.id"><h5>ID:</h5></label>
                     <input type="text" name="id" v-model="id">
                    
                    <label for="title"><h5>Title:</h5></label>
                     <input type="text" name="title" v-model="title">

                    <label for="description"><h5>Description:</h5></label>
                     <input type="text" name="description" v-model="description">

                    <label for="genre"><h5>Genre:</h5></label>
                     <input type="text" name="genre" v-model="genre">
                     </div>
                     <div class="text-center">
                         <p v-if="feedback">{{ feedback }}</p>
                         <button class="btn btn-primary">Add Game</button></div>
            </form>
        </div>
        </div>
    </div>
</template>

<script>
import db from './firebaseInit'
import slugify from 'slugify'
export default {
    name: 'new-game',
    data() {
        return {
            id: null,
            title: null,
            description: null,
            genre: null,
            feedback: null,
            slug: null
        }
    },
    methods: {
        addGame(){
            if (this.title){
                this.feedback = null
                this.slug = slugify(this.title, {
                    replacement: '-',
                    remove: /[S*_+~.()'"!\-:@]/g,
                    lower: true
                })
                db.collection('games').add({
                    game_id: this.id,
                    title: this.title,
                    description: this.description,
                    genre: this.genre,
                    slug: this.slug
                }).then(()=>{
                    this.$router.push({ name: 'home'})
                }).catch(err => {
                    console.log(err)
                })
            }else {
                this.feedback = "You must enter a game title"
            }
        }
    }
}
</script>

<style>

</style>