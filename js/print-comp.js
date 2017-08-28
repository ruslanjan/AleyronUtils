$(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();

});

Vue.component('input-product-type-print', {
    props: ['type'],
    template: '<tr><td><span>{{type.name}}</span></td><td><span>{{type.number}}</span></td></tr>',
    methods: {
        checkNumber: function (type) {
            a = type.number;
            s = '';
            for (var i = 0; i < a.length; ++i) {
                if (a[i] < '0' || a[i] > '9') {
                    //break;
                } else {
                    if (s === '' && a[i] === '0') {
                        continue;
                    }
                    s = s + (a[i]);
                }
            }
            if (s === '')
                s = '0';
            type.number = s;
        }
    },
});

Vue.component('table-product-type-print', {
    props: ['arr'],
    template: '<table style=""><thead><tr><th><span>Вид</span></th><th>Тираж</th></tr></thead><tbody><input-product-type-print v-for="item in arr" v-bind:type="item" v-bind:key="item.id"></input-product-type-print></tbody></table>'
});

Vue.component('result-row-print', {
    props: ['type'],
    template: '<tr><td><span>{{type.tname}}</span></td><td><span>{{type.number}}</span></td><td><span>{{type.over}}</span></td></tr>'
});
Vue.component('table-plate-result-print', {
    props: ['plate'],
    template: '<table class="highlight centered"><thead><tr><th><span>Вид</span></th><th><span>Количество на пластине</span></th><th><span>Излишки</span></th></tr></thead><tbody><result-row-print v-for="type in plate.types" v-bind:type="type" v-bind:key="type.tname"></result-row-print></tbody></table>'
});

Vue.component('plate-result-view-print', {
    props: ['plate'],
    template: '<li><span>Печатная пластина #{{plate.id}}</span><br><span>листов = <span>{{plate.pageSum}}</span></span><br> <span>излишки = <span>{{plate.overSum}}</span></span><br><table-plate-result-print v-bind:plate="plate"> </table-plate-result-print> </li>',
});