/* ========================================================================
 * Copyright 2014 miso4204
 *
 * Licensed under the MIT, The MIT License (MIT)
 * Copyright (c) 2014 miso4204

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
 * ========================================================================


Source generated by CrudMaker version 1.0.0.qualifier

*/
define(['component/_shoppingCartComponent'], function() {
    App.Component.ShoppingCartComponent = App.Component._ShoppingCartComponent.extend({
        postInit: function(){
        }/*,
        render: function(domElementId) {
            var self = this;
            if (domElementId) {
                var rootElement = $('#' + domElementId);
                this.toolbarDomId = this.componentId + "-" + domElementId + "-toolbar";
                this.messageDomId = this.componentId + "-" + domElementId + "-messages";
                this.contentDomId = this.componentId + "-" + domElementId + "-content";
                rootElement.append("<div id=" + this.toolbarDomId + "></div>");
                rootElement.append("<div id=" + this.messageDomId + "></div>");
                rootElement.append("<div id=" + this.contentDomId + "></div>");
                this.toolbarComponent.toolbarController.setElement('#' + this.toolbarDomId);
                this.componentController.setElement('#' + this.contentDomId);
            }
            if (this.componentController._loadRequiredComponentsData) {
                this.componentController._loadRequiredComponentsData(function() {
                    if (self.showToolbar) {
                        self.toolbarComponent.render();
                    }
                    if (self.showList) {
                        self.componentController.list(null, self.list, self);
                    }
                    
                }       
                        );
                this.create();
            } else {
                if (this.showToolbar) {
                    this.toolbarComponent.render();
                }
                if (this.showList) {
                    this.componentController.list(null, this.list, this);
                }
                this.create();
            }
        }*/
    });
    return App.Component.ShoppingCartComponent;
});