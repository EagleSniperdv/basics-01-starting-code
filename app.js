const app = Vue.createApp({
    data() {
        return {
            courseGoal: 'Master Vue by force by fire',
            courseGoalB: 'Teach  vue to students',
            vueLink: 'https://vuejs.org/',
            userName: 'Naboth'
        };
    },

    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5 ) {
                return this.courseGoal;
            } else {
                return this.courseGoalB;
            }
        }
    }
});

app.mount('#user-goal');