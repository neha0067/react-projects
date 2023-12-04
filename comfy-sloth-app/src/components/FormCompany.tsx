import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';

function FormCompany({defaultValue} : any) {

    const { companies }: any = useLoaderData();

    const navigate = useNavigate();

    const { search }: any = useLocation();

    function handleCompany(e: any) {
    e.preventDefault();

    const modifiedSearch: string = search.replace(
      /company=[^&]*/,
      "company=" + e.target.value
    );

    let navigationUrl = "";
    if (modifiedSearch === "") {
      navigationUrl = `/products?company=${e.target.value}`;
    } else {
      if (modifiedSearch.includes("company")) {
        navigationUrl = `/products${modifiedSearch}`;
      } else {
        navigationUrl = `/products${modifiedSearch}&company=${e.target.value}`;
      }
    }
    navigate(navigationUrl);
  }

  return (
    <section>
        <div className="mb-4">
          <h4 className="text-xl  font-bold tracking-wider mb-2">Company</h4>
          <select
            className="rounded p-1"
            name="company"
            id="company"
            defaultValue={defaultValue || 'all'}
            onChange={handleCompany}
          >
            {companies.map((company: string) => {
              return (
                <option
                  key={company}
                  value={company}
                  id={company}
                  className="capitalize"
                >
                  {company}
                </option>
              );
            })}
          </select>
        </div>
    </section>
  )
}

export default FormCompany