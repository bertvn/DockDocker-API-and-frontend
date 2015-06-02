/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
app.service('Search', function(Stream) {
            return function(params) {
                // initialize the data
                var data = [];
                // add the data page by page using a stream
                Stream.search(params, function(page) {
                    // a page of records is received.
                    // add each record to the data
                    _.each(page, function(record) {
                        data.push(record);
                    });
                });
                return data;
            };
        })
        .factory('Stream', function($q) {
            return {
                // the search function calls the oboe module to get the JSON data in a stream
                search: function(params, callback) {
                    // the defer will be resolved immediately
                    var defer = $q.defer();
                    var promise = defer.promise;
                    // counter for the received records
                    var counter = 0;
                    // I use an arbitrary page size.
                    var pagesize = 100;
                    // initialize the page of records
                    var page = [];
                    // call the oboe unction to start the stream
                    oboe({
                        url: '' + params.schema + '',
                        method: 'GET'
                    })
                            // once the stream starts we can resolve the defer.
                            .start(function() {
                                defer.resolve();
                            })
                            // for every node containing an _id
                            .node('{_id}', function(node) {
                                //  we push the node to the page
                                page.push(node);
                                counter++;
                                // if the pagesize is reached return the page using the promise
                                if (counter % pagesize === 0) {
                                    promise.then(callback(page));
                                    // initialize the page
                                    page = [];
                                }
                            })
                            .done(function() {
                                // when the stream is done make surethe last page of nodes is returned
                                promise.then(callback(page));
                            });
                    return promise;
                }
            };
        });

