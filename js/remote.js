var Remote = function () {
    // 游戏对象
    var game;
    // 获取dom Id
    var $ = function (id) {
        return document.getElementById(id)
    }
    //绑定按钮事件
    var bindEvents = function () {
        $('down').onlick = function () {
            game.down();
        }
        $('left').onlick = function () {
            game.left();
        }
        $('right').onlick = function () {
            game.right();
        }
        $('rotate').onlick = function () {
            game.rotate();
        }
        $('fall').onlick = function () {
            game.fall();
        }
        $('fixed').onlick = function () {
            game.fixed();
        }
        $('performNext').onlick = function () {
            game.performNext(2, 2);
        }
        $('checkClear').onlick = function () {
            game.checkClear();
        }
        $('checkGameOver').onlick = function () {
            game.checkGameOver();
        }
        $('setTime').onlick = function () {
            game.setTime(20);
        }
        $('addScore').onlick = function () {
            game.addScore(1);
        }
        $('gameover').onlick = function () {
            game.gameover(true);
        }
        $('addTailLines').onlick = function () {
            game.addTailLines([
                [0, 1, 0, 1, 0, 1, 0, 1, 0, 1]
            ]);
        }
    }
    //开始
    var start = function (type, dir) {
        var doms = {
            gameDiv: document.getElementById('remote_game'),
            nextDiv: document.getElementById('remote_next'),
            timeDiv: document.getElementById('remote_time'),
            scoreDiv: document.getElementById('remote_score'),
            resultDiv: document.getElementById('remote_gameover')
        }
        game = new Game();
        game.init(doms, type, dir);
    }
    //导出
    this.start = start;
    this.bindEvents = bindEvents;
}