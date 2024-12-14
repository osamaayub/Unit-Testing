const fetchPromise = () => {
  setTimeout(async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/person');
      const data = await response.JSON();
      return data;
    } catch (error) {
      console.error(error.message ||"Error in Data Fetching")
    }
  }, 3000);
};

module.exports = fetchPromise;
