function printList(dataArray, itemName, appendTo) {
  var list = dataArray.reduce(function(total, item) {
    return total + '<li class="js-' + itemName + '">' + item + '</li>';
  }, '');

  $(appendTo).append(list);
}

function listenForButtonClick() {
  $('.js-button').click(function(event) {
    event.preventDefault();

    $.get('/lamps')

    .done(function(lamps) {
      printList(lamps, 'lamp', '.js-lampsUl');
    })

    .fail(function(error) {
      console.log(error);
    });
  });
}

listenForButtonClick();