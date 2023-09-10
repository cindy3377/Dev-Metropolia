// fetch_async_await_lab.js

async function fetchData() {
  console.log("Fetching data...");

  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/nonexistent"
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Fetched data:", data);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchData();

// // fetch_async_await_lab.js

// async function fetchData() {
//     console.log("Fetching data...");

//     try {
//       const [response1, response2] = await Promise.all([
//         fetch("https://jsonplaceholder.typicode.com/posts/1"),
//         fetch("https://jsonplaceholder.typicode.com/posts/2"),
//       ]);

//       if (!response1.ok || !response2.ok) {
//         throw new Error(`HTTP error! Status: ${response1.status}, ${response2.status}`);
//       }

//       const data1 = await response1.json();
//       const data2 = await response2.json();

//       console.log("Fetched data 1:", data1);
//       console.log("Fetched data 2:", data2);
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   }

//   fetchData();
