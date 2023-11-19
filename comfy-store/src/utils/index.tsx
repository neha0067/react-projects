import axios from "axios";

const productionUrl = "http://localhost:1337/api";

export const customFetch = (prod?: boolean) => {
  return axios.create({
    baseURL: prod? "https://strapi-store-server.onrender.com/api" : productionUrl,
  });
};

export const formatPrice = (price: number) => {
  const dollarsAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(parseInt((price / 100).toFixed(2)));
  return dollarsAmount;
};

export const generateAmountOptions = (length: number) => {
  return Array.from({ length }, (_, index) => {
    const amount = index + 1;

    return (
      <option key={amount} value={amount}>
        {amount}
      </option>
    );
  });
};

export const formURLUsingParams = (params: any, url: string) : string => {
    url+= "?";
    let count = 0;
    for(let key in params){
        if(count > 0 && params[key] !== "all")
            url+= "&";
        if(key === "search"){
            url+= `filters[title][$contains]=${params[key]}`;
        } else if(key === "category"){
            if(params[key] !== "all")
                url+= `filters[category][$eq]=${params[key]}`;
        } else if(key === "company"){
            if(params[key] !== "all")
                url+= `filters[company][$eq]=${params[key]}`;
        } else if(key === "order"){
            if(params[key] === 'a-z' || params[key] === 'z-a'){
                url+= `sort=title${params[key] === "a-z" ? ":asc" : ":desc"}`;
            } else {
                url+= `sort=price${params[key] === "low" ? ":asc" : ":desc"}`;
            }
        } else if(key === "price"){
            url+= `filters[price][$lte]=${params[key]}`;
        } else if(key === "shipping"){
            url+= `filters[shipping][$eq]=${params[key]}`;
        } else if(key === 'page'){
          url+= `pagination[page]=${params[key]}`
        }
        count++;
    }
    return url;
}


