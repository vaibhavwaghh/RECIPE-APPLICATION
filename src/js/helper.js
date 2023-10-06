import { TIME_OUT_SEC } from './config';
/**SET TIMEOUT FUNCTION WHICH WILL REJECT A PROMISE AFTER GIVEN AMOUNT OF TIME */
const timeout = function (time) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${time} second`));
    }, time * 1000);
  });
};
/**FETCH DATA AND CONVERT IT INTO JSON  */
// export const getJSON = async function (url) {
//   try {
//     const res = await Promise.race([fetch(url), timeout(TIME_OUT_SEC)]);
//     const data = await res.json();

//     if (!res.ok) {
//       throw new Error(`${data.message}`);
//     }
//     return data;
//   } catch (err) {
//     throw err;
//   }
// };
// /**GIVE THE DATA TO API */
// export const sendJSON = async function (url, uploadData) {
//   try {
//     const fetchPro = fetch(url, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/JSON',
//       },
//       body: JSON.stringify(uploadData),
//     });
//     const res = await Promise.race([fetchPro, timeout(TIME_OUT_SEC)]);
//     const data = await res.json();
//     if (!res.ok) {
//       throw new Error(`${data.message}`);
//     }
//     console.log(data);
//     return data;
//   } catch (err) {
//     throw err;
//   }
// };
export const AJAX = async function (url, uploadData = undefined) {
  try {
    const fetchPro = uploadData
      ? fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/JSON',
          },
          body: JSON.stringify(uploadData),
        })
      : fetch(url);
    const res = await Promise.race([fetchPro, timeout(TIME_OUT_SEC)]);
    const data = await res.json();
    if (!res.ok) throw new Error(`${data.message}`);
    return data;
  } catch (err) {
    throw err;
  }
};
