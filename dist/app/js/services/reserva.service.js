angular.module("Restaurant")
    .factory("reservasService", reservasService);

    reservasService.$inject = [];

    function reservasService() {
        var _mesas = [
            {codigo: 1, descricao: "01"},
            {codigo: 2, descricao: "02"},
            {codigo: 3, descricao: "03"},
            {codigo: 4, descricao: "04"},
            {codigo: 5, descricao: "05"},
            {codigo: 6, descricao: "06"},
            {codigo: 7, descricao: "07"},
            {codigo: 8, descricao: "08"},
            {codigo: 9, descricao: "09"},
            {codigo: 10, descricao: "10"}
        ];

        return {
            listaMesas: _mesas
        };
    }