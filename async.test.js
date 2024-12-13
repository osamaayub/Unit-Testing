const fetchData = require('./async');

// Mock fetch
global.fetch = jest.fn();

describe('fetchData', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    fetch.mockClear();
  });

  afterEach(() => {
    jest.useRealTimers();
    jest.clearAllMocks();
  });
  it('verifies timer works', () => {
    const mockFn = jest.fn();
    setTimeout(mockFn, 3000);

    jest.runAllTimers();
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('fetches data after 3 seconds', async () => {
    // Mock fetch response
    const mockResponse = { id: 1, title: 'Test Todo' };
    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockResponse),
    });

    // Call fetchData
    fetchData();

    // Advance time by 3 seconds
    jest.runAllTimers();

    // Wait for promises
    await Promise.resolve();

    // Assertions
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/todos/1');
  });
});
