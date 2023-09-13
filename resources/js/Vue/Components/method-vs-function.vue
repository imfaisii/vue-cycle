<template>
    <div>
    <ul>
    <li>if a value is being updated in function and a computed also have that variable tu woh computed b call hoga bad main(note: agar computed template main use ho rha tbhi chaly ga else nhe ) </li>
    </ul>
        <h1>Methods</h1>
        <small> first time render main dono khud e call hoty and agr a++ ya b++ direct kr rhy tu all direclty printed functions b chalty ..  and if we are using direct printing of a function then rerender main woh sara chalta h. else on normal click mian sirf wohi wala hoga </small>
        <button v-on:click="a++">Add to A</button>
        <button v-on:click="b++">Add to B</button>
        <button v-on:click="addToBmethod">Add to B function click</button>
        <button v-on:click="addToAmethod">Add to A function click</button>


        <h1> A -> {{ a }}</h1>
        <h1> B -> {{ b }}</h1>
        <h1> B -> {{ test }}</h1>


        <!-- <p>Age + A = {{ addToAmethod() }}</p>
        <p>Age + B = {{ addToBmethod() }}</p> -->
        <!-- <small> {{ testing() }}</small> -->
        <small> calling a function like direct addToBmethod() in vue template can make it recall it  </small>
        <small> if any data is changed  then  all the directly written function in the template are render else the only changed data wala html   </small>



        <h1>Computed Properties</h1>
        <small> for first render both computed runs automatically, us k bad jiski value change hoti h sirf wohi call hota h </small>
        <small> if we have used the computed in template then it is only called else beshak data change computed nhe chlati siry s </small>
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
            test : ''
        };
    },
    mounted(){
        console.log("mounted");
    },
    methods: {
        addToAmethod: function () {
            console.log("addToA method");
            this.a = this.a + 1;
            return this.a + this.age;
        },
        addToBmethod: function () {
            console.log("addToB method");
            // this.b=this.b+1;
            return this.b + this.age;
        },
        testing:function (){
            console.log("this is just a test function")
        }
    },
    watch: {
    a(val) {
        this.test = `new val is ${val}`;
    },
  },
    computed: {
        addToAcomputed: function () {
            console.log("addToA computed");
            this.a = this.a +25;
            return this.a + this.age;
        },
        addToBcomputed: function () {
            console.log("addToB computed");
            return this.b + this.age;
        },
    },
};
</script>
