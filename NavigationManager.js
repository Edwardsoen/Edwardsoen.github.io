function VerticalPageNavigator(parentElement, totalPage) {
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

function AddEventlistenerToList(list, eventlistenerName, action) {
  for (var i = 0; i < list.length; i++) {
    list[i].addEventListener(eventlistenerName, action);
    list[i].index = i;
  }
}

export {
  VerticalPageNavigator,
  HorizontalPageNavigator,
  AddEventlistenerToList,
};
