window.matchMedia = (query) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: jest.fn(), // eslint-disable-line
  removeListener: jest.fn(), // eslint-disable-line
  addEventListener: jest.fn(), // eslint-disable-line
  removeEventListener: jest.fn(), // eslint-disable-line
  dispatchEvent: jest.fn(), // eslint-disable-line
})
