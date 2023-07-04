// // import * as userRepository from './auth.js';

// let tweets = [
//   {
//     id: '1',
//     text: 'Hello World',
//     createdAt: new Date().toString(),
//     userId: '1',
//   },
//   {
//     id: '2',
//     text: '안뇽!',
//     createdAt: new Date().toString(),
//     userId: '1',
//   },
// ];

// export async function getAll() {
//   return Promise.all(
//     tweets.map(async (tweet) => {
//       const { username, name, url } = await userRepository.findById(
//         tweet.userId
//       );
//       return { ...tweet, username, name, url };
//     })
//   );
// }

// export async function getAllByUsername(username) {
//   return getAll().then((tweets) =>
//     tweets.filter((tweet) => tweet.username === username)
//   );
// }

// export async function getById(id) {
//   const found = tweets.find((tweet) => tweet.id === id);
//   if (!found) {
//     return null;
//   }
//   const { username, name, url } = await userRepository.findById(found.userId);
//   return { ...found, username, name, url };
// }

// export async function create(text, userId) {
//   const tweet = {
//     id: new Date().toString(),
//     text,
//     createdAt: new Date(),
//     userId,
//   };
//   tweets = [tweet, ...tweets];
//   return getById(tweet.id);
// }

// export async function update(id, text) {
//   const tweet = tweets.find((tweet) => tweet.id === id);
//   if (tweet) {
//     tweet.text = text;
//   }
//   return getById(tweet.id);
// }

// export async function remove(id) {
//   tweets = tweets.filter((tweet) => tweet.id !== id);
// }

let tweets = [
    {
      id: '1',
      text: 'Hello World',
      createdAt: Date.now().toString(),
      name: 'Bob',
      username: 'bob',
      url: 'https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png',
    },
    {
      id: '2',
      text: 'Bonjour',
      createdAt: Date.now().toString(),
      name: 'Ellie',
      username: 'ellie',
    },
  ];
  
  export async function getAll() {
    return tweets;
  }
  
  export async function getAllByUsername(username) {
    return tweets.filter((tweet) => tweet.username === username);
  }
  
  export async function getById(id) {
    return tweets.find((tweet) => tweet.id === id);
  }
  
  export async function create(text, name, username) {
    const tweet = {
      id: Date.now().toString(),
      text,
      createdAt: new Date(),
      name,
      username,
    };
    tweets = [tweet, ...tweets];
    return tweet;
  }
  
  export async function update(id, text) {
    const tweet = tweets.find((tweet) => tweet.id === id);
    if (tweet) {
      tweet.text = text;
    }
    return tweet;
  }
  
  export async function remove(id) {
    tweets = tweets.filter((tweet) => tweet.id !== id);
  }
