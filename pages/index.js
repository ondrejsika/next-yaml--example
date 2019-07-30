import yaml from "./data.yml";

export default () => (
  <p>
    <b>{yaml.name}</b>
    <br />
    {yaml.location.city}, {yaml.location.country}
  </p>
);
