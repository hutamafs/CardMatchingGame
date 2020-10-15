<template>
  <div class="home">
        <div class="container">
      <h1 class="text-center mt-3">GAME START</h1>
    </div>
    <div class="container">
      <div class="row mt-3 shadow rounded">
        <Card
        v-for="(card,i) in cards"
        :key="i"
        :card = "card"
        >

        </Card>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from '@/components/Card.vue'

export default {
  name: 'Home',
  data () {
    return {
      user: '',
      users: [],
      cards: []
    }
  },
  components: {
    Card
  },
  sockets: {
    'user-connected' (data) {
      this.users = data
    }
  },
  created () {
    this.user = localStorage.playerone
    this.shuffle()
  },
  methods: {
    shuffle () {
      const numbers = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8]
      // let source = `../images/1_of_spades.png`;
      let ctr = numbers.length
      let temp = null
      let index = null

      while (ctr > 0) {
        index = Math.floor(Math.random() * ctr)
        ctr--
        temp = numbers[ctr]
        numbers[ctr] = numbers[index]
        numbers[index] = temp
      }
      console.log(numbers, 'ni numbers')
      this.cards = numbers
    }
  }
}

/*
function shuffle(arra1) {
    var ctr = arra1.length, temp, index;

// While there are elements in the array
    while (ctr > 0) {
// Pick a random index
        index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
        ctr--;
// And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}
var myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(shuffle(myArray));
*/

</script>
