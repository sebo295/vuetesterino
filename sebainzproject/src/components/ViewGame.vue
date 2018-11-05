<template>
    <div id="view-game">
        <h3>View Game</h3>
    </div>
</template>

<script>
import db from './firebaseInit.js'
export default {
    name: 'view-game',
    data() {
        return {
            game_id: null,
            title: null,
            description: null,
            genre: null
        }
    },
    beforeRouteEnter(to, from, next) {
        db.collection('games').where('game_id', '==', to.params.game_id).get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc =>{
                next(vm => {
                    vm.game_id = doc.data().game_id
                    vm.title = doc.data().title
                    vm.description = doc.data().description
                    vm.genre = doc.data().genre
                })
            })
        })
    },


}
</script>

<style>

</style>