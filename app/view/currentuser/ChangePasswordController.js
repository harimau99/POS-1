Ext.define('POS.view.currentuser.ChangePasswordController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.change-password',

    requires: [
        'Ext.fn.Util'
    ],

    control: {
        '#': {
            boxready: function(panel){
                var old_password = panel.down('[name = old_password]');
                setTimeout(function(){
                    old_password.focus();
                }, 10);
            }
        },
        'textfield': {
            specialkey: function(f, e){
                if(e.getKey() == e.ENTER) this.save();
            }
        }
    },

    close: function(){
        this.getView().close();
    },

    save: function(){
        var	panel            = this.getView(),
            form             = panel.down('form'),
            oldPass	         = form.down('textfield[name = old_password]'),
            newPass	         = form.down('textfield[name = new_password]'),
            verPass	         = form.down('textfield[name = verify_password]');

        if(form.getForm().isValid()){
            // encrypt password
            var oldPassEncrypted = Ext.fn.Util.SHA512(oldPass.getValue());
            var newPassEncrypted = Ext.fn.Util.SHA512(newPass.getValue());
            
            var params = {
                oldPassEncrypted: oldPassEncrypted,
                newPassEncrypted: newPassEncrypted
            }

            panel.setLoading(true);
            var monitor = Ext.fn.WebSocket.monitor(
                Ext.ws.Main.on('option/changePassword', function(websocket, data){
                    clearTimeout(monitor);
                    panel.setLoading(false);
                    if (data.success){
                        Ext.fn.App.notification('Password Diubah', 'Selamat, password Anda telah berhasil diubah.');
                        panel.close();
                    }else{
                        Ext.fn.App.notification('Ups', data.errmsg);
                        oldPass.setValue('');
                    }
                }, this, {
                    single: true,
                    destroyable: true
                }),
                panel,
                false
            );
            Ext.ws.Main.send('option/changePassword', params);
        }
    }
});
