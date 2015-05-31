System.register(["firebase", "jquery", "./common", "./utility", "aurelia-framework", "aurelia-router"], function (_export) {
  var Common, Utility, Parent, Router, _createClass, _classCallCheck, Login;

  return {
    setters: [function (_firebase) {}, function (_jquery) {}, function (_common) {
      Common = _common.Common;
    }, function (_utility) {
      Utility = _utility.Utility;
    }, function (_aureliaFramework) {
      Parent = _aureliaFramework.Parent;
    }, function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Login = _export("Login", (function () {
        function Login(common, utility, router) {
          _classCallCheck(this, Login);

          this.common = common;
          this.utility = utility;
          this.router = router;
        }

        _createClass(Login, {
          login: {
            value: function login() {
              console.log("login");
              $("#btn-login").text("Waiting...");
              var that = this;
              var ref = new Firebase(this.common.firebase_url);
              ref.authWithPassword({
                email: $("#login-username").val(),
                password: $("#login-password").val()
              }, function (err, authData) {
                console.log(err);
                if (err) {
                  $("#btn-login").text("Login");
                  alert("Login Error: " + err.code);
                } else if (authData) {
                  // user authenticated with Firebase
                  console.log("Logged In! User ID: " + authData.uid);
                  that.router.navigate("mainwindow");
                }
              });
            }
          },
          onKeyDown: {
            value: function onKeyDown(event) {
              console.log(event);
              if (13 == event.keyCode) {
                this.login();
              };
              return true;
            }
          },
          signUp: {
            value: function signUp() {
              var ref = new Firebase(this.common.firebase_url);
              var email = $("#signup-email").val();
              var password = $("#signup-password").val();
              var name = $("#signup-name").val();
              var that = this;
              ref.createUser({
                email: email,
                password: password
              }, function (error, userData) {
                if (error) {
                  console.log("Error creating user:", error);
                } else {
                  console.log("Successfully created user account with uid:", userData.uid);
                  ref.authWithPassword({
                    email: email,
                    password: password
                  }, function (err, authData) {
                    console.log(err);
                    if (err) {
                      alert("Login Error: " + err.code);
                    } else if (authData) {
                      console.log("Logged In! User ID: " + authData.uid);
                      var userNotesRef = ref.child("notes").child("users").child(userData.uid);
                      var file_id = that.utility.getUniqueId();
                      var user_notes_skeleton = {
                        directories: {
                          nodes: {
                            root: {
                              id: "root",
                              children: [file_id]
                            }
                          }
                        },
                        files: {}
                      };
                      var file_item = {
                        id: file_id
                      };
                      user_notes_skeleton.directories.nodes[file_id] = file_item;
                      var new_flat_note_skeleton = that.utility.clone(that.common.new_flat_note_skeleton);
                      new_flat_note_skeleton.meta.id = file_id;
                      new_flat_note_skeleton.meta.create_time = Firebase.ServerValue.TIMESTAMP;
                      user_notes_skeleton.files[file_id] = new_flat_note_skeleton;
                      userNotesRef.set(user_notes_skeleton);
                      var userInfoRef = ref.child("info").child("users").child(userData.uid);
                      var user_info = {
                        email: email,
                        name: name,
                        time: Firebase.ServerValue.TIMESTAMP,
                        id: file_id
                      };
                      userInfoRef.set(user_info);

                      var timelineInfoRef = ref.child("timeline").child("users").child(userData.uid);
                      var user_timeline = {
                        data: {
                          "BN-default": {
                            first_item: {
                              content: "Welcome",
                              start: that.utility.now()
                            }
                          }
                        },
                        groups: {
                          "0": {
                            content: "default",
                            id: "BN-default"
                          }
                        }
                      };
                      timelineInfoRef.set(user_timeline);

                      that.router.navigate("mainwindow");
                    }
                  });
                }
              });
            }
          }
        }, {
          inject: {
            value: function inject() {
              return [Common, Utility, Router];
            }
          }
        });

        return Login;
      })());
    }
  };
});
// if (hash.length > 2) {
//     window.location.replace("index.html" + hash);
// } else {
//     window.location.replace("list.html");
// }
//# sourceMappingURL=data:application/json;base64,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LEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFBO0FBQ25GLDRDQUFzQixDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsT0FBTyxDQUFDO0FBQ3pDLDRDQUFzQixDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUM7QUFDekUseUNBQW1CLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLHNCQUFzQixDQUFDO0FBQzVELGtDQUFZLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDdEMsMEJBQUksV0FBVyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDdkUsMEJBQUksU0FBUyxHQUFHO0FBQ2QsNkJBQUssRUFBRSxLQUFLO0FBQ1osNEJBQUksRUFBRSxJQUFJO0FBQ1YsNEJBQUksRUFBRSxRQUFRLENBQUMsV0FBVyxDQUFDLFNBQVM7QUFDcEMsMEJBQUUsRUFBRSxPQUFPO3VCQUNaLENBQUM7QUFDRixpQ0FBVyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQzs7QUFFM0IsMEJBQUksZUFBZSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDL0UsMEJBQUksYUFBYSxHQUFHO0FBQ2xCLDhCQUFRO0FBQ04sc0NBQVksRUFBRTtBQUNaLHdDQUFjO0FBQ1oscUNBQU8sRUFBRSxTQUFTO0FBQ2xCLG1DQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUU7NkJBQzFCOzJCQUNGO3lCQUNGO0FBQ0QsZ0NBQVU7QUFDUiw2QkFBRyxFQUFFO0FBQ0gscUNBQVcsU0FBUztBQUNwQixnQ0FBTSxZQUFZOzJCQUNuQjt5QkFDRjt1QkFDRixDQUFDO0FBQ0YscUNBQWUsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7O0FBRW5DLDBCQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQTtxQkFDbkM7bUJBQ0YsQ0FBQyxDQUFDO2lCQUNKO2VBQ0YsQ0FBQyxDQUFDO2FBQ0o7OztBQXpITSxnQkFBTTttQkFBQSxrQkFBRztBQUFFLHFCQUFPLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQzthQUFFOzs7O2VBRDFDLEtBQUsiLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==