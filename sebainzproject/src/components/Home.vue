<template>

<div class="container text-center">
    <h2>Your Games List</h2>
  <div class="row d-flex justify-content-around">
    <div v-for="(game,index) in games" :key="index" class="card col-xl-3" style="width: 18rem; margin: 5px">

    <div class="card text-center">
  <div class="card-header">
    {{ game.genre }}
  </div>
  <div class="card-body">
    <h5 class="card-title">{{ game.title }}</h5>
    <p class="card-text">{{ game.description }}</p>
                    <router-link :to="{ name: 'view-game', params: { game_id: game.game_id } }">
                    <button class="btn btn-primary">View Details</button>
                </router-link>
  </div>
  <div class="card-footer text-muted">
    <button class="btn btn-danger" @click="deleteGame(game.id)">Delete</button>
    <router-link :to="{name: 'edit-game', params: {game_slug: game.slug}}">
        <button class="btn btn-primary">Edit</button>
    </router-link>
  </div>
</div>
    </div>
  </div>
</div>
  <!-- <div id="home">
      <h3>Home</h3>
      <div v-for="(game,index) in games" :key="index">
        <div class="row-4">

          <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="..." alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">{{ game.title}}}</h5>
              <p class="card-text">{{game.title}}</p>
              <p class="card-text">{{game.title}}</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>

        </div>

      </div>



      <router-link :to="{ name: 'new-game' }">
        <button class="btn btn-primary">test</button>
      </router-link>

    </div> -->
</template>

<script>
  import db from './firebaseInit'
  export default {
    name: 'home',
    data() {
      return {
        games: []
      }
    },
    methods: {
        deleteGame(id){
            //delete doc from firestore
            db.collection('games').doc(id).delete()
            .then(() => {
                this.games = this.games.filter(game => {
                    return game.id != id
                })
            })
        }
    },
    created() {
      db.collection('games').get().then(response => {
        response.forEach(doc => {
          console.log(doc.data())
          const data = {
            'id': doc.id,
            'game_id': doc.data().game_id,
            'title': doc.data().title,
            'description': doc.data().description,
            'genre': doc.data().genre,
            'slug': doc.data().slug
          }
          this.games.push(data)
        })
      })
      console.log(this.games)
    },
  }

</script>

<style>

</style>
