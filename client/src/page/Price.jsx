import React, { useEffect, useState } from "react";
import PriceCard from "../component/PriceCard";

const Price = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error("Failed to load services.json", err));
  }, []);

  return (
    <div className="grid gap-8 p-6 md:grid-cols-2 lg:grid-cols-3">
      {services.map((svc) => (
        <PriceCard key={svc.id} service={svc} />
      ))}
    </div>
  );
};

export default Price;
