function NavigationManager(list, FirstSelectedItem) {
  this.list = list;
  var selectedItem = FirstSelectedItem;

  var InitalizeEvents = function () {
    const SelectedEvent = new CustomEvent("Selected", { detail: selectedItem });
    selectedItem.dispatchEvent(SelectedEvent);
  };

  this.setSelectedItemByIndex = function (index) {
    this.selectedItem = list[index];
  };

  this.setSelectedItemByValue = function (value) {
    if (list.includes(value)) {
      this.selectedItem = value;
      return;
    }
    throw "Value Not in List";
  };

  this.AddEventlistenerToList = function (eventlistener, action) {
    for (var i = 0; i < list.length; i++) {
      list[i].addEventListener(eventlistener, action);
      list[i].index = i;
    }
    InitalizeEvents();
  };

  var setSelectedItemOnHover = function (event) {
    const SelectedEvent = new CustomEvent("Selected", {
      detail: event.currentTarget,
    });
    const DeSelectedEvent = new CustomEvent("Deselected", {
      detail: selectedItem,
    });
    selectedItem.dispatchEvent(DeSelectedEvent);
    selectedItem = list[event.currentTarget.index];
    event.currentTarget.dispatchEvent(SelectedEvent);
  };
}


function PageNavigator(parentElement, totalPage) {
  this.parent = parentElement;
  this.totalPage = totalPage;

  var parentHeight = this.parent.scrollHeight;
  var heightPerPage = parentHeight / this.totalPage;
  var currentPage = 1;
  var currentY = 0;

  var reCalculateHeight = function () {
    heightPerPage = parentElement.scrollHeight / totalPage;
  };

  var FunctionOnScroll = function (event) {
    reCalculateHeight();
    if (currentY > event.currentTarget.scrollTop) {
      if ((event.currentTarget.scrollTop / heightPerPage) % 1 < 0.1) {
        let pageClosedEvent = new CustomEvent("PageClosed", {
          detail: currentPage,
        });
        event.currentTarget.dispatchEvent(pageClosedEvent);
        currentPage =
          Math.round(event.currentTarget.scrollTop / heightPerPage) + 1;
        let pageOpenEvent = new CustomEvent("PageOpened", {
          detail: currentPage,
        });
        event.currentTarget.dispatchEvent(pageOpenEvent);
      }
    } else {
      if (
        currentPage !=
        Math.round(event.currentTarget.scrollTop / heightPerPage) + 1
      ) {
        let pageClosedEvent = new CustomEvent("PageClosed", {
          detail: currentPage,
        });
        event.currentTarget.dispatchEvent(pageClosedEvent);
        currentPage =
          Math.round(event.currentTarget.scrollTop / heightPerPage) + 1;
        let pageOpenEvent = new CustomEvent("PageOpened", {
          detail: currentPage,
        });
        event.currentTarget.dispatchEvent(pageOpenEvent);
      }
    }
    currentY = event.currentTarget.scrollTop;
  };
  this.parent.addEventListener("scroll", FunctionOnScroll);
}




function HorizontalPageNavigator(parentElement, totalPage) {
  this.parent = parentElement;
  this.totalPage = totalPage;

  var parentwidth = this.parent.scrollWidth;
  var widthPerPage = parentwidth / this.totalPage;
  var currentPage = 1;
  var currentX = 0;

  var reCalculatewidth = function () {
    widthPerPage = parentElement.scrollWidth / totalPage;
  };

  var FunctionOnScroll = function (event) {
    reCalculatewidth();
    if (currentX > event.currentTarget.scrollLeft) {
      if ((event.currentTarget.scrollLeft / widthPerPage) % 1 < 0.1) {
        let pageClosedEvent = new CustomEvent("PageClosed", {
          detail: currentPage,
        });
        event.currentTarget.dispatchEvent(pageClosedEvent);
        currentPage =
          Math.round(event.currentTarget.scrollLeft / widthPerPage) + 1;
        let pageOpenEvent = new CustomEvent("PageOpened", {
          detail: currentPage,
        });
        event.currentTarget.dispatchEvent(pageOpenEvent);
      }
    } else {
      if (
        currentPage !=
        Math.round(event.currentTarget.scrollLeft / widthPerPage) + 1
      ) {
        let pageClosedEvent = new CustomEvent("PageClosed", {
          detail: currentPage,
        });
        event.currentTarget.dispatchEvent(pageClosedEvent);
        currentPage =
          Math.round(event.currentTarget.scrollLeft / widthPerPage) + 1;
        let pageOpenEvent = new CustomEvent("PageOpened", {
          detail: currentPage,
        });
        event.currentTarget.dispatchEvent(pageOpenEvent);
      }
    }
    currentX = event.currentTarget.scrollLeft;
  };
  this.parent.addEventListener("scroll", FunctionOnScroll);
}





export { NavigationManager, PageNavigator,HorizontalPageNavigator };
