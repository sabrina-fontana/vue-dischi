var app = new Vue({
el: '#app',
data: {
  arrayDischi: [],
  arrayGeneri: [],
  selectedGenre: 'all'
},
mounted() {
  let that = this;
  axios.get('https://flynn.boolean.careers/exercises/api/array/music')
  .then(function(resp) {
    that.arrayDischi = resp.data.response
    that.arrayDischi.forEach((element) => {
      if (!that.arrayGeneri.includes(element.genre)) {
        that.arrayGeneri.push(element.genre)
      }
    })
    console.log(that.arrayDischi)
  })
}
});
Vue.config.devtools = true;
