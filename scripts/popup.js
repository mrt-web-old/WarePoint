popup = Vue.component('popup', {
    // propsx: ['type'],
    data: function () {
        return {
            type:'',
            display: 'none',
            orderId: '',
            itemIndex: '',
            item: {},
            customer: {},
        }
    },
    watch:{
        customer: function(){
        }
    },
    methods: {
        close: function () {
            this.display = 'none';
            this.item = {};
            this.customer = {};
        },
        show: function (content, a = null, b = {}, c = null) { // ('item', orderId, itemObj)|| ('customer', orderObj)
            // b contains the item in case of edit
            this.display = 'flex';
            this.type = content;
            // l(content, a, b)
            if (content == 'item') {
                this.orderId = a;
                this.item = {...b};
                this.itemIndex = c;
            }
            else {
                this.customer = {...a};
            }
        },
        save: function(){
            this.$emit('save', this.type, this.type == 'item' ? this.item : this.customer, this.orderId, this.itemIndex)
        }
        
    },
    template: `
    <div class="popup" v-if="type" :style="{display: display}" v-on:click="if(event.srcElement.className == 'popup')close();">
        <div class='container' v-if="type=='item'">
            <div class="head">
                <p>New Item</p>
                <p @click="close();">x</p>
            </div>
            <div class="content">
                <div>
                    <label for="">item</label>
                    <input type="text" v-model="item.title">
                    <span for="">+</span>
                </div>
                <div>
                    <label>count</label><input type="tel" v-model="item.count">
                    <label>price</label><input type="tel"v-model="item.price">
                </div>
                <div>
                    <label>note</label><input type="text" v-model="item.note">
                </div>
                <div>
                    <button v-on:click="close">cancel</button>
                    <button @click="save">Save</button>
                </div>
            </div>
        </div>
        <div class='container' v-if="type=='customer'">
            <div class="head">
                <p>New customer</p>
                <p @click="close();">x</p>
            </div>
            <div class="content">
                <div>
                    <label for="">name</label>
                    <input type="text" v-model="customer.name">
                    <span for="">+</span>
                </div>
                <div>
                    <label>contact</label><input type="tel" v-model="customer.contact">
                    <label>paid</label><input type="tel" v-model="customer.paid">
                </div>
                <div>
                    <label>note</label><input type="text" v-model="customer.note">
                </div>
                <div>
                    <button v-on:click="close">cancel</button>
                    <button @click="save">Save</button>
                </div>
            </div>
        </div>
    </div>
    `

});

/*
    -   add item to order
        -   title
        -   count
        -   price
        -   note
        -   add new item to items

    -   add customer:
        -   name
        -   contact
        -   note
        -   paid

*/