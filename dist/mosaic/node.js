System.register(["../utility", "../common"], function (_export) {
  var Utility, Common, _createClass, _classCallCheck, Node;

  return {
    setters: [function (_utility) {
      Utility = _utility.Utility;
    }, function (_common) {
      Common = _common.Common;
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Node = _export("Node", (function () {
        function Node(common, utility) {
          _classCallCheck(this, Node);

          this.common = common;
          this.utility = utility;
        }

        _createClass(Node, {
          getRowAndColomeById: {
            value: function getRowAndColomeById(id) {
              for (var i = 0; i < this.rootVM.file.rows.length; i++) {
                for (var j = 0; j < this.rootVM.file.rows[i].tiles.length; j++) {
                  if (id == this.rootVM.file.rows[i].tiles[j].id) {
                    return { row: i, column: j };
                  }
                }
              };
            }
          },
          getCleanTile: {
            value: function getCleanTile(tile) {
              return {
                id: tile.id,
                flex: tile.flex,
                url: tile.url
              };
            }
          },
          getCleanRow: {
            value: function getCleanRow(row) {
              var tiles = [];
              for (var i = 0; i < row.tiles.length; i++) {
                tiles.push(this.getCleanTile(row.tiles[i]));
              };
              return {
                id: row.id,
                height: row.height,
                tiles: tiles
              };
            }
          },
          getCleanMosaic: {
            value: function getCleanMosaic(file) {
              var rows = [];
              for (var i = 0; i < file.rows.length; i++) {
                rows.push(this.getCleanRow(file.rows[i]));
              };
              return {
                meta: {
                  id: file.meta.id,
                  create_time: file.meta.create_time,
                  name: file.meta.name,
                  type: file.meta.type
                },
                rows: rows
              };
            }
          }
        }, {
          inject: {
            value: function inject() {
              return [Common, Utility];
            }
          }
        });

        return Node;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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