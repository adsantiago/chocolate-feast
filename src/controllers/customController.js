const controller = {};

let bars = 0

controller.main = (req, res) => {
    res.render('main', {
        data: bars
    });
    bars = 0;
};

controller.do = (req, res) => {
    function recieveData(n, c, m) {
        let bars = 0;
        let wrappers = 0;

        bars = Math.floor(n / c);
        wrappers = bars;

        while (wrappers >= m) {
            wrappers = wrappers - m;
            bars += 1
            wrappers += 1
        }

        return bars;
    }

    const data = req.body;

    bars = recieveData(data.money, data.bar, data.wrapper);

    res.redirect('/');
}

module.exports = controller;
