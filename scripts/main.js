var l = console.log;
/*
// the list price could be derived from: the [supplier/category | item]
        // sockets: futina|sas|venus|fiona|doctor|sanshe|avena
        //          socket, plug, fill, support ...
        // wire:    sewedy|doctor|dream|italian|italiya|memar
        //          1, 1.5, 2, 3 ...
        // panel:   kono|truelight|mora|fiona|king|sirag|elios|vector|altaqa|celia
        //          3 in|out[white|warm], 6, 9, 12, 18, 20, 22, 24, 28, 30, 32, 36, 42, 18+6, 24+6
        // lamp:    kono|truelight|mora|fiona|king|sirag|elios|vector|altaqa|celia|toshiba|karnak|tornado|elsewedy
        //          tube 60|120
        //  لمبة - لقم - سلك - بانل - كشاف اوت دور

        // lamp: [tube-60|tube-120|bulb|spot|candle] [led|flourecent|tungesten] [white|warm|red|black|green|blue]
        // panel: [in|out] [3 , 6, 9, 12, 18, 20, 22, 24, 28, 30, 32, 18+6, 24+6] [white|warm|white+red|white+rose|white+blue|warm+red|warm+rose|warm+blue]
        // spot: [in|out] [3, 4, 5, 6, 7, 15, 20, 30, 35, 38, 42, 48] [warm, white]

        // category [sockets, wires, magic, hose, panel-led]
        // subCat   [socket, 1.5mm, single, 16mm, ]
        // barnd    [fiona, elsewedy, btcino, lux]


        done: [{ id: '11', title: 'item a', checked: true, count: 25 }, { id: 'other id', title: 'item a', checked: true, count: 25 }],
        
        filters: [
            { wire: { unit: ['meter', '100m roll', '200m roll', '300m roll', '500m roll', '100y roll', '200y roll', '300y roll', '500y roll'], brand: ['swedy', 'doctor', 'italian', 'dream', 'm3mar', 'turkish', 'chinese'], type: ['speakers', 'termo', 'tv', 'tf'], thickness: [1, 2, 3, 4, 6, 8, 10, 16, 25, 35, 50, 75, 95, 120, 135, 155, 175, 195], strands: ['sh3r', 'msm6', 1, 2, 4, 6, 8, 10, 12, 20], additional: [10, 16, 25, 35, 50, 75, 95, 120, 135, 155, 175, 195] } },

            { lamp: { unit: ['single', 'carton', '5 offer'], watt: [1, 3, 4, 5, 7, 9, 10, 11, 12, 15, 18, 20, 22, 25, 30, 35, 40, 45, 50, 55, 150, 250, 400, 500, 1000], brand: ['kono', 'truelight', 'mora', 'fiona', 'king', 'sirag', 'elios', 'vector', 'altaqa', 'celia', 'toshiba', 'karnak', 'tornado', 'elsewedy', 'lara', 'tungsram'], type: ['led', 'flourecent', 'tungesten'], shape: ['tube-60', 'tube-120', 'bulb', 'spot', 'candle'], color: ['white', 'warm', 'white+warm', 'red', 'black', 'green', 'blue'] } },
            { spot: { unit: ['single', 'carton'], brand: ['...'], type: ['led', 'flourecent', 'tungesten'], color: ['white', 'warm', 'white+warm'] } },
            { lighting_panel: { unit: ['single', 'carton'], brand: [], installation: ['in', 'out', 'outdoor'], color: [] } },

            { switches: { unit: [], brand: [], type: ['switch', 'plug', 'plank', 'support', 'button', 'lamp-switch', '20A', '45A'], color: [] } },

            { breakers: { unit: [], brand: [], automatic: [], phases: [], size: [] } },
            { breaker_panel: { unit: [], brand: [], keys: [], meter: [] } },

            { multi_plug: { unit: [], brand: [], length: [2, 3, 5], count: [] } },
        ],
        items: [
            {
                category: 0, subCat: 0, brand: 0,
                id: '123', title: 'item',
                supplier: 'sup',
                variants: [
                    {
                        variant: 'white',
                        price: { lp: 5, use_lp: true, prices: [9, 7, 8] },
                        stock: [{ store: 'st1', cnt: 5 }, { store: 'st2', cnt: 14 }]
                    },
                    {
                        variant: 'warm',
                        price: { lp: 5, use_lp: true, prices: [9, 7, 8] },
                        stock: [{ store: 'st1', cnt: 5 }, { store: 'st2', cnt: 14 }]
                    }
                ],
            }
        ],

{
                id: '1', name: 'customer one', contact: '01118632789', finished: false, paid: 55,
                prepaired: true, delivered: false,
                note: 'customers one note is here',
                items: [
                    { title: 'مفتاح فوتينا', done: false, price: 75, count: 20, prepaired: true, delivered: true },
                    { title: 'سبوت بلاستيك يورلايت متحرك', done: false, price: 75, count: 20, prepaired: true },
                    { title: 'قاطع 2*63امبير مارلين', done: false, price: 75, count: 20 },
                    { title: 'صنف من النوع ذي الوصف الطويل الذي لا يقتصر علي سطر واحد لاختبار جاهزية العمل علي هذا النوع من', done: false, price: 75, count: 20 },
                    { title: 'some item title that goes here along some item title that goes here along', done: false, price: 75, count: 20 },
                    { title: 'second item', done: false, price: 75, count: 20 },
                    { title: 'second item', done: false, price: 75, count: 20 },
                    { title: 'second item', done: false, price: 75, count: 20 },
                    { title: 'second item', done: false, price: 75, count: 20 },
                    { title: 'second item', done: false, price: 75, count: 20 },
                    { title: 'second item', done: false, price: 75, count: 20 },
                    { title: 'second item', done: false, price: 75, count: 20 },
                ]
            },
            {
                id: '2', name: 'customer two', contact: '01097207563', finished: false, paid: 55,
                note: 'customers two note is here',
                items: [{ title: 'مفتاح فوتينا بيج', done: false, price: 75, count: 20, prepaired: true, delivered: true },
                { title: 'سبوت بلاستيك يورلايت متحرك بيج', done: false, price: 75, count: 20, prepaired: true },
                { title: 'قاطع 2*63امبير مارلين 4.5ك', done: false, price: 75, count: 20 }, { title: 'some item', done: false, price: 75, count: 20 }]
            },
            {
                id: '3', name: 'customer three', contact: '01005015453', finished: false, paid: 55,
                note: 'customers three note is here',
                items: [{ title: 'مفتاح فوتينا بيج', done: false, price: 75, count: 20, prepaired: true, delivered: true },
                { title: 'سبوت بلاستيك يورلايت متحرك بيج', done: false, price: 75, count: 20, prepaired: true },
                { title: 'قاطع 2*63امبير مارلين 4.5ك', done: false, price: 75, count: 20 }, { title: 'some item', done: false, price: 75, count: 20 }]
            },
            {
                id: '4', name: 'customer name', contact: 'contact here', finished: false, paid: 55,
                items: [{ title: 'مفتاح فوتينا بيج', done: false, price: 75, count: 20, prepaired: true, delivered: true },
                { title: 'سبوت بلاستيك يورلايت متحرك بيج', done: false, price: 75, count: 20, prepaired: true },
                { title: 'قاطع 2*63امبير مارلين 4.5ك', done: false, price: 75, count: 20 }, { title: 'some item', done: false, price: 75, count: 20 }]
            },
            {
                id: '5', name: 'customer name', contact: 'contact here', finished: false, paid: 55,
                items: [{ title: 'مفتاح فوتينا بيج', done: false, price: 75, count: 20, prepaired: true, delivered: true },
                { title: 'سبوت بلاستيك يورلايت متحرك بيج', done: false, price: 75, count: 20, prepaired: true },
                { title: 'قاطع 2*63امبير مارلين 4.5ك', done: false, price: 75, count: 20 }, { title: 'some item', done: false, price: 75, count: 20 }]
            },
            {
                id: '6', name: 'customer name', contact: 'contact here', finished: false, paid: 55,
                items: [{ title: 'مفتاح فوتينا بيج', done: false, price: 75, count: 20, prepaired: true, delivered: true },
                { title: 'سبوت بلاستيك يورلايت متحرك بيج', done: false, price: 75, count: 20, prepaired: true },
                { title: 'قاطع 2*63امبير مارلين 4.5ك', done: false, price: 75, count: 20 }, { title: 'some item', done: false, price: 75, count: 20 }]
            },
*/
function ie(obj, fallback = '!@#-none*/') {
    res = (obj === null || obj === undefined || obj === NaN) ? true : false;
    return fallback == '!@#-none*/' ? res : res ? fallback : obj;
}
var vue = new Vue({
    el: "#app",
    data: {
        popup_box: '',
        orders: [
            {
                id: '7', name: 'customer name', contact: 'contact here', finished: false, paid: 55,
                items: [{ title: 'مفتاح فوتينا بيج', done: false, price: 75, count: 20, prepaired: true, delivered: true },
                { title: 'سبوت بلاستيك يورلايت متحرك بيج', done: false, price: 75, count: 20, prepaired: true },
                { title: 'قاطع 2*63امبير مارلين 4.5ك', done: false, price: 75, count: 20 }, { title: 'some item', done: false, price: 75, count: 20 }]
            },
            {
                id: '8', name: 'customer name', contact: 'contact here', finished: false, paid: 55,
                items: [{ title: 'مفتاح فوتينا بيج', done: false, price: 75, count: 20, prepaired: true, delivered: true },
                { title: 'سبوت بلاستيك يورلايت متحرك بيج', done: false, price: 75, count: 20, prepaired: true },
                { title: 'قاطع 2*63امبير مارلين 4.5ك', done: false, price: 75, count: 20 }, { title: 'some item', done: false, price: 75, count: 20 }]
            },
            {
                id: '9', name: 'customer name', contact: 'contact here', finished: false, paid: 55,
                items: [{ title: 'مفتاح فوتينا بيج', done: false, price: 75, count: 20, prepaired: true, delivered: true },
                { title: 'سبوت بلاستيك يورلايت متحرك بيج', done: false, price: 75, count: 20, prepaired: true },
                { title: 'قاطع 2*63امبير مارلين 4.5ك', done: false, price: 75, count: 20 }, { title: 'some item', done: false, price: 75, count: 20 }]
            },
            {
                id: '10', name: 'customer name', contact: 'contact here', finished: false, paid: 55,
                items: [{ title: 'some item', done: false, price: 75, count: 20 }]
            },
        ],

        vis_items: { 0: true },
        updating_orders: { 8: true, 10: true },
    },
    computed: {
        // vis_items: function(){
        //     return {}
        // },

        items_height: function () {
            // console.log(this.vis_items[id] ? 't' : 'fofo', this.vis_items[id], id);

            // let r = Object.keys(this.vis_items).reduce((c, e) => { c[e] = this.vis_items[e] ? "height: auto; visibility: visible;" : "height: 0; visibility: collapse;"; return c }, {});
            // console.log('recalc', r)

            return id => this.vis_items[id] ? "max-height: " + (this.orders.find(e => e.id == id).items.length * 6) + "em; xvisibility: visible;" : "max-height: 0; xvisibility: collapse;"
            // return this.vis_items[id] ? "height: auto; visibility: visible;" : "height: 0; visibility: collapse;";
        },
    },
    methods: {
        show(id, state = null) {
            this.$set(this.vis_items, id, !ie(state) ? state : !this.vis_items[id]);
        },
        tick_item(orderId, i) {
            // still to call the db
            let orderIndex = this.orders.findIndex(e => e.id === orderId)
            let order = this.orders[orderIndex]
            let item = order.items[i]
            if (item.prepaired)
                if (item.delivered)
                    item.prepaired = item.delivered = false;
                else
                    item.delivered = true;
            else
                item.prepaired = true;
            [order.prepaired, order.delivered] =
                order.items.reduce((c, e) =>
                    [!c[0] ? false : e.prepaired, !c[1] ? false : e.delivered],
                    [true, true]
                )

            this.$set(this.orders, orderIndex, order)
            navigator.vibrate([30, 15, 75])
        },
        delete_item(orderId, i) {
            // TODO update the database
            this.backup(orderId)
            let orderIndex = this.orders.findIndex(e => e.id === orderId)
            let order = this.orders[orderIndex]
            this.orders[orderIndex].items.splice(i, 1)
        },
        hasClass: function (event, className) { return event == null ? true : event.srcElement.classList.contains(className) },
        orderOf: function (id) { return this.orders.find(e => e.id == id); },
        itemOf: function (id, i) { return this.orderOf(id).items[i] },
        show_addCustomer: function (id = null) { // if null : new order
            // l(id, id != null ? this.orderOf(id) : {});
            this.$refs.popup.show('customer', id != null ? this.orderOf(id) : {});
        },
        show_addItem: function (orderId, itemIndex = null, event = null) {
            return this.hasClass(event, 'e') ?
                this.$refs.popup.show('item', orderId, itemIndex != null ? this.itemOf(orderId, itemIndex) : {}, itemIndex) : 0;
        },
        hide_popup: function () { this.$refs.popup.close() },
        backup: function (orderId) {
            let order = this.orders.find(e => e.id == orderId);
            if (ie(order.backup)) order.backup = _.cloneDeep(order)
            this.$set(this.updating_orders, orderId, true)
        },
        save: function (type, obj, orderId, i) {
            if (type == 'item') {
                this.backup(orderId)
                let order = this.orders.find(e => e.id == orderId);
                if (i == null) {
                    order.items.push(obj);
                    this.show(orderId, true)
                }
                else {
                    this.$set(order.items, i, obj);
                }
            }
            else
                if (ie(obj.id)) {
                    l(ie(obj.id))
                    e6lbat.add(obj).then(e => {
                        obj.id = e.id;
                        obj.items = []
                        this.orders.push(obj)
                        l(e)
                    })
                }
                else {
                    let order = this.orders.find(e => e.id == obj.id);
                    this.backup(obj.id)
                    this.$set(order, 'name', ie(obj.name, ''))
                    this.$set(order, 'contact', ie(obj.contact, ''))
                    this.$set(order, 'paid', ie(obj.paid, ''))
                    this.$set(order, 'note', ie(obj.note, ''))
                }
            // l(type,'..', obj, orderId, i, this.orders.find(e => e.id == orderId))
            this.hide_popup();
        },
        del: function (orderId) {
            e6lbat.doc(orderId).delete().then(e => {
                let i = this.orders.findIndex(e => e.id == orderId)
                this.orders.splice(i, 1)
            }).catch((e) => { l(e); alert("couldn't remove item") })
        },
        cancel_change: function (orderId, removeOnly = false) {
            let orderIndex = this.orders.findIndex(e => e.id == orderId);
            if (removeOnly)
                delete this.orders[orderIndex].backup
            else
                this.$set(this.orders, orderIndex, this.orders[orderIndex].backup)
            this.$set(this.updating_orders, orderId, false)
        },
        upload: function (orderId, add = true) {
            let order = { ...this.orders.find(e => e.id == orderId) };
            delete order.id;
            delete order.backup;
            // l(e6lbat)
            // return
            if (add)
                e6lbat.add(order)
            else
                e6lbat.doc(orderId).update(order)
            this.cancel_change(orderId, true)
        }
    },
    // watchx : {
    //     vis_items: function () {
    //         console.log(this.vis_items)
    //     }
    // },
    created: function () {
        this.orders = []
    },
    components: {
        popup: popup
    }
});

/*

    orders for a customer
                 supplier to stock [ordered + delivered]

    orders:
        customer + info
        total price + paid
        [prepaired + delivered]
        items
            price
            count
            prepaired
            delivered

    items:
        title
        list price
        [prices]
        pricing[list | fixed]

*/