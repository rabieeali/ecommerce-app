import Layout from "./../layout/Layout";
import { products } from "../data/data";
import CardComponent from "../components/CardComponent";


const HomePage = () => {
  return (

      <Layout>
        <div className="container">
          <div className="row g-3">
            {products.map((p, index) => (
              <div key={index} className="col-md-3">
                <CardComponent
                  data={p}
                  id={p.id}
                  name={p.name}
                  price={p.price}
                  image={p.image}
                  alt={p.name}
                />
              </div>
            ))}
          </div>
        </div>
      </Layout>
 
  );
};

export default HomePage;
