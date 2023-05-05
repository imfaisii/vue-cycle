<template>
    <div>
    <ul>
    <li>if a value is being updated in function and a computed also have that variable tu woh computed b call hoga bad main(note: agar computed template main use ho rha tbhi chaly ga else nhe ) </li>
    </ul>
        <h1>Methods</h1>
        <small> first time render main dono khud e call hoty and agr a++ ya b++ direct kr rhy tu pora render hota else wohi part jo change ho raha..  and if we are using direct printing of a function then rerender main woh sara chalta h. else on normal click mian sirf wohi wala hoga </small>
        <button v-on:click="a++">Add to A</button>
        <button v-on:click="b++">Add to B</button>
        <button v-on:click="addToBmethod">Add to B function click</button>

        <h1> A -> {{ a }}</h1>
        <h1> B -> {{ b }}</h1>

        <p>Age + A = {{ addToAmethod() }}</p>
        <p>Age + B = {{ addToBmethod() }}</p>


        <h1>Computed Properties</h1>
        <small> for first render both computed runs automatically, us k bad jiski value change hoti h sirf wohi call hota h </small>
                <strong>The computed only runs if the data property is changed(i.e. new value!= old value)</strong>
                <p>Age + A = {{ addToAcomputed }}</p>
                <p>Age + B = {{ addToBcomputed }}</p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            a: 0,
            b: 0,
            age: 20,
        };
    },
    methods: {
        addToAmethod: function () {
            console.log("addToA method");
            return this.a + this.age;
        },
        addToBmethod: function () {
            console.log("addToB method");
            this.b=this.b+1;
            return this.b + this.age;
        },
    },
    computed: {
        addToAcomputed: function () {
            console.log("addToA computed");
            return this.a + this.age;
        },
        addToBcomputed: function () {
            console.log("addToB computed");
            return this.b + this.age;
        },
    },
};
</script>
