export default {
    methods: {
        showMessage(obj) {
            this.$store.commit('notification/changeNotification', obj);
            setTimeout(() => {
                this.$store.commit('notification/defaultNotification');
            }, 5000);
        }
    }
}