<template>
    <div class="row">
        <div class="col-lg-12">
            <h1>Vue life cycle hooks</h1>
            <small>
            Whenever a data is changed or the any part of the dom is updated, the whole dom is rerendered
            </small>
            <p>{{ name }}</p>
            <p>{{ count }}</p>
            <button
                type="button"
                class="btn btn-primary"
                v-on:click="calculateResult"
            >
                Update
            </button>
        </div>
    </div>
</template>
<script>
export default {
    beforeCreate() {
        console.log(
            "%cbefore created hook, here the component is only initialized",
            "color:red"
        );
        console.log(this.name); // here we can't access any data property as they are not yet initialized
    },
    created() {
        console.log(
            "%cCreated hook, here data members are initialized and we can access and change as well.this is the best place where we can make api calls and set our data.we can set api calls, library initialization here",
            "color:orange"
        );
        this.name = "Moeen";
        console.log(this.name); // this will print moeen as it is changed from hamza to moeen
    },
    beforeMount() {
        console.log(
            "%cBefore Mount hook, this hook is called before render function is called and after the render function is compiled. we can set api calls, library initialization here ",
            "color:red"
        );
        this.name = "Moeen";
        console.log(this.name); // this will print moeen as it is changed from hamza to moeen
    },
    mounted() {
        console.log(
            "%cmount hook, here the component is mounted on the dom and the data that is used above is shown on the front end ",
            "color:green"
        );
        this.name = "Moeen";
    },
    beforeUpdate() {
        console.log(
            "before update hook is triggered whenever a data is changed but dom is not rerenderd"
        );
    },
    updated() {
        console.log(
            "the updated hook is triggered whenever the value is updated and dom is rendered "
        );
    },
    beforeUnmount() {
        console.log(
            "this before unmount hook is triggered whenever the dom is being unmounted from the dom "
        );
    },
    unmounted() {
        console.log(
            "this unmounted hook is triggered whenever the dom is removed or unmounted from the dom"
        );
    },

    data() {
        return {
            name: "hamza",
            testVar: "",
            count: 0,
        };
    },
    methods: {
        calculateResult() {
            this.count = this.count + 1;
        },
    },
    watch() {},
    computed() {},
};
</script>
