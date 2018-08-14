(function () {
    let products = [
        { customer: 'Amazon', product: 'Amazon Alex' },
        { customer: 'Amazon', product: 'Amazon App' },
        { customer: 'Amazon', product: 'Kindle' },
        { customer: 'Amazon', product: 'Chromebook' },
        { customer: 'Apple', product: 'iPhone' },
        { customer: 'Apple', product: 'iPad' },
        { customer: 'Apple', product: 'iMac' },
        { customer: 'Apple', product: 'iTV' },
    ]

    function group_by(arr) {
         return arr.reduce(function (acc, curr) {
            if (acc[curr.customer]) {
                acc[curr.customer].push(curr.product);
            } else {
                acc[curr.customer] = [];
            }
            return acc;
        }, {});
    }

    console.log(group_by(products));
}());