import Popover from "../Popover/popover";

describe("popover", () => {
  let container;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
  });

  test("should render self", () => {
    const popover = new Popover();
    popover.bindToDOM(container);
    expect(container.innerHTML).toEqual(Popover.markUp);
  });
});
