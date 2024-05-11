export const baseUrl = "http://localhost:1337";

// {
//     title: 'chic',
//     category: 'chair',
//     company
// }
// filters[title][$contains]=chic&filters[category][$eq]=chair&filters[company][$eq]=luxora

export function formUrl(filterParams) {
  let queryParams = "";

  let keys = Object.keys(filterParams);

  for (let i = 0; i < keys.length; i++) {
    if (keys[i] === "title" && filterParams.title) {
      queryParams += `filters[title][$contains]=${filterParams.title}`;
    } else if (keys[i] === "category") {
      if (filterParams.category === "all") {
        continue;
      }
      queryParams += `filters[category][$eq]=${filterParams.category}`;
    } else if (keys[i] === "company") {
      if (filterParams.company === "all") {
        continue;
      }
      queryParams += `filters[company][$eq]=${filterParams.company}`;
    } else if (keys[i] === "price") {
      queryParams += `filters[price][$lte]=${filterParams.price}`;
    } else if (keys[i] === "free-shipping" && filterParams["free-shipping"]) {
      queryParams += `filters[shipping][$eq]=${filterParams["free-shipping"]}`;
    } else if (keys[i] === "sort") {
      if (filterParams.sort === "a-z") {
        queryParams += `sort=title:asc`;
      } else if (filterParams.sort === "z-a") {
        queryParams += `sort=title:desc`;
      } else if (filterParams.sort === "high") {
        queryParams += `sort=price:desc`;
      } else if (filterParams.sort === "low") {
        queryParams += `sort=price:asc`;
      }
    }

    if (i !== keys.length - 1) {
      queryParams += "&";
    }
  }
  return queryParams;
}
