$(() => {
    let tabId = ["show-front", "show-back", "show-left", "show-right", "show-top", "show-bottom"];
    let lastId = 0;
    /*let math = ((min, max)=> {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    })(0,tab.length-1);*/


    $(".cube").on("click", function () {
        let newId;
        do {
            newId = getNewId(0, tabId.length - 1);
        } while (lastId === newId);

        lastId = newId;

        $(".cube").removeAttr('id');
        $(".cube").attr('id', tabId[newId]);
    })

});

function getNewId(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
