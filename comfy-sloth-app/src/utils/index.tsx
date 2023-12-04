export const formatPrice = (price: number) => {
  const dollarsAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(parseInt((price / 100).toFixed(2)));
  return dollarsAmount;
};

export function getProductsFromLocalStorage() {
  const products = localStorage.getItem("products");
  return products ? JSON.parse(products) : null;
}

export function handleFilterParams(products: any, params: any) {
  let data: any = products;

  Object.keys(params).forEach((param: string) => {
    if (param === "category") {
      if (params.category === "all") {
        data = data;
      } else {
        data = data.filter((item: any) => {
          return item.category === params.category;
        });
      }
    } else if (param === "company") {
      if (params.company === "all") {
        data = data;
      } else {
        data = data.filter((item: any) => {
          return item.company === params.company;
        });
      }
    } else if (param === "price") {
      data = data.filter((item: any) => {
        if (params.price === "0-1000") {
          return item.price > 0 && item.price <= 100000;
        } else if (params.price === "1001-2000") {
          return item.price > 100000 && item.price <= 200000;
        } else if (params.price === "2001-3000") {
          return item.price > 200000 && item.price <= 300000;
        } else {
          return item.price > 300000 && item.price < 400000;
        }
      });
    } else if (param === "shipping") {
      data = data.filter((item: any) => {
        return item.shipping ? true : false;
      });
    } else if (param === "color") {
      if (params.color === "all") {
        data = data;
      } else {
        data = data.filter((item: any) => {
          return item.colors.includes("#" + params.color);
        });
      }
    } else if (param === "sort") {
      const sortOptions = [
        "Price (Lowest)",
        "Price (Highest)",
        "Name (A-Z)",
        "Name (Z-A)",
      ];

      if (params.sort === sortOptions[0]) {
        data = data.sort((a: any, b: any) => a.price - b.price);
      } else if (params.sort === sortOptions[1]) {
        data = data.sort((a: any, b: any) => b.price - a.price);
      } else if (params.sort === sortOptions[2]) {
        data = data.sort((a: any, b: any) => a.name.localeCompare(b.name));
      } else if (params.sort === sortOptions[3]) {
        data = data.sort((a: any, b: any) => b.name.localeCompare(a.name));
      }
    }
  });

  return data;
}
