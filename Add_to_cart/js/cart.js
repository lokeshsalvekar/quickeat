
(function( $ ) {
    $.Shop = function( element ) {
        this.$element = $( element ); // top-level element
        this.init();
    };

    $.Shop.prototype = {
        init: function() {
            // initializes properties and methods
        }
    };

    $(function() {
        var shop = new $.Shop( "#site" ); // object's instance
    });

})( jQuery );

//  *********


$(function() {
    var shop = new $.Shop( "#site" );
    console.log( shop.$element );
});


//  op****
// x.fn.x.init[1]
//     0: div#site
//     context: document
//     length: 1
//     selector: "#site"


//  // ********

$.Shop.prototype = {
    init: function() {
        // Properties

            this.cartPrefix = "winery-"; // prefix string to be prepended to the cart's name in session storage
            this.cartName = this.cartPrefix + "cart"; // cart's name in session storage
            this.shippingRates = this.cartPrefix + "shipping-rates"; // shipping rates key in session storage
            this.total = this.cartPrefix + "total"; // total key in the session storage
            this.storage = sessionStorage; // shortcut to sessionStorage object

            this.$formAddToCart = this.$element.find( "form.add-to-cart" ); // forms for adding items to the cart
            this.$formCart = this.$element.find( "#shopping-cart" ); // Shopping cart form
            this.$checkoutCart = this.$element.find( "#checkout-cart" ); // checkout form cart
            this.$checkoutOrderForm = this.$element.find( "#checkout-order-form" ); // checkout user details form
            this.$shipping = this.$element.find( "#sshipping" ); // element that displays the shipping rates
            this.$subTotal = this.$element.find( "#stotal" ); // element that displays the subtotal charges
            this.$shoppingCartActions = this.$element.find( "#shopping-cart-actions" ); // cart actions links
            this.$updateCartBtn = this.$shoppingCartActions.find( "#update-cart" ); // update cart button
            this.$emptyCartBtn = this.$shoppingCartActions.find( "#empty-cart" ); // empty cart button
            this.$userDetails = this.$element.find( "#user-details-content" ); // element that displays the user's information
            this.$paypalForm = this.$element.find( "#paypal-form" ); // PayPal form

            this.currency = "&euro;"; // HTML entity of the currency to be displayed in layout
            this.currencyString = "€"; // currency symbol as text string
            this.paypalCurrency = "EUR"; // PayPal's currency code
            this.paypalBusinessEmail = "yourbusiness@email.com"; // your PayPal Business account email address
            this.paypalURL = "https://www.sandbox.paypal.com/cgi-bin/webscr"; // URL of the PayPal form

            // object containing patterns for form validation
            this.requiredFields = {
                expression: {
                    value: /^([w-.]+)@((?:[w]+.)+)([a-z]){2,4}$/
                },

                str: {
                    value: ""
                }

            };

            // public methods invocation
    }
};


//  *****

if( $element.length ) {
    // the element exists
}


// ****

var $body = $( "body" ),
    page = $body.attr( "id" );

    switch( page ) {
        case "product-list":
            // actions for handling products
            break;
        case "shopping-cart":
            // actions for handling the shopping cart
            break;
        case "checkout":
            // actions for handling the checkout's page
            break;
        default:
            break;
    }

    // 


    $.Shop.prototype = {
        // empties session storage
    
        _emptyCart: function() {
            this.storage.clear();
        }
    };

    
    // 
    
/* Format a number by decimal places
 * @param num Number the number to be formatted
 * @param places Number the decimal places
 * @returns n Number the formatted number
*/

// _formatNumber: function( num, places ) {
//     var n = num.toFixed( places );
//     return n;
// }

//  *****

/* Extract the numeric portion from a string
 * @param element Object the jQuery element that contains the relevant string
 * @returns price String the numeric string
 */

// _extractPrice: function( element ) {
//     var self = this;
//     var text = element.text();
//     var price = text.replace( self.currencyString, "" ).replace( " ", "" );
//     return price;
// }


//  *****

var text = $.trim( element.text() );


//  ***********

/* Converts a numeric string into a number
 * @param numStr String the numeric string to be converted
 * @returns num Number the number, or false if the string cannot be converted
 */

_convertString: function( numStr ) {
    var num;
    if( /^[-+]?[0-9]+.[0-9]+$/.test( numStr ) ) {
        num = parseFloat( numStr );
    } else if( /^d+$/.test( numStr ) ) {
        num = parseInt( numStr );
    } else {
        num = Number( numStr );
    }

    if( !isNaN( num ) ) {
        return num;
    } else {
        console.warn( numStr + " cannot be converted into a number" );
        return false;
    }
},

/* Converts a number to a string
 * @param n Number the number to be converted
 * @returns str String the string returned
 */

_convertNumber: function( n ) {
    var str = n.toString();
    return str;
}
