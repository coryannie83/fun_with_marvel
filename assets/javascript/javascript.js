(function() {



  $(function() {


    //set variables
    var buttonSearch = $('#search-button'); //single click executes search
    var searchInput = $('#search-input');
    var resultImage = $('#result-image'); //character image
    var characterName = $('#charname')
    // let path;
    // let extension;

    buttonSearch.click(function() {
//makes api request using promises
      let result = $.get("https://gateway.marvel.com/v1/public/characters?ts=1&apikey=9f928b80b31770271fe41e53481d961f&hash=b721c9feaf9b759d66474ddba495d1cc&limit=100&nameStartsWith=" + searchInput.val());

      result.done(function(data) {
        $.each(data.data.results,function(index, character) {
          $("#characterTable tbody").append('\
          <tr> \
              <td id="charname">' + character.name + '</td> \
              <td><img id="result-image" src="' + character.thumbnail.path + "." + character.thumbnail.extension + '" style="width:100px;height:100px"/></td> \
            </tr>')
        });
      });

    });

  })

})();
