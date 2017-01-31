new Vue({
    el: '#exercise',
    data: {
        name: 'Sachin',
        age : 25,
        imageLink : 'https://vuejs.org/images/logo.png'
    },

    computed: {
        aTripple: function () {
            return this.age * 3
        },
        randomNumber: function () {
            min = 0;
            max = 1;
            return Math.random() * (max - min) + min
        }
    }
});
