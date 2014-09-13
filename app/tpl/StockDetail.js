Ext.define('POS.tpl.StockDetail', {
    extend: 'Ext.XTemplate',

    html: [
        '<div class="detail-block">',
            '<table>',
                '<tr>',
                    '<td>Produk</td>',
                    '<td>:</td>',
                    '<td>{product_name}</td>',
                '</tr>',
                '<tr>',
                    '<td>Satuan</td>',
                    '<td>:</td>',
                    '<td>{unit_name}</td>',
                '</tr>',
                '<tr>',
                    '<td>Jumlah Stock</td>',
                    '<td>:</td>',
                    '<td>{[  Ext.fn.Render.amount(values) ]} {unit_name}</td>',
                '</tr>',
                '<tr>',
                    '<td>Discount</td>',
                    '<td>:</td>',
                    '<td>{discount}</td>',
                '</tr>',
            '</table>',
        '</div>',
        '<div class="detail-block">',
            '<table>',
                '<tr>',
                    '<td>Harga Satuan</td>',
                    '<td>:</td>',
                    '<td class="right" style="width: 100px;">{[ Ext.fn.Render.currency(values.buy) ]}</td>',
                '</tr>',
                '<tr>',
                    '<td>Harga Jual Biasa</td>',
                    '<td>:</td>',
                    '<td class="right">{[ Ext.fn.Render.currency(values.sell_public) ]}</td>',
                '</tr>',
                '<tr>',
                    '<td>Harga Jual Grosir</td>',
                    '<td>:</td>',
                    '<td class="right">{[ Ext.fn.Render.currency(values.sell_distributor) ]}</td>',
                '</tr>',
                '<tr>',
                    '<td>Harga Jual Lain</td>',
                    '<td>:</td>',
                    '<td class="right">{[ Ext.fn.Render.currency(values.sell_misc) ]}</td>',
                '</tr>',
            '</table>',
        '</div>',
    ],

    constructor: function() {
        this.callParent(this.html);
    }
});